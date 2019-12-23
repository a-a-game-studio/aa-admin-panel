import * as aaFront from '@a-a-game-studio/aa-front'
import { store } from './vuex_edit_group'
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
    init = '/aa/admin-edit-group/init'; // Инициализация данных
    
    selectCtrlAccess = '/aa/admin-edit-group/select-ctrl-access'; // Выбрать контроллер
    addCtrlAccess = '/aa/admin-edit-group/add-ctrl-access'; // Добавить контроллер
    saveCtrlAccess = '/aa/admin-edit-group/save-ctrl-access'; // сохранить контроллер

    selectGroup = '/aa/admin-edit-group/select-group'; // Выбрать группу
    addGroup = '/aa/admin-edit-group/add-group'; // Добавить группу
    saveGroup = '/aa/admin-edit-group/save-group'; // Сохранить группу
    delGroup = '/aa/admin-edit-group/del-group'; // Удалить группу

    addCtrlAccessToGroup = '/aa/admin-edit-group/add-ctrl-access-to-group'; // Добавить контроллер  группе
    delCtrlAccessFromGroup = '/aa/admin-edit-group/del-ctrl-access-from-group'; // Удалить контроллер у группы
}; const apiurl = new APIURL();

// ======================

conf.api = apiurl;
export const pageConf:PageConfI = conf;

