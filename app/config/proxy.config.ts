// 代理配置
// 参考 https://github.com/nuxt-community/proxy-module
// 参考 https://github.com/chimurai/http-proxy-middleware

export default {
  '/blog': {
    target: 'http://blog.fangzhi.ml',

    // http-proxy-events handle
    // https://github.com/chimurai/http-proxy-middleware#http-proxy-events
    // onProxyReq(proxyReq, req, res) {
    // proxyReq.setHeader('Authorization', global.__BearerToken__)
    // console.log('hello');
    // },
    pathRewrite: {
      '^/blog/': '/',
    },
  },
  '/portal': {
    target: 'http://localhost:7001',
    pathRewrite: {
      '^/portal/': '/',
    },
  },
};
