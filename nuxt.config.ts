import { Configuration } from '@nuxt/types/config';
import proxy from './app/config/proxy.config';

export default {
  server: {
    port: 3000, // default: 3000
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  // 页面切换动画
  pageTransition: 'slide-left',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  // 指定nuxt应用的源码目录 如需更改目录，同时需修改 tsconfig.json 中的 'path'
  srcDir: 'app/',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'keywords', content: 'kirito,我是关键字' },
      { name: 'description', content: 'kirito,我是描述！' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** 进度条配置
   */
  loading: {
    color: '#fc0d1b',
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/common.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/apiInject',
    { src: '~/plugins/vee-validate', mode: 'client' },
    { src: '~/plugins/vue-bar', mode: 'client' },
    { src: '~/plugins/axiosExtend', mode: 'client' },
    { src: '~/plugins/nuxt-client-init', mode: 'client' },
    { src: '~/plugins/vue-image-crop-upload', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    ['@nuxtjs/vuetify', {}],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    ['cookie-universal-nuxt'],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  // 代理配置  详见config/nuxt.proxy.js
  proxy,
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    customProperties: true,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['vue-image-crop-upload'],
    babel: {
      presets({ isServer }: any) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ];
      },
    },
    extend(config: any) {
      config.resolve.alias.vue = 'vue/dist/vue.common';
    },
  },
  /** typescript config for nuxt */
  typescript: {
    typeCheck: false,
    // typeCheck: {
    //   eslint: {
    //     files: './src/**/*.{ts,js,vue}',
    //   },
    // },
    ignoreNotFoundWarnings: true,
  },
  // 显示构建分析
  analyze: process.env.NODE_ENV === 'production',
} as Configuration;
