import { fetch } from '~/utils/fetch';

/**
 * @desc 显示收藏列表
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/productCollection/list',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      params: params,
    },
    options,
  );
  return fetch(fetchOption);
}
