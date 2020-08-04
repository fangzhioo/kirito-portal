import { fetch } from '~/utils/fetch';

/**
 * @desc 获取当前用户信息，需要携带cookie
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/auth/current',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
