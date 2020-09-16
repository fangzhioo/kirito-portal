import { fetch } from '~/utils/fetch';

/**
 * @desc 获取收货地址详情
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/address/{id}',
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
