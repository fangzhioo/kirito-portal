import { fetch } from '~/utils/fetch';

/**
 * @desc 删除收货地址
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/address/delete/{id}',
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
