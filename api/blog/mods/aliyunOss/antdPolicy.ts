import { fetch } from '~/utils/fetch';

/**
 * @desc antdPolicy
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/blog/api/aliyun/antdPolicy',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
