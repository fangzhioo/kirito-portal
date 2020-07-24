import { fetch } from '~/utils/fetch';

/**
 * @desc 获取文章详情
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/blog/api/article/getArticleById',
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
