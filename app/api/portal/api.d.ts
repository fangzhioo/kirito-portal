type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

import { RequestConfig } from '~/utils/fetch';

export namespace portal {
  export class CommonPage<T0> {
    /** list */
    list: Array<T0>;

    /** pageNum */
    pageNum: number;

    /** pageSize */
    pageSize: number;

    /** total */
    total: number;

    /** totalPage */
    totalPage: number;
  }

  export class CommonResult<T0> {
    /** code */
    code: number;

    /** data */
    data: T0;

    /** message */
    message: string;
  }

  export class HomeContentResult {
    /** rememedList */
    rememedList: Array<string>;
  }

  export class MemberBrandAttention {
    /** brandCity */
    brandCity: string;

    /** brandId */
    brandId: number;

    /** brandLogo */
    brandLogo: string;

    /** brandName */
    brandName: string;

    /** createTime */
    createTime: string;

    /** id */
    id: string;

    /** memberIcon */
    memberIcon: string;

    /** memberId */
    memberId: number;

    /** memberNickname */
    memberNickname: string;
  }

  export class MemberProductCollection {
    /** createTime */
    createTime: string;

    /** id */
    id: string;

    /** memberIcon */
    memberIcon: string;

    /** memberId */
    memberId: number;

    /** memberNickname */
    memberNickname: string;

    /** productId */
    productId: number;

    /** productName */
    productName: string;

    /** productPic */
    productPic: string;

    /** productPrice */
    productPrice: string;

    /** productSubTitle */
    productSubTitle: string;
  }

  export class MemberReadHistory {
    /** createTime */
    createTime: string;

    /** id */
    id: string;

    /** memberIcon */
    memberIcon: string;

    /** memberId */
    memberId: number;

    /** memberNickname */
    memberNickname: string;

    /** productId */
    productId: number;

    /** productName */
    productName: string;

    /** productPic */
    productPic: string;

    /** productPrice */
    productPrice: string;

    /** productSubTitle */
    productSubTitle: string;
  }

  export class UmsMemberReceiveAddress {
    /** 城市 */
    city: string;

    /** 是否为默认 */
    defaultStatus: number;

    /** 详细地址(街道) */
    detailAddress: string;

    /** id */
    id: number;

    /** memberId */
    memberId: number;

    /** 收货人名称 */
    name: string;

    /** phoneNumber */
    phoneNumber: string;

    /** 邮政编码 */
    postCode: string;

    /** 省份/直辖市 */
    province: string;

    /** 区 */
    region: string;
  }

  export class UserDto {
    /** clientId */
    clientId: string;

    /** id */
    id: number;

    /** password */
    password: string;

    /** roles */
    roles: Array<string>;

    /** status */
    status: number;

    /** username */
    username: string;
  }
}

export namespace portal {
  /**
   * 首页内容管理
   */
  export namespace home {
    /**
     * 首页内容页信息展示
     * /home/content
     */
    export namespace content {
      export type ResponseType = Promise<portal.CommonResult<portal.HomeContentResult>>;
      export function request(options?: RequestConfig): ResponseType;
    }
  }

  /**
   * 会员关注品牌管理
   */
  export namespace memberAttention {
    /**
     * 添加品牌关注
     * /member/attention/add
     */
    export namespace add {
      export type ResponseType = Promise<portal.CommonResult>;
      export function request(
        bodyParams: portal.MemberBrandAttention,
        options?: RequestConfig
      ): ResponseType;
    }

    /**
     * 清空关注列表
     * /member/attention/clear
     */
    export namespace clear {
      export type ResponseType = Promise<portal.CommonResult>;
      export function request(options?: RequestConfig): ResponseType;
    }

    /**
     * 取消关注
     * /member/attention/delete
     */
    export namespace remove {
      export class Params {
        /** brandId */
        brandId?: number;
      }

      export type ResponseType = Promise<portal.CommonResult>;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }

    /**
     * 显示关注品牌详情
     * /member/attention/detail
     */
    export namespace detail {
      export class Params {
        /** brandId */
        brandId: number;
      }

      export type ResponseType = Promise<portal.CommonResult<portal.MemberBrandAttention>>;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }

    /**
     * 显示关注列表
     * /member/attention/list
     */
    export namespace list {
      export class Params {
        /** pageNum */
        pageNum?: number;
        /** pageSize */
        pageSize?: number;
      }

      export type ResponseType = Promise<
        portal.CommonResult<portal.CommonPage<portal.MemberBrandAttention>>
      >;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }
  }

  /**
   * 会员收藏管理
   */
  export namespace memberCollection {
    /**
     * 添加商品收藏
     * /member/productCollection/add
     */
    export namespace add {
      export type ResponseType = Promise<portal.CommonResult>;
      export function request(
        bodyParams: portal.MemberProductCollection,
        options?: RequestConfig
      ): ResponseType;
    }

    /**
     * 清空收藏列表
     * /member/productCollection/clear
     */
    export namespace clear {
      export type ResponseType = Promise<portal.CommonResult>;
      export function request(options?: RequestConfig): ResponseType;
    }

    /**
     * 删除收藏商品
     * /member/productCollection/delete
     */
    export namespace remove {
      export class Params {
        /** productId */
        productId?: number;
      }

