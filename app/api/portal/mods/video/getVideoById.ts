import { fetch } from '~/utils/fetch';

/**
 * @desc getVideoById
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/video/get/{id}',
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
