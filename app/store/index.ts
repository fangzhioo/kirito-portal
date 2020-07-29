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
};
