import * as fs from 'fs';
import * as os from 'os';
import { Transform, Writable } from 'stream';

import * as csv from 'fast-csv';
import { match } from 'ts-pattern';

import { rotateTableLeft } from '../core/rotate';
import { verifyTableContent } from '../core/verify';
import { verifyCsvHeaders } from './verify';

const readTableFromRowAndRotateLeft = new Transform({
  objectMode: true,
  transform(row, encoding, callback) {
    const table = { id: row.id, content: JSON.parse(row.json) };
    let outputRow = match(verifyTableContent(table.content))
      .with(true, () => `${table.id},"${JSON.stringify(rotateTableLeft(table.content))}",true`)
      .with(false, () => `${table.id},"[]",false`)
      .exhaustive();

    outputRow += os.EOL;

    callback(null, outputRow);
  },
});

export const rotateTablesFromCsv = (path: fs.PathLike, output: Writable): void => {
  fs.createReadStream(path)
    .pipe(csv.parse({ headers: true, delimiter: ',' }))
    .on('headers', (headers) => {
      if (verifyCsvHeaders(headers)) {
        output.write('id,json,is_valid');
        output.write(os.EOL);
      } else {
        throw Error('invalid headers in csv file');
      }
    })
    .pipe(readTableFromRowAndRotateLeft)
    .pipe(output)
    .on('error', (e) => {
      // fail fast
      throw e;
    });
};
