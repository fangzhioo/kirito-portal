import { fetch } from '~/utils/fetch';

/**
 * @desc 根据id删除文章
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/article/del/{id}',
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
