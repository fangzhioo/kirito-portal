import { fetch } from '~/utils/fetch';

/**
 * @desc publishVideo
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/video/publish',
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
