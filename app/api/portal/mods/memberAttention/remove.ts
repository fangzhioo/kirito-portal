import { fetch } from '~/utils/fetch';

/**
 * @desc 取消关注
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/attention/delete',
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
