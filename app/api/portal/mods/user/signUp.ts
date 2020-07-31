import { fetch } from '~/utils/fetch';

/**
 * @desc signUp
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/auth/signUp',
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
