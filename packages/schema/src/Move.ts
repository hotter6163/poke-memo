import { z } from 'zod';
import { WithIdSchema } from './common/withId';
import { TypeSchema } from './Type';

enum MoveSpecies {
  Physical = '物理',
  Special = '特殊',
  Status = '変化',
}

export const MoveSchema = z
  .object({
    name: z.string(),
    englishName: z.string(),
    species: z.nativeEnum(MoveSpecies),
    type: TypeSchema,
    power: z.number().nullable(),
    accuracy: z.number().min(0).max(100),
    powerPoint: z.number(),
    contact: z.boolean(),
    protect: z.boolean(),
    target: z.string(),
    referenceUrl: z.string(),
  })
  .merge(WithIdSchema);

export type Move = z.infer<typeof MoveSchema>;
