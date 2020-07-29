import { petstore } from './petstore';
import { blog } from './blog';
import defs from './api';

export type apitype = typeof defs;
export const api = { petstore, blog } as apitype;
