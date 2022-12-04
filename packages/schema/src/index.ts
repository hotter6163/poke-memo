import { z } from 'zod';

const WithIdSchema = z.object({
  id: z.string(),
});

const BaseUserSchema = z.object({
  name: z.string(),
  age: z.number(),
});

export const UserSchema = BaseUserSchema.merge(WithIdSchema);

export type User = z.infer<typeof UserSchema>;
