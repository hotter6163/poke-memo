import { getDocs } from 'firebase/firestore';
import { z } from 'zod';
import { collection, db } from './db';
import { WithId } from 'schema/src/common/withId';
import { ObjectSchema } from 'schema';

export const getAll =
  <T extends WithId>(path: string, schema: ObjectSchema<T>) =>
  () =>
    getDocs(collection(path)).then((snapshot) => {
      const parseData = snapshot.docs.map((doc) => {
        const data = {
          id: doc.id,
          ...doc.data(),
        } as T;

        return {
          data,
          parseResult: schema.safeParse(data),
        };
      });

      const errors = parseData
        .map((data) =>
          data.parseResult.success
            ? undefined
            : { id: data.data.id, errors: data.parseResult.error },
        )
        .filter((data) => data !== undefined) as { id: string; errors: z.ZodError<T> }[];
      errors.forEach((error) => {
        console.warn(`[${path[path.length - 1]}] id:${error.id} is invalid: ${error.errors}`);
      });

      return {
        data: parseData.map((data) => data.data),
        errors,
      };
    });
