import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import fastclick from "fastclick";
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false

fastclick.attach(document.body);
Vue.use(VueLazyload)
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
