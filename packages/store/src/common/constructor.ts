import { collection, getDocs } from 'firebase/firestore';
import { z } from 'zod';
import { db } from './db';

// 必要な機能
// create
// read
// update
// delete
export const constructor =
  <T extends z.ZodRawShape>(path: string[], schema: z.ZodObject<T>) =>
  () =>
    getDocs(collection(db, path[0], ...path.slice(1, path.length))).then((snapshot) =>
      snapshot.docs.map((doc) =>
        schema.parse({
          id: doc.id,
          ...doc.data(),
        }),
      ),
    );
