import { fetch } from '~/utils/fetch';

/**
 * @desc logout
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/blog/api/logout',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
