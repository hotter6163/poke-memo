import { z } from 'zod';

export enum Type {
  Normal = 'ノーマル',
  Fire = 'ほのお',
  Water = 'みず',
  Grass = 'くさ',
  Electric = 'でんき',
  Ice = 'こおり',
  Fighting = 'かくとう',
  Poison = 'どく',
  Ground = 'じめん',
  Flying = 'ひこう',
  Psychic = 'エスパー',
  Bug = 'むし',
  Rock = 'いわ',
  Ghost = 'ゴースト',
  Dragon = 'ドラゴン',
  Dark = 'あく',
  Steel = 'はがね',
  Fairy = 'フェアリー',
}

export const TypeSchema = z.nativeEnum(Type);