import Vuex from "vuex";

export default ({ $axios, app, redirect, store }) => {
	$axios.onError(error => {
    // if (error.response && error.response.status === 500) {
    //   redirect('/login')
    // }
    if (error.response && error.response.status === 401) {
    	app.$cookies.remove('idp_token')
      app.$cookies.remove('idp_user')
      store.commit('SET_LOGIN', false)
      store.commit('SET_USER', [])
    	redirect('/login')
    }
  })
  $axios.onRequest(config => {
	const idp_token = app.$cookies.get('idp_token')
    config.headers.common['Authorization'] = `Bearer ` + idp_token;
  });

}