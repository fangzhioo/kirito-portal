import { fetch } from '~/utils/fetch';

/**
 * @desc current
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
