import Vue from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap'

Vue.config.productionTip = false
import "@/assets/css/bootstrap.min.css";

new Vue({
  render: h => h(App),
  bootstrap,
}).$mount('#app')
