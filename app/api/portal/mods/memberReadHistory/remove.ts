import { fetch } from '~/utils/fetch';

/**
 * @desc 删除浏览记录
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/readHistory/delete',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      params: params,
    },
    options,
  );
  return fetch(fetchOption);
}
