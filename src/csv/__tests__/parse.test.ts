import * as path from 'path';
import * as fs from 'fs';
import { Writable, WritableOptions } from 'stream';
import { transformTablesFromCsvStream } from '../parse';
import { rotateTableLeft } from '../../core/rotate';

// We test that the "read csv -> rotation -> write to stream" pipeline works as expected.
// To avoid writing to the file-system, we define an in-memory writable stream here.
class InMemoryWritable extends Writable {
  private buffer = '';

  constructor(opts?: WritableOptions) {
    super(opts);
  }

  // overwrite Writable#_write
  _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void) {
    this.buffer += chunk.toString();
    callback();
  }

  getData(): string {
    return this.buffer;
  }
}

describe('parse', () => {
  describe('parseCsv', () => {
    test('simple csv', async () => {
      const output = new InMemoryWritable({ objectMode: true });

      await transformTablesFromCsvStream(
        fs.createReadStream(path.resolve(__dirname, '1.csv')),
        rotateTableLeft,
        output,
      );

      expect(output.getData()).toEqual(`id,json,is_valid
1,"[2,3,6,1,5,9,4,7,8]",true
2,"[20,10,40,90]",true
3,"[-5]",true
9,"[]",false
5,"[]",false
8,"[]",false`);
    });
  });
});
