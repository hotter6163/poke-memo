import { createDao } from './common/createDao';
import { AbilitySchema } from 'schema';

export const AbilitiesDao = () => createDao('abilities', AbilitySchema);
