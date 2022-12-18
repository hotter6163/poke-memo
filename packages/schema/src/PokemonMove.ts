import { z } from 'zod';
import { WithIdSchema } from './common/withId';
import { ObjectSchema } from './type/ObjectSchema';

enum MethodType {
  Level = 'level',
  TechnicalMachine = 'technicalMachine',
  Eggs = 'eggs',
}

type Method =
  | {
      type: MethodType.Level;
      level: number;
    }
  | {
      type: MethodType.TechnicalMachine | MethodType.Eggs;
    };

export interface PokemonMove {
  id: string;
  moveId: string;
  method: Method;
}

export const PokemonMoveSchema: ObjectSchema<PokemonMove> = z
  .object({
    moveId: z.string(),
    method: z.discriminatedUnion('type', [
      z.object({ type: z.literal(MethodType.Level), level: z.number() }),
      z.object({ type: z.literal(MethodType.TechnicalMachine) }),
      z.object({ type: z.literal(MethodType.Eggs) }),
    ]),
  })
  .merge(WithIdSchema);
