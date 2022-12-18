import { z } from 'zod';
import { WithId, WithIdSchema } from './common/withId';
import { ObjectSchema } from './type/ObjectSchema';

export interface Ability extends WithId {
  name: string;
  englishName: string;
  description: string;
  referenceUrl: string;
}

export const AbilitySchema: ObjectSchema<Ability> = z
  .object({
    name: z.string(),
    englishName: z.string(),
    description: z.string(),
    referenceUrl: z.string(),
  })
  .merge(WithIdSchema);
