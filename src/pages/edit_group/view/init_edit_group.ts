

import Vue from 'vue';
import app from './page_edit_group.vue'

// Подключаем общие компоненты
import * as common from '../../../common/el'
Vue.component('aa-header', common.aa_header);

// Список пользователей
import list_group from '../el/list_group/list_group.vue'
Vue.component('list-group', list_group);

// Редактирование отображение данных о пользователе
import one_group from '../el/one_group/one_group.vue'
Vue.component('one-group', one_group);

// Добавить пользователя
import add_group from '../el/add_group/add_group.vue'
Vue.component('add-group', add_group);

// Добавить контроллер
import add_ctrl_acces from '../el/add_ctrl_access/add_ctrl_access.vue'
Vue.component('add-ctrl-access', add_ctrl_acces);

// Список групп
import list_ctrl_access from '../el/list_ctrl_access/list_ctrl_access.vue'
Vue.component('list-ctrl-access', list_ctrl_access);

// Информация о группе
import one_ctrl_access from '../el/one_ctrl_access/one_ctrl_access.vue'
Vue.component('one-ctrl-access', one_ctrl_access);

// Панель пагинации
import pnl_group_pagination from '../el/pnl_group_pagination/pnl_group_pagination.vue'
Vue.component('pnl-group-pagination', pnl_group_pagination);


Vue.config.productionTip = false

new Vue({
  render: h => h(app),
}).$mount('#app')

