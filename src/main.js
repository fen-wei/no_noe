import Vue from 'vue'
import App from './App'
import router from './router'
import "../static/js/rem"
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(ElementUI);

Vue.use(Vant);
Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
