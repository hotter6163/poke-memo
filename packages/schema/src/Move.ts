import { z } from 'zod';
import { WithIdSchema } from './common/withId';
import { Type } from './Type';
import { ObjectSchema } from './type/ObjectSchema';

enum MoveSpecies {
  Physical = 'physical',
  Special = 'special',
  Status = 'status',
}

export interface Move {
  id: string;
  name: string;
  englishName: string;
  species: MoveSpecies;
  type: Type;
  power: number | null;
  accuracy: number;
  powerPoint: number;
  contact: boolean;
  protect: boolean;
  target: string;
  referenceUrl: string;
}

export const MoveSchema: ObjectSchema<Move> = z
  .object({
    name: z.string(),
    englishName: z.string(),
    species: z.nativeEnum(MoveSpecies),
    type: z.nativeEnum(Type),
    power: z.number().nullable(),
    accuracy: z.number().min(0).max(100),
    powerPoint: z.number(),
    contact: z.boolean(),
    protect: z.boolean(),
    target: z.string(),
    referenceUrl: z.string(),
  })
  .merge(WithIdSchema);
