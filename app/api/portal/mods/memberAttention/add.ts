import { fetch } from '~/utils/fetch';

/**
 * @desc 添加品牌关注
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/attention/add',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },

      data: bodyParams,
    },
    options,
  );
  return fetch(fetchOption);
}
