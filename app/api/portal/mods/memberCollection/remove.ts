import { fetch } from '~/utils/fetch';

/**
 * @desc 删除收藏商品
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/productCollection/delete',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      params: params,
    },
    options,
  );
  return fetch(fetchOption);
}
