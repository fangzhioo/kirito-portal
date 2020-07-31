type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

import { RequestConfig } from '~/utils/fetch';

export namespace portal {
  export class AuthBO {
    /** token */
    token: string;

    /** user */
    user: portal.SsoUserBO;
  }

  export class CommonResult {
    /** code */
    code: number;

    /** data */
    data: T0;

    /** msg */
    msg: string;
  }

  export class LoginUser {
    /** email */
    email: string;

    /** password */
    password: string;

    /** remember */
    remember: boolean;
  }

  export class RegisterUser {
    /** confirmPassword */
    confirmPassword: string;

    /** email */
    email: string;

    /** nickName */
    nickName: string;

    /** password */
    password: string;
  }

  export class SsoUserBO {
    /** avatar */
    avatar: string;

    /** createdTime */
    createdTime: string;

    /** email */
    email: string;

    /** modifyTime */
    modifyTime: string;

    /** nickName */
    nickName: string;

    /** phone */
    phone: string;

    /** signature */
    signature: string;

    /** userId */
    userId: number;

    /** userName */
    userName: string;
  }
}

export namespace portal {
  /**
   * User Controller
   */
  export namespace user {
    /**
     * current
     * /auth/current
     */
    export namespace current {
      export type ResponseType = Promise<portal.CommonResult<portal.SsoUserBO>>;
      export function request(options?: RequestConfig): ResponseType;
    }

    /**
     * signIn
     * /auth/signIn
     */
    export namespace signIn {
      export type ResponseType = Promise<portal.CommonResult<portal.AuthBO>>;
      export function request(
        bodyParams: portal.LoginUser,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * signUp
     * /auth/signUp
     */
    export namespace signUp {
      export type ResponseType = Promise<portal.CommonResult<number>>;
      export function request(
        bodyParams: portal.RegisterUser,
        options?: RequestConfig,
      ): ResponseType;
    }
  }
}
