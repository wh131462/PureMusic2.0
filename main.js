import App from './App'
import common from './common/common.js'
//引入vuex
import store from './store'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$noMoreClick=common.noMoreClick;
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.mixin({
	  methods:{
		  $noMoreClick:common.noMoreClick
	  }
  })
  app.use(store)
  return {
    app
  }
}
// #endif