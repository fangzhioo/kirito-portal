import { fetch } from '~/utils/fetch';

/**
 * @desc getVideoList
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/video/list',
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
