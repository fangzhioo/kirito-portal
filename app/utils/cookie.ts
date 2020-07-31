export const TOKEN_KEY = 'my_token';

export const getToken = () => {
  try {
    return getCookie(TOKEN_KEY);
  } catch (error) {
    return '';
  }
  // return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJuaWNrTmFtZVwiOlwi5qGQ5Lq6T19PXCIsXCJ1c2VyTmFtZVwiOlwia2lyaXRvXCIsXCJ1c2VySWRcIjoxLFwiZW1haWxcIjpcIktpcml0b0BnbWFpbC5jb21cIn0iLCJpc3MiOiJraXJpdG8iLCJleHAiOjE1OTY2MjM5NTF9.qqDEIKjrWsA0g_Ht_AONwMRyi5cMb_v-0MdpSI2Hnwk';
};

export const setToken = (token: string) => {
  // set token
  try {
    setCookie(TOKEN_KEY, token);
  } catch (error) {}
};

export const removeToken = () => {
  try {
    removeCookie(TOKEN_KEY);
  } catch (error) {}
};

function hasCookie(sKey: string) {
  return new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=').test(
    document.cookie
  );
}

function removeCookie(sKey: string, sPath?: string, sDomain?: string) {
  if (!sKey || !hasCookie(sKey)) {
    return false;
  }
  document.cookie =
    encodeURIComponent(sKey) +
    '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
    (sDomain ? '; domain=' + sDomain : '') +
    (sPath ? '; path=' + sPath : '');
  return true;
}

function getCookie(sKey: string) {
  return (
    decodeURIComponent(
      document.cookie.replace(
        new RegExp(
          '(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'
        ),
        '$1'
      )
    ) || null
  );
}

function setCookie(sKey: any, sValue: any, vEnd?: any, sPath?: any, sDomain?: any, bSecure?: any) {
  // eslint-disable-next-line no-useless-escape
  if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
    return false;
  }
  let sExpires = '';
  if (vEnd) {
    switch (vEnd.constructor) {
      case Number:
        sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
        break;
      case String:
        sExpires = '; expires=' + vEnd;
        break;
      case Date:
        sExpires = '; expires=' + vEnd.toUTCString();
        break;
    }
  }
  document.cookie =
    encodeURIComponent(sKey) +
    '=' +
    encodeURIComponent(sValue) +
    sExpires +
    (sDomain ? '; domain=' + sDomain : '') +
    (sPath ? '; path=' + sPath : '') +
    (bSecure ? '; secure' : '');
  return true;
}
