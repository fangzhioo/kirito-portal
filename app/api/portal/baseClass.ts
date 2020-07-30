class AuthBO {
  /** token */
  token = '';

  /** user */
  user = new CommonUser();
}

class CommonResult {
  /** code */
  code = undefined;

  /** data */
  data = new AuthBO();

  /** msg */
  msg = '';
}

class CommonUser {
  /** avatar */
  avatar = '';

  /** createdTime */
  createdTime = '';

  /** email */
  email = '';

  /** modifyTime */
  modifyTime = '';

  /** nickName */
  nickName = '';

  /** phone */
  phone = '';

  /** signature */
  signature = '';

  /** token */
  token = '';

  /** userId */
  userId = undefined;

  /** userName */
  userName = '';
}

class LoginUser {
  /** password */
  password = '';

  /** remember */
  remember = false;

  /** username */
  username = '';
}

export const portal = {
  AuthBO,
  CommonResult,
  CommonUser,
  LoginUser,
};
