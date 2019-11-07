import * as aaFront from '@a-a-game-studio/aa-front'
import { store } from './vuex_edit_enum'
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
    init = '/aa/admin-edit-enum/init'; // Инициализация данных
    
    selectEnumParam = '/aa/admin-edit-enum/select-enum-param'; // Выбрать контроллер
    addEnumParam = '/aa/admin-edit-enum/add-enum-param'; // Добавить контроллер
    saveEnumParam = '/aa/admin-edit-enum/save-enum-param'; // сохранить контроллер

    selectEnum = '/aa/admin-edit-enum/select-enum'; // Выбрать группу
    addEnum = '/aa/admin-edit-enum/add-enum'; // Добавить группу
    saveEnum = '/aa/admin-edit-enum/save-enum'; // Сохранить группу
    delEnum = '/aa/admin-edit-enum/del-enum'; // Удалить группу

    addEnumParamToEnum = '/aa/admin-edit-enum/add-enum-param-to-enum'; // Добавить контроллер  группе
    delEnumParamFromEnum = '/aa/admin-edit-enum/del-enum-param-from-enum'; // Удалить контроллер у группы
}; const apiurl = new APIURL();

// ======================

conf.api = apiurl;
export const pageConf:PageConfI = conf;

