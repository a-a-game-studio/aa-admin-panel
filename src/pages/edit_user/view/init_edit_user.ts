

import Vue from 'vue';
import app from './page_edit_user.vue'

// Подключаем общие компоненты
import * as common from '../../../common/el'
Vue.component('aa-header', common.aa_header);

// Список пользователей
import list_user from '../el/list_user/list_user.vue'
Vue.component('list-user', list_user);

// Редактирование отображение данных о пользователе
import one_user from '../el/one_user/one_user.vue'
Vue.component('one-user', one_user);

// Добавить пользователя
import add_user from '../el/add_user/add_user.vue'
Vue.component('add-user', add_user);

// Список групп
import list_group from '../el/list_group/list_group.vue'
Vue.component('list-group', list_group);

// Информация о группе
import one_group from '../el/one_group/one_group.vue'
Vue.component('one-group', one_group);

// Панель пагинации
import pnl_user_pagination from '../el/pnl_user_pagination/pnl_user_pagination.vue'
Vue.component('pnl-user-pagination', pnl_user_pagination);


Vue.config.productionTip = false

new Vue({
  render: h => h(app),
}).$mount('#app')

