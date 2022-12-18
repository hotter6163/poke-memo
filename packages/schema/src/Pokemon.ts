import { z } from 'zod';
import { WithIdSchema } from './common/withId';
import { Type } from './Type';
import { ObjectSchema } from './type/ObjectSchema';

export interface Pokemon {
  id: string;
  number: number;
  paldeaNumber: number;
  name: string;
  englishName: string;
  types: Type[];
  baseStats: {
    hitPoints: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  abilityIds: string[];
  hiddenAbilityId: string | null;
  moveIds: string[];
  referenceUrl: string;
}

export const PokemonSchema: ObjectSchema<Pokemon> = z
  .object({
    number: z.number(),
    paldeaNumber: z.number(),
    name: z.string(),
    englishName: z.string(),
    types: z.array(z.nativeEnum(Type)).max(2),
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
