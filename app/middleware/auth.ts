export default function ({ store, _error, redirect }: any) {
  // If the user is not authenticated
  if (!store.getters['user/isLogin']) {
    // error({
    //   message: 'You are not connected',
    //   statusCode: 403,
    // });
    redirect('/signin');
  }
}
