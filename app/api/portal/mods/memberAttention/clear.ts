import { fetch } from '~/utils/fetch';

/**
 * @desc 清空关注列表
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/attention/clear',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
