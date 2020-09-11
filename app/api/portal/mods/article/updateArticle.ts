import { fetch } from '~/utils/fetch';

/**
 * @desc 更新文章
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/article/update',
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
