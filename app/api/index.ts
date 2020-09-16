import { portal } from './portal';
import { auth } from './auth';
import defs from './api';

export type apitype = typeof defs;
export const api = { portal, auth } as apitype;
