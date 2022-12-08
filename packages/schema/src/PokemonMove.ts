import { z } from 'zod';
import { WithIdSchema } from './common/withId';

enum MethodType {
  Level = 'level',
  TechnicalMachine = 'technicalMachine',
  Eggs = 'eggs',
}

export const PokemonMoveSchema = z
  .object({
    moveId: z.string(),
    method: z.discriminatedUnion('type', [
      z.object({ type: z.literal(MethodType.Level), level: z.number() }),
      z.object({ type: z.literal(MethodType.TechnicalMachine) }),
      z.object({ type: z.literal(MethodType.Eggs) }),
    ]),
  })
  .merge(WithIdSchema);

export type PokemonMove = z.infer<typeof PokemonMoveSchema>;
