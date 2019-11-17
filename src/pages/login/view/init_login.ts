
import Vue from 'vue';
import app from './page_login.vue'

// Подключаем общие компоненты
import * as common from '../../../common/el'
Vue.component('aa-header', common.aa_header);

// Подключаем модули страницы
import frm_login from '../el/frm_login/frm_login.vue'
Vue.component('frm-login', frm_login);

import pnl_user from '../el/pnl_user/pnl_user.vue'
Vue.component('pnl-user', pnl_user);

Vue.config.productionTip = false

new Vue({
  render: h => h(app),
}).$mount('#app')

