import * as aaFront from '@a-a-game-studio/aa-front'
import { store } from './vuex_edit_user'
import { conf, ConfI } from '../../../config/config'


// Переопределяем интерфейс конфигурации
export interface PageConfI extends ConfI{
    api:APIURL;
}

// ======================

/**
 * URL API для страницы
 */
class APIURL{
    init = '/aa/admin-edit-user/init' // Инициализация данных
    selectUser = '/aa/admin-edit-user/select-user' // Выбрать пользователя
    selectGroup = '/aa/admin-edit-user/select-group' // Выбрать группу
    addUser = '/aa/admin-edit-user/add-user' // Добавить пользователя
    saveUser = '/aa/admin-edit-user/save-user' // Сохранить пользователя
    delUser = '/aa/admin-edit-user/del-user' // Удалить пользователя
    addUserToGroup = '/aa/admin-edit-user/add-user-to-group' // Добавить пользователя в группу
    delUserFromGroup = '/aa/admin-edit-user/del-user-from-group' // Удалить пользователя из группы
}; const apiurl = new APIURL();

// ======================

conf.api = apiurl;
export const pageConf:PageConfI = conf;

