import { z } from 'zod';
import { WithIdSchema } from './common/withId';

export const AbilitySchema = z
  .object({
    name: z.string(),
    englishName: z.string(),
    description: z.string(),
  })
  .merge(WithIdSchema);

export type Ability = z.infer<typeof AbilitySchema>;
