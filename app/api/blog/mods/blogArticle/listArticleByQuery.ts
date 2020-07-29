import { fetch } from '~/utils/fetch';

/**
 * @desc 获取文章列表
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/blog/api/article/listArticleByQuery',
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
