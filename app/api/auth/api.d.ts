type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

import { RequestConfig } from '~/utils/fetch';

export namespace auth {
  export class CommonResult {
    /** code */
    code: number;

    /** data */
    data: T0;

    /** message */
    message: string;
  }

  export class Oauth2TokenDto {
    /** 有效时间（秒） */
    expiresIn: number;

    /** 刷令牌 */
    refreshToken: string;

    /** 访问令牌 */
    token: string;

    /** 访问令牌头前缀 */
    tokenHead: string;
  }
}

export namespace auth {
  /**
   * 认证中心登录认证
   */
  export namespace auth {
    /**
     * Oauth2获取token
     * /oauth/token
     */
    export namespace postAccessToken {
      export type ResponseType = Promise<
        auth.CommonResult<auth.Oauth2TokenDto>
      >;
      export function request(options?: RequestConfig): ResponseType;
    }
  }

  /**
   * Key Pair Controller
   */
  export namespace keyPair {
    /**
     * getKey
     * /rsa/publicKey
     */
    export namespace getKey {
      export type ResponseType = Promise<object>;
      export function request(options?: RequestConfig): ResponseType;
    }
  }
}
