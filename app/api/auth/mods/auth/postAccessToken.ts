import { fetch } from '~/utils/fetch';

/**
 * @desc Oauth2获取token
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/auth/oauth/token',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
