import * as path from 'path';
import { rotateTablesFromCsv } from '../parse';
import { Writable } from 'stream';

// We test that the "read csv -> rotation -> write to stream" pipeline works as expected.
// To avoid writing to the file-system, we define an in-memory writable stream here.
class InMemoryWritable extends Writable {
  private buffer = '';

  constructor() {
    super();
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
    test('simple csv', (done) => {
      const output = new InMemoryWritable();

      new Promise<unknown>((resolve) => {
        rotateTablesFromCsv(path.resolve(__dirname, '1.csv'), output);

        output.on('end', (data) => {
          resolve(data);
          expect(output.getData()).toEqual(`
id,json,is_valid
1,"[2, 3, 6, 1, 5, 9, 4, 7, 8]",true
2,"[20, 10, 40, 90]",true
3,"[-5]",true
9,"[]",false
5,"[]",false
8,"[]",false`);
        });
        done();
      });
    });
  });
});
