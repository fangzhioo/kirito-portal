import { fetch } from '~/utils/fetch';

/**
 * @desc 会员注册
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/sso/register',
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
