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
  assert(payload.componentName, 'api/components/create: payload should have componentName');
  const template = payload.state ? getTemplate('statecomponents.create') : getTemplate('components.create');
  const source = template(payload);
  const filePath = join(payload.sourcePath, payload.filePath);
  assert(!existsSync(filePath), 'api/components/create: file exists');
  writeFile(filePath, source);
}