      export type ResponseType = Promise<portal.CommonResult>;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }

    /**
     * 显示收藏商品详情
     * /member/productCollection/detail
     */
    export namespace detail {
      export class Params {
        /** productId */
        productId: number;
      }

      export type ResponseType = Promise<portal.CommonResult<portal.MemberProductCollection>>;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }

    /**
     * 显示收藏列表
     * /member/productCollection/list
     */
    export namespace list {
      export class Params {
        /** pageNum */
        pageNum?: number;
        /** pageSize */
        pageSize?: number;
      }

      export type ResponseType = Promise<
        portal.CommonResult<portal.CommonPage<portal.MemberProductCollection>>
      >;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }
  }

  /**
   * 会员商品浏览记录管理
   */
  export namespace memberReadHistory {
    /**
     * 清空除浏览记录
     * /member/readHistory/clear
     */
    export namespace clear {
      export type ResponseType = Promise<portal.CommonResult>;
      export function request(options?: RequestConfig): ResponseType;
    }

    /**
     * 创建浏览记录
     * /member/readHistory/create
     */
    export namespace create {
      export type ResponseType = Promise<portal.CommonResult>;
      export function request(
        bodyParams: portal.MemberReadHistory,
        options?: RequestConfig
      ): ResponseType;
    }

    /**
     * 删除浏览记录
     * /member/readHistory/delete
     */
    export namespace remove {
      export class Params {
        /** ids */
        ids: Array<string>;
      }

      export type ResponseType = Promise<portal.CommonResult>;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }

    /**
     * 分页获取用户浏览记录
     * /member/readHistory/list
     */
    export namespace list {
      export class Params {
        /** pageNum */
        pageNum?: number;
        /** pageSize */
        pageSize?: number;
      }

      export type ResponseType = Promise<
        portal.CommonResult<portal.CommonPage<portal.MemberReadHistory>>
      >;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }
  }

  /**
   * 会员登录注册管理
   */
  export namespace umsMember {
    /**
     * 获取验证码
     * /sso/getAuthCode
     */
    export namespace getAuthCode {
      export class Params {
        /** telephone */
        telephone: string;
      }

      export type ResponseType = Promise<portal.CommonResult>;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }

    /**
     * 获取会员信息
     * /sso/info
     */
    export namespace info {
      export type ResponseType = Promise<portal.CommonResult>;
      export function request(options?: RequestConfig): ResponseType;
    }

    /**
     * 根据用户名获取通用用户信息
     * /sso/loadByUsername
     */
    export namespace loadUserByUsername {
      export class Params {
        /** username */
        username: string;
      }

      export type ResponseType = Promise<portal.UserDto>;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }

    /**
     * 会员登录
     * /sso/login
     */
    export namespace login {
      export class Params {
        /** password */
        password: string;
        /** username */
        username: string;
      }

      export type ResponseType = Promise<portal.CommonResult>;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }

    /**
     * 会员注册
     * /sso/register
     */
    export namespace register {
      export class Params {
        /** authCode */
        authCode: string;
        /** password */
        password: string;
        /** telephone */
        telephone: string;
        /** username */
        username: string;
      }

      export type ResponseType = Promise<portal.CommonResult>;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }

    /**
     * 修改密码
     * /sso/updatePassword
     */
    export namespace updatePassword {
      export class Params {
        /** authCode */
        authCode: string;
        /** password */
        password: string;
        /** telephone */
        telephone: string;
      }

      export type ResponseType = Promise<portal.CommonResult>;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }
  }

  /**
   * 会员收货地址管理
   */
  export namespace umsMemberReceiveAddress {
    /**
     * 添加收货地址
     * /member/address/add
     */
    export namespace add {
      export type ResponseType = Promise<portal.CommonResult>;
      export function request(
        bodyParams: portal.UmsMemberReceiveAddress,
        options?: RequestConfig
      ): ResponseType;
    }

    /**
     * 删除收货地址
     * /member/address/delete/{id}
     */
    export namespace remove {
      export class Params {
        /** id */
        id: number;
      }

      export type ResponseType = Promise<portal.CommonResult>;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }

    /**
     * 显示所有收货地址
     * /member/address/list
     */
    export namespace list {
      export type ResponseType = Promise<
        portal.CommonResult<Array<portal.UmsMemberReceiveAddress>>
      >;
      export function request(options?: RequestConfig): ResponseType;
    }

    /**
     * 修改收货地址
     * /member/address/update/{id}
     */
    export namespace update {
      export class Params {
        /** id */
        id: number;
      }

      export type ResponseType = Promise<portal.CommonResult>;
      export function request(
        params: Params,
        bodyParams: portal.UmsMemberReceiveAddress,
        options?: RequestConfig
      ): ResponseType;
    }

    /**
     * 获取收货地址详情
     * /member/address/{id}
     */
    export namespace getItem {
      export class Params {
        /** id */
        id: number;
      }

      export type ResponseType = Promise<portal.CommonResult<portal.UmsMemberReceiveAddress>>;
      export function request(params: Params, options?: RequestConfig): ResponseType;
    }
  }
}
