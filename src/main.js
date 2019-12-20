import Vue from 'vue'
import App from './App'
import router from './router'
import "../static/js/rem"
import Vant from 'vant';
import 'vant/lib/index.css';
<<<<<<< HEAD


Vue.config.productionTip = false
Vue.use(Vant);
/* eslint-disable no-new */


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false


Vue.use(ElementUI)
=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/* eslint-disable no-new */

Vue.use(Vant);
Vue.use(ElementUI);


Vue.config.productionTip = false


>>>>>>> ace217a2b93f032e02ccf00f6b020dbbd8ec7ac7
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
