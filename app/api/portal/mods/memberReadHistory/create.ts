import { fetch } from '~/utils/fetch';

/**
 * @desc 创建浏览记录
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/portal/member/readHistory/create',
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
