import { fetch } from '~/utils/fetch';

/**
 * @desc login
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/blog/api/login',
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
