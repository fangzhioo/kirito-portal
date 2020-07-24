import { fetch } from '~/utils/fetch';

/**
 * @desc currentUser
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/blog/api/currentUser',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
