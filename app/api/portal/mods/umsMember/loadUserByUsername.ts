import { fetch } from '~/utils/fetch';

/**
 * @desc 根据用户名获取通用用户信息
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/sso/loadByUsername',
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
