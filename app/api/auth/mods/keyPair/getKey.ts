import { fetch } from '~/utils/fetch';

/**
 * @desc getKey
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/auth/rsa/publicKey',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
