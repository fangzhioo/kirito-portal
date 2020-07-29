import { fetch } from '~/utils/fetch';

/**
 * @desc countArticleByQuery
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/blog/api/article/countArticleByQuery',
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
