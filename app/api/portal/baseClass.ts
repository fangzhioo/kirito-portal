class AuthBO {
  /** token */
  token = '';

  /** user */
  user = new SsoUserBO();
}

class CommonResult {
  /** code */
  code = undefined;

  /** data */
  data = new AuthBO();

  /** msg */
  msg = '';
}

class LoginUser {
  /** email */
  email = '';

  /** password */
  password = '';

  /** remember */
  remember = false;
}

class RegisterUser {
  /** confirmPassword */
  confirmPassword = '';

  /** email */
  email = '';

  /** nickName */
  nickName = '';

  /** password */
  password = '';
}

class SsoUserBO {
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

  /** userId */
  userId = undefined;

  /** userName */
  userName = '';
}

export const portal = {
  AuthBO,
  CommonResult,
  LoginUser,
  RegisterUser,
  SsoUserBO,
};
