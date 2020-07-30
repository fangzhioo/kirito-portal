/**
 * axios 统一处理
 * onRequest(config)
  onResponse(response)
  onError(err)
  onRequestError(err)
  onResponseError(err)
 */

export default <Nuxt.Plugin>function ({ $axios, redirect }) {
  // 处理onResponse
  $axios.onResponse((response: any) => {
    return response;
  });

  // 统一处理 404
  $axios.onError((error: any) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 500 && window) {
      redirect('/500');
    }
  });
};
