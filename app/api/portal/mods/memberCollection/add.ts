import { fetch } from '~/utils/fetch';

/**
 * @desc 添加商品收藏
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/productCollection/add',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },

      data: bodyParams,
    },
    options,
  );
  return fetch(fetchOption);
}
