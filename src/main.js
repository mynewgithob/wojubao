// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' //解决手机端300ms延迟问题
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store'
import 'styles/border.css'  //兼容浏览器1px问题
import 'styles/reset.css' //重置文件
import 'styles/iconfont.css' //使用iconfont图标
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },  
  template: '<App/>'
})
