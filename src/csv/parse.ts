import * as fs from 'fs';
import * as os from 'os';
import { Readable, Writable, pipeline } from 'stream';

import * as csv from 'fast-csv';
import { match } from 'ts-pattern';

import { verifyTableContent } from '../core/verify';
import type { Table, TableTransformation } from '../core/types';

interface TableRow {
  id: string;
  json: string;
}

const rowToTable = (tableRow: TableRow): Table => {
  return { id: tableRow.id, content: JSON.parse(tableRow.json) };
};

const createTransform = (tableTransformation: TableTransformation) => {
  return (tableRow: TableRow) => {
    const table = rowToTable(tableRow);

    const result = match(verifyTableContent(table.content))
      .with(true, () => ({
        id: table.id,
        json: `"${JSON.stringify(tableTransformation(table.content))}"`,
        is_valid: true,
      }))
      .with(false, () => ({
        id: table.id,
        json: `"[]"`,
        is_valid: false,
      }))
      .exhaustive();

    return result;
  };
};

export const transformTablesFromCsvStream = (
  input: Readable,
  tableTransformation: TableTransformation,
  output: Writable,
) => {
  return new Promise<void>((resolve, reject) => {
    pipeline(
      input,
      csv.parse({ headers: (headers) => [...headers, 'is_valid'] }),
      csv.format({ headers: true, transform: createTransform(tableTransformation), quote: false }),
      output,
      (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      },
    );
  });
};
