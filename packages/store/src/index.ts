import { UserSchema } from 'schema';
import { constructor } from './common/constructor';

export const getUsers = constructor(['users'], UserSchema);
