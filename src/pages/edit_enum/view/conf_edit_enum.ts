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
    
    selectEnumParam = '/aa/admin-edit-enum/select-enum-param'; // Выбрать enum параметры
    addEnumParam = '/aa/admin-edit-enum/add-enum-param'; // Добавить enum параметры
    saveEnumParam = '/aa/admin-edit-enum/save-enum-param'; // сохранить enum параметр
    delEnumParam = '/aa/admin-edit-enum/del-enum-param'; // Удалить enum параметр

    selectEnum = '/aa/admin-edit-enum/select-enum'; // Выбрать enum
    addEnum = '/aa/admin-edit-enum/add-enum'; // Добавить enum
    saveEnum = '/aa/admin-edit-enum/save-enum'; // Сохранить enum
    delEnum = '/aa/admin-edit-enum/del-enum'; // Удалить enum

}; const apiurl = new APIURL();

// ======================

conf.api = apiurl;
export const pageConf:PageConfI = conf;

