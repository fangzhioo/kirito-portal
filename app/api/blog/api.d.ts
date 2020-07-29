type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

import { RequestConfig } from '~/utils/fetch';

export namespace blog {
  export class AliyunOssAntdPolicyBo {
    /** accessId */
    accessId: string;

    /** dir */
    dir: string;

    /** expire */
    expire: number;

    /** host */
    host: string;

    /** policy */
    policy: string;

    /** signature */
    signature: string;
  }

  export class BlogArticleDTO {
    /** cid */
    cid: number;

    /** content */
    content: string;

    /** cover */
    cover: string;

    /** editor */
    editor: string;

    /** editorContent */
    editorContent: string;

    /** editorTheme */
    editorTheme: string;

    /** id */
    id: number;

    /** subtitle */
    subtitle: string;

    /** title */
    title: string;
  }

  export class BlogArticleVO {
    /** articleId */
    articleId: number;

    /** authorAvatar */
    authorAvatar: string;

    /** authorId */
    authorId: number;

    /** authorNickname */
    authorNickname: string;

    /** cid */
    cid: number;

    /** content */
    content: string;

    /** cover */
    cover: string;

    /** editor */
    editor: string;

    /** editorTheme */
    editorTheme: string;

    /** gmtCreate */
    gmtCreate: string;

    /** gmtModified */
    gmtModified: string;

    /** status */
    status: number;

    /** subtitle */
    subtitle: string;

    /** title */
    title: string;

    /** userLike */
    userLike: number;
  }

  export class CommonResult {
    /** code */
    code: number;

    /** data */
    data: T0;

    /** msg */
    msg: string;
  }
}

export namespace blog {
  /**
   * Aliyun Oss Controller
   */
  export namespace aliyunOss {
    /**
     * antdPolicy
     * /api/aliyun/antdPolicy
     */
    export namespace antdPolicy {
      export type ResponseType = Promise<
        blog.CommonResult<blog.AliyunOssAntdPolicyBo>
      >;
      export function request(options?: RequestConfig): ResponseType;
    }
  }

  /**
   * Blog Article Controller
   */
  export namespace blogArticle {
    /**
     * countArticleByQuery
     * /api/article/countArticleByQuery
     */
    export namespace countArticleByQuery {
      export class Params {
        /** current */
        current?: number;
        /** limit */
        limit?: number;
        /** offset */
        offset?: number;
        /** pageSize */
        pageSize?: number;
      }

      export type ResponseType = Promise<blog.CommonResult<number>>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 获取文章详情
     * /api/article/getArticleById
     */
    export namespace getArticleById {
      export class Params {
        /** articleId */
        articleId: number;
      }

      export type ResponseType = Promise<blog.CommonResult<blog.BlogArticleVO>>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 获取文章列表
     * /api/article/listArticleByQuery
     */
    export namespace listArticleByQuery {
      export class Params {
        /** current */
        current?: number;
        /** limit */
        limit?: number;
        /** offset */
        offset?: number;
        /** pageSize */
        pageSize?: number;
      }

      export type ResponseType = Promise<
        blog.CommonResult<Array<blog.BlogArticleVO>>
      >;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * publishArticle
     * /api/article/publishArticle
     */
    export namespace publishArticle {
      export type ResponseType = Promise<blog.CommonResult<number>>;
      export function request(
        bodyParams: blog.BlogArticleDTO,
        options?: RequestConfig,
      ): ResponseType;
    }
  }

  /**
   * User Controller
   */
  export namespace user {
    /**
     * currentUser
     * /api/currentUser
     */
    export namespace currentUser {
      export type ResponseType = Promise<blog.CommonResult>;
      export function request(options?: RequestConfig): ResponseType;
    }

    /**
     * login
     * /api/login
     */
    export namespace login {
      export class Params {
        /** redirect_url */
        redirect_url?: string;
      }

      export type ResponseType = Promise<blog.CommonResult>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * logout
     * /api/logout
     */
    export namespace logout {
      export type ResponseType = Promise<blog.CommonResult>;
      export function request(options?: RequestConfig): ResponseType;
    }
  }
}
