

import Vue from 'vue';
import app from './page_index.vue'

// Подключаем модули страницы
import pnl_menu from '../el/pnl_menu/pnl_menu.vue'
Vue.component('pnl-menu', pnl_menu);

Vue.config.productionTip = false

new Vue({
  render: h => h(app),
}).$mount('#app')

