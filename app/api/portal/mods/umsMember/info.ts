import { fetch } from '~/utils/fetch';

/**
 * @desc 获取会员信息
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/sso/info',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
