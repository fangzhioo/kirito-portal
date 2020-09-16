import { fetch } from '~/utils/fetch';

/**
 * @desc 修改收货地址
 */
export function request(params, bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/address/update/{id}',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      params: params,
      data: bodyParams,
    },
    options,
  );
  return fetch(fetchOption);
}
