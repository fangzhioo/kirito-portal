import { fetch } from '~/utils/fetch';

/**
 * @desc 首页内容页信息展示
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/home/content',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
