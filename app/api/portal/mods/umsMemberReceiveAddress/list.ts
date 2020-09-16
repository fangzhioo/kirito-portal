import { fetch } from '~/utils/fetch';

/**
 * @desc 显示所有收货地址
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/address/list',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
