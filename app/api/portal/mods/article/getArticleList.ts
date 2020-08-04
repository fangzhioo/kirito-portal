import { fetch } from '~/utils/fetch';

/**
 * @desc 获取最新发布的文章列表
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/article/list',
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
