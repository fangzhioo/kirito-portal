type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

import { RequestConfig } from '~/utils/fetch';

export namespace portal {
  export class ArticleVO {
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

    /** gmtCreate */
    gmtCreate: string;

    /** gmtModified */
    gmtModified: string;

    /** subtitle */
    subtitle: string;

    /** thumb */
    thumb: string;

    /** title */
    title: string;

    /** views */
    views: number;
  }

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

  export class LoginUserBO {
    /** email */
    email: string;

    /** password */
    password: string;

    /** remember */
    remember: boolean;
  }

  export class RegisterUserBO {
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

  export class VideoVO {
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

    /** desc */
    desc: string;

    /** gmtCreate */
    gmtCreate: string;

    /** gmtModified */
    gmtModified: string;

    /** likes */
    likes: number;

    /** status */
    status: number;

    /** thumb */
    thumb: string;

    /** title */
    title: string;

    /** videoId */
    videoId: number;

    /** views */
    views: number;
  }
}

export namespace portal {
  /**
   * Article Controller
   */
  export namespace article {
    /**
     * 根据id删除文章
     * /article/del/{id}
     */
    export namespace deleteArticleById {
      export class Params {
        /** id */
        id: number;
      }

      export type ResponseType = Promise<portal.CommonResult<number>>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 获取文章详情
     * /article/get/{id}
     */
    export namespace getArticleById {
      export class Params {
        /** id */
        id: number;
      }

      export type ResponseType = Promise<portal.CommonResult<portal.ArticleVO>>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 获取最新发布的文章列表
     * /article/list
     */
    export namespace getArticleList {
      export class Params {
        /** keyword */
        keyword?: string;
        /** limit */
        limit?: number;
        /** offset */
        offset?: number;
      }

      export type ResponseType = Promise<
        portal.CommonResult<Array<portal.ArticleVO>>
      >;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 发表文章
     * /article/publish
     */
    export namespace publishArticle {
      export type ResponseType = Promise<portal.CommonResult<number>>;
      export function request(
        bodyParams: portal.ArticleVO,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 获取首页热门
     * /article/recommend
     */
    export namespace getRecommendArticles {
      export class Params {
        /** keyword */
        keyword?: string;
        /** limit */
        limit?: number;
        /** offset */
        offset?: number;
      }

      export type ResponseType = Promise<
        portal.CommonResult<Array<portal.ArticleVO>>
      >;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 更新文章
     * /article/update
     */
    export namespace updateArticle {
      export type ResponseType = Promise<portal.CommonResult<number>>;
      export function request(
        bodyParams: portal.ArticleVO,
        options?: RequestConfig,
      ): ResponseType;
    }
  }

  /**
   * User Controller
   */
  export namespace user {
    /**
     * 获取当前用户信息，需要携带cookie
     * /auth/current
     */
    export namespace current {
      export type ResponseType = Promise<portal.CommonResult<portal.SsoUserBO>>;
      export function request(options?: RequestConfig): ResponseType;
    }

    /**
     * 用户登陆
     * /auth/signIn
     */
    export namespace signIn {
      export type ResponseType = Promise<portal.CommonResult<portal.AuthBO>>;
      export function request(
        bodyParams: portal.LoginUserBO,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 用户注册
     * /auth/signUp
     */
    export namespace signUp {
      export type ResponseType = Promise<portal.CommonResult<number>>;
      export function request(
        bodyParams: portal.RegisterUserBO,
        options?: RequestConfig,
      ): ResponseType;
    }
  }

  /**
   * Video Controller
   */
  export namespace video {
    /**
     * deleteVideoById
     * /video/del/{id}
     */
    export namespace deleteVideoById {
      export class Params {
        /** id */
        id: number;
      }

      export type ResponseType = Promise<portal.CommonResult<number>>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * getVideoById
     * /video/get/{id}
     */
    export namespace getVideoById {
      export class Params {
        /** id */
        id: number;
      }

      export type ResponseType = Promise<portal.CommonResult<portal.VideoVO>>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * getVideoList
     * /video/list
     */
    export namespace getVideoList {
      export class Params {
        /** keyword */
        keyword?: string;
        /** limit */
        limit?: number;
        /** offset */
        offset?: number;
      }

      export type ResponseType = Promise<
        portal.CommonResult<Array<portal.VideoVO>>
      >;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * publishVideo
     * /video/publish
     */
    export namespace publishVideo {
      export type ResponseType = Promise<portal.CommonResult<number>>;
      export function request(
        bodyParams: portal.VideoVO,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * updateVideo
     * /video/update
     */
    export namespace updateVideo {
      export type ResponseType = Promise<portal.CommonResult<number>>;
      export function request(
        bodyParams: portal.VideoVO,
        options?: RequestConfig,
      ): ResponseType;
    }
  }
}
