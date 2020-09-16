import { fetch } from '~/utils/fetch';

/**
 * @desc 修改密码
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/sso/updatePassword',
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
