class ArticleVO {
  /** articleId */
  articleId = undefined;

  /** authorAvatar */
  authorAvatar = '';

  /** authorId */
  authorId = undefined;

  /** authorNickname */
  authorNickname = '';

  /** cid */
  cid = undefined;

  /** content */
  content = '';

  /** cover */
  cover = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** subtitle */
  subtitle = '';

  /** title */
  title = '';

  /** views */
  views = undefined;
}

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
  data = new ArticleVO();

  /** msg */
  msg = '';
}

class LoginUserBO {
  /** email */
  email = '';

  /** password */
  password = '';

  /** remember */
  remember = false;
}

class RegisterUserBO {
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
  ArticleVO,
  AuthBO,
  CommonResult,
  LoginUserBO,
  RegisterUserBO,
  SsoUserBO,
};
