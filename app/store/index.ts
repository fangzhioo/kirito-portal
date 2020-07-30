/**
 * object mode
 */
export const actions = {
  nuxtServerInit({ dispatch, commit }: any, ctx: Nuxt.Context) {
    if (!ctx.route || !ctx.route.name) return;
    try {
      // so you do someing  when fist open or page refresh
      // like get user info
      // await dispatch({
      //   type: 'user/loadUser',
      //   payload: {
      //     username: 'user1',
      //   },
      // });
    } catch (err) {}
  },
  async nuxtClientInit({ commit, dispatch }, { req }) {
    try {
      commit('global/initToken');
      await dispatch({
        type: 'global/currentUser',
      });
    } catch (error) {}
  },
};
