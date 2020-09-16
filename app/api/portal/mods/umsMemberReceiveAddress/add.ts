import { fetch } from '~/utils/fetch';

/**
 * @desc 添加收货地址
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/address/add',
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
