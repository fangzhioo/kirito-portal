import { fetch } from '~/utils/fetch';

/**
 * @desc 分页获取用户浏览记录
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/readHistory/list',
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
