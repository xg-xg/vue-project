import Vue from 'vue'
import './plugins/axios';
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import '@/assets/css/global.css'
import router from './router/Index';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(dataV)
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
