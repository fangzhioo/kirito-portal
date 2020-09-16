import { fetch } from '~/utils/fetch';

/**
 * @desc 会员登录
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/sso/login',
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
