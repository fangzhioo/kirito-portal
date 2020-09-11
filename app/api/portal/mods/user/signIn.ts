import { fetch } from '~/utils/fetch';

/**
 * @desc 用户登陆
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/auth/signIn',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },

      data: bodyParams,
    },
    options,
  );
  return fetch(fetchOption);
}
