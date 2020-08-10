import { fetch } from '~/utils/fetch';

/**
 * @desc updateVideo
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/video/update',
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
