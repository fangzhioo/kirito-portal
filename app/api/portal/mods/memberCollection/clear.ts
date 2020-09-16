import { fetch } from '~/utils/fetch';

/**
 * @desc 清空收藏列表
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/productCollection/clear',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
