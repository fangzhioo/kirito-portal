class CommonResult {
  /** code */
  code = undefined;

  /** data */
  data = new Oauth2TokenDto();

  /** message */
  message = '';
}

class Oauth2TokenDto {
  /** 有效时间（秒） */
  expiresIn = undefined;

  /** 刷令牌 */
  refreshToken = '';

  /** 访问令牌 */
  token = '';

  /** 访问令牌头前缀 */
  tokenHead = '';
}

export const auth = {
  CommonResult,
  Oauth2TokenDto,
};
