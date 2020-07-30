import { portal } from './portal';
import defs from './api';

export type apitype = typeof defs;
export const api = { portal } as apitype;
