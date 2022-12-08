import { z } from 'zod';
import { WithIdSchema } from './common/withId';
import { TypeSchema } from './Type';

export const PokemonSchema = z
  .object({
    number: z.number(),
    paldeaNumber: z.number(),
    name: z.string(),
    englishName: z.string(),
    types: z.array(TypeSchema).max(2),
    baseStats: z.object({
      hitPoints: z.number(),
      attack: z.number(),
      defense: z.number(),
      specialAttack: z.number(),
      specialDefense: z.number(),
      speed: z.number(),
    }),
    abilityIds: z.array(z.string()).max(2),
    hiddenAbilityId: z.string().nullable(),
    moveIds: z.array(z.string()),
    referenceUrl: z.string(),
  })
  .merge(WithIdSchema);

export type Pokemon = z.infer<typeof PokemonSchema>;
