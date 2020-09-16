class CommonPage {
  /** list */
  list = [];

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** total */
  total = undefined;

  /** totalPage */
  totalPage = undefined;
}

class CommonResult {
  /** code */
  code = undefined;

  /** data */
  data = new CommonPage();

  /** message */
  message = '';
}

class HomeContentResult {
  /** rememedList */
  rememedList = [];
}

class MemberBrandAttention {
  /** brandCity */
  brandCity = '';

  /** brandId */
  brandId = undefined;

  /** brandLogo */
  brandLogo = '';

  /** brandName */
  brandName = '';

  /** createTime */
  createTime = '';

  /** id */
  id = '';

  /** memberIcon */
  memberIcon = '';

  /** memberId */
  memberId = undefined;

  /** memberNickname */
  memberNickname = '';
}

class MemberProductCollection {
  /** createTime */
  createTime = '';

  /** id */
  id = '';

  /** memberIcon */
  memberIcon = '';

  /** memberId */
  memberId = undefined;

  /** memberNickname */
  memberNickname = '';

  /** productId */
  productId = undefined;

  /** productName */
  productName = '';

  /** productPic */
  productPic = '';

  /** productPrice */
  productPrice = '';

  /** productSubTitle */
  productSubTitle = '';
}

class MemberReadHistory {
  /** createTime */
  createTime = '';

  /** id */
  id = '';

  /** memberIcon */
  memberIcon = '';

  /** memberId */
  memberId = undefined;

  /** memberNickname */
  memberNickname = '';

  /** productId */
  productId = undefined;

  /** productName */
  productName = '';

  /** productPic */
  productPic = '';

  /** productPrice */
  productPrice = '';

  /** productSubTitle */
  productSubTitle = '';
}

class UmsMemberReceiveAddress {
  /** 城市 */
  city = '';

  /** 是否为默认 */
  defaultStatus = undefined;

  /** 详细地址(街道) */
  detailAddress = '';

  /** id */
  id = undefined;

  /** memberId */
  memberId = undefined;

  /** 收货人名称 */
  name = '';

  /** phoneNumber */
  phoneNumber = '';

  /** 邮政编码 */
  postCode = '';

  /** 省份/直辖市 */
  province = '';

  /** 区 */
  region = '';
}

class UserDto {
  /** clientId */
  clientId = '';

  /** id */
  id = undefined;

  /** password */
  password = '';

  /** roles */
  roles = [];

  /** status */
  status = undefined;

  /** username */
  username = '';
}

export const portal = {
  CommonPage,
  CommonResult,
  HomeContentResult,
  MemberBrandAttention,
  MemberProductCollection,
  MemberReadHistory,
  UmsMemberReceiveAddress,
  UserDto,
};
