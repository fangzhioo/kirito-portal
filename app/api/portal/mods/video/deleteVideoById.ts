import { fetch } from '~/utils/fetch';

/**
 * @desc deleteVideoById
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/video/del/{id}',
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
