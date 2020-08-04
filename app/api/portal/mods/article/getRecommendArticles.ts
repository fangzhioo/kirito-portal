import { fetch } from '~/utils/fetch';

/**
 * @desc 获取首页热门
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/article/recommend',
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
