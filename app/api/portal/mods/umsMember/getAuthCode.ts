import { fetch } from '~/utils/fetch';

/**
 * @desc 获取验证码
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/sso/getAuthCode',
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
