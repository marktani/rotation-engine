import { PathLike } from 'fs';
import { rotateTablesFromCsv } from '../csv/parse';

const args = process.argv;

const input = args[2] as PathLike;

rotateTablesFromCsv(input, process.stdout);
