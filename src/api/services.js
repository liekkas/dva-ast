import {
  getTemplate,
  writeFile,
  readFile,
  removeFile,
} from './utils';
import assert from 'assert';
import { extname, join } from 'path';
import { existsSync } from 'fs';

export function create(payload) {
  const template = getTemplate('services.create');
  const source = template(payload);
  const filePath = join(payload.sourcePath, payload.filePath);
  assert(!existsSync(filePath), 'api/services/create: file exists');
  writeFile(filePath, source);
}
