/**
 * object mode
 */
export const actions = {
  async nuxtServerInit({ dispatch, commit }: any, ctx: Nuxt.Context) {
    if (!ctx.route || !ctx.route.name) return;
    try {
      // so you do someing  when fist open or page refresh
      // like get user info
      commit('user/initToken');
      await dispatch({
        type: 'user/currentUser',
      });
    } catch (err) {}
  },
  nuxtClientInit({ commit, dispatch }, { req }) {
    try {
      //  commit('user/initToken');
      // await dispatch({
      //   type: 'user/currentUser',
      // });
      // console.log('nuxtClientInit');
    } catch (error) {}
  },
};
