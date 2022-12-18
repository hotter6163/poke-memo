import { WithId } from 'schema/src/common/withId';
import { z } from 'zod';
import { add } from './add';
import { getAll } from './getAll';
import { ObjectSchema } from 'schema';

export const createDao = <T extends WithId>(path: string, schema: ObjectSchema<T>) => ({
  getAll: getAll(path, schema),
  add: add(path, schema),
});
