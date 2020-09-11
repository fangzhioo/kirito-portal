/**
 * 在nuxt.config.js里通过router来引入middleware中间件, 用来切换移动端和pc端地址
 * router: {
 *    middleware: ["device"],
 * },
 * @param context
 */

export default function (context: any) {
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent;
  // 给全局上下文添加一个属性来保存我们返回的匹配信息
  context.deviceType = deviceType(context.userAgent);
  // 这里注入到store,是因为我部分页面需要判断机型请求不同的数据,
  // 你们没有用到的话可以移除
  // context.store.commit("SetDeviceType", context.deviceType);
  // 若是判断UA非移动端的,就在这里做处理了..
  // context.redirect(status,url) 这个可以重定向到外部网站
  // 若是内部访问可以直接用router对象push
  if (context.deviceType.type === 'pc') {
    // context.redirect(302,'pc端页面') //301是永久重定向，如果你想随着设备类型改变一直变，请改为302
  } else {
    context.redirect(302, '移动端页面地址'); // 301是永久重定向，如果你想随着设备类型改变一直变，请改为302
  }
}

/**
 *
 * @param {*} UA ,就是userAgent
 * @returns type: 设备类型
 *  env: 访问环境(微信/微博/qq)
 *  masklayer: 就是给外部拿到判断是否显示遮罩层的,一些特殊环境要引导用户到外部去打开访问
 */
function isWechat(UA: string) {
  return !!/MicroMessenger/i.test(UA);
}

function isWeibo(UA: string) {
  return !!/Weibo/i.test(UA);
}

function isQQ(UA: string) {
  return !!/QQ/i.test(UA);
}

function isMoible(UA: string) {
  return !!/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA);
}

function isIOS(UA: string) {
  return !!/iPhone|iPad|iPod/i.test(UA);
}

function isAndroid(UA: string) {
  return !!/Android/i.test(UA);
}
export function deviceType(UA: string) {
  if (isMoible(UA)) {
    if (isIOS(UA)) {
      if (isWechat(UA)) {
        return {
          type: 'ios',
          env: 'wechat',
          masklayer: true,
        };
      }
      if (isWeibo(UA)) {
        return {
          type: 'ios',
          env: 'weibo',
          masklayer: true,
        };
      }
      if (isQQ(UA)) {
        return {
          type: 'ios',
          env: 'qq',
          masklayer: true,
        };
      }
      return {
        type: 'ios',
      };
    }
    if (isAndroid(UA)) {
      if (isWechat(UA)) {
        return {
          type: 'android',
          env: 'wechat',
          masklayer: true,
        };
      }
      if (isWeibo(UA)) {
        return {
          type: 'android',
          env: 'weibo',
          masklayer: true,
        };
      }
      if (isQQ(UA)) {
        return {
          type: 'android',
          env: 'qq',
          masklayer: true,
        };
      }
      return {
        type: 'android',
      };
    }
    return {
      type: 'mobile',
    };
  } else {
    return {
      type: 'pc',
    };
  }
}
