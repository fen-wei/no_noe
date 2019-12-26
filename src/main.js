import Vue from 'vue'
import App from './App'
import router from './router';
import store from "./store";
import "../static/js/rem"
import Vant from 'vant';
import 'vant/lib/index.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
Vue.prototype.$axios = axios;

/* eslint-disable no-new */

Vue.use(Vant);
Vue.use(ElementUI);


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
