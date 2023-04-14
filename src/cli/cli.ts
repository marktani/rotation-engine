import * as fs from 'fs';
import { transformTablesFromCsvStream } from '../csv/parse';
import { rotateTableLeft } from '../core/rotate';

const args = process.argv;

const input = args[2] as fs.PathLike;

transformTablesFromCsvStream(fs.createReadStream(input), rotateTableLeft, process.stdout);
