import { fetch } from '~/utils/fetch';

/**
 * @desc 清空除浏览记录
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/readHistory/clear',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
