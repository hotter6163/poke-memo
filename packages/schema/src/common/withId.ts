import { TypeOf, z } from 'zod';

export interface WithId {
  id: string;
}

export const WithIdSchema = z.object({
  id: z.string(),
});
