import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/scss/common.scss"
import { HttpService } from '@/api/request/http'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// 此部分引入的是我们所编写的mockjs文档
import './mock/index'
Vue.use(ViewUI);
console.log(router)
Vue.prototype.$httpService = new HttpService();  // 挂载服务
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
