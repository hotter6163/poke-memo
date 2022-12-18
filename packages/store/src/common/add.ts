import { addDoc, setDoc } from 'firebase/firestore';
import { WithId } from 'schema/src/common/withId';
import { collection, doc } from './db';
import { SelectPartial } from '../type/SelectPartial';
import { ObjectSchema } from 'schema';

export const add =
  <T extends WithId>(path: string, schema: ObjectSchema<T>) =>
  ({ id, ...data }: SelectPartial<T, 'id'>) =>
    id
      ? setDoc(doc(path, id), schema.omit({ id: true }).parse(data))
      : addDoc(collection(path), schema.omit({ id: true }).parse(data));
