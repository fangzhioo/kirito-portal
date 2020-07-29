import { fetch } from '~/utils/fetch';

/**
 * @desc publishArticle
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/blog/api/article/publishArticle',
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
