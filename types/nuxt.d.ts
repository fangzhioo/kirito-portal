import { AxiosRequestConfig, AxiosInstance as IAxiosInstance } from 'axios';
import { Context } from '@nuxt/types';
import { apitype } from '../app/api';

/** nuxt axios module */
export interface AxiosInstance extends IAxiosInstance {
  setHeader(name: string, value: any): void;
  setToken(token: string, type: string): void;
  onRequest(fn: (config: any) => void): void;
  onResponse(fn: (response: any) => void): void;
  onRequestError(fn: (error: Error) => void): void;
  onResponseError(fn: (error: Error) => void): void;
  onError(fn: (error: Error) => void): void;
  $request<T = any>(config: AxiosRequestConfig): Promise<T>;
  $get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  $delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  $head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  $options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  $post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  $put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  $patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

/** nuxt middleware function */
export type MiddleWare = string | ((ctx: Context, cb?: Function) => Promise<void> | void);

/** nuxt plugin function */
export type Plugin = (ctx: Context, inject: (name: string, value: any) => void) => Promise<void> | void;

declare module '@nuxt/types' {
  // extends Context interface
  interface Context {
    $axios: Nuxt.AxiosInstance;
    $API: apitype;
  }
}

declare module '@nuxt/types' {
  // extends Context interface
  interface NuxtApp {
    layoutName: string;
    setLayout(layoutName: string): void;
  }
}

export { Context } from '@nuxt/types';

// UMD module , so we can use global namesapce Nuxt.Context || Nuxt.MiddleWare || Nuxt.Plugin etc;
// eslint-disable-next-line no-undef
export as namespace Nuxt;
