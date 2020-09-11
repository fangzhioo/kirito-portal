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

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** subtitle */
  subtitle = '';

  /** thumb */
  thumb = '';

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

class VideoVO {
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

  /** desc */
  desc = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** likes */
  likes = undefined;

  /** status */
  status = undefined;

  /** thumb */
  thumb = '';

  /** title */
  title = '';

  /** videoId */
  videoId = undefined;

  /** views */
  views = undefined;
}

export const portal = {
  ArticleVO,
  AuthBO,
  CommonResult,
  LoginUserBO,
  RegisterUserBO,
  SsoUserBO,
  VideoVO,
};
