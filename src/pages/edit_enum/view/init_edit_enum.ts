

import Vue from 'vue';
import app from './page_edit_enum.vue'

// Подключаем общие компоненты
import * as common from '../../../common/el'
Vue.component('aa-header', common.aa_header);

// Список пользователей
import list_enum from '../el/list_enum/list_enum.vue'
Vue.component('list-enum', list_enum);

// Редактирование отображение данных о пользователе
import one_enum from '../el/one_enum/one_enum.vue'
Vue.component('one-enum', one_enum);

// Добавить пользователя
import add_enum from '../el/add_enum/add_enum.vue'
Vue.component('add-enum', add_enum);

// Добавить контроллер
import add_ctrl_acces from '../el/add_enum_param/add_enum_param.vue'
Vue.component('add-enum-param', add_ctrl_acces);

// Список групп
import list_enum_param from '../el/list_enum_param/list_enum_param.vue'
Vue.component('list-enum-param', list_enum_param);

// Информация о группе
import one_enum_param from '../el/one_enum_param/one_enum_param.vue'
Vue.component('one-enum-param', one_enum_param);

// Панель пагинации
import pnl_enum_pagination from '../el/pnl_enum_pagination/pnl_enum_pagination.vue'
Vue.component('pnl-enum-pagination', pnl_enum_pagination);


Vue.config.productionTip = false

new Vue({
  render: h => h(app),
}).$mount('#app')

