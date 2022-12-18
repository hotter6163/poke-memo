import { z } from 'zod';

export type ObjectSchema<T> = z.ZodObject<
  z.extendShape<T, z.ZodRawShape>,
  'strip',
  z.ZodType<T>,
  T
>;
