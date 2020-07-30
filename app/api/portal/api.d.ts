type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

import { RequestConfig } from '~/utils/fetch';

export namespace portal {
  export class AuthBO {
    /** token */
    token: string;

    /** user */
    user: portal.CommonUser;
  }

  export class CommonResult<T0> {
    /** code */
    code: number;

    /** data */
    data: T0;

    /** msg */
    msg: string;
  }

  export class CommonUser {
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

    /** token */
    token: string;

    /** userId */
    userId: number;

    /** userName */
    userName: string;
  }

  export class LoginUser {
    /** password */
    password: string;

    /** remember */
    remember: boolean;

    /** username */
    username: string;
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
      export type ResponseType = Promise<portal.CommonResult<portal.CommonUser>>;
      export function request(options?: RequestConfig): ResponseType;
    }

    /**
     * signIn
     * /auth/signIn
     */
    export namespace signIn {
      export type ResponseType = Promise<portal.CommonResult<portal.AuthBO>>;
      export function request(bodyParams: portal.LoginUser, options?: RequestConfig): ResponseType;
    }
  }
}
