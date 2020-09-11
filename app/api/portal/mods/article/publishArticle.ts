import { fetch } from '~/utils/fetch';

/**
 * @desc 发表文章
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/article/publish',
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
