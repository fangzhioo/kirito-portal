/**
 * 用来调用客户端初始化的！ 如： 从本地存储中获取个人的一些信息；
 */
// nuxt-client-init.client.js
export default async (context: any) => {
  await context.store.dispatch('nuxtClientInit', context);
};
