import * as aaFront from '@a-a-game-studio/aa-front'
import { store } from './vuex_login'
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
    index = '/aa/login/init' // Данные получаемые по умолчанию
    login = '/aa/login/login'; // Залогиниться
    register = '/aa/login/register'; // Регистрация
    logout = '/aa/login/logout'; // Разлогиниться
}; const apiurl = new APIURL();

// ======================

conf.api = apiurl;
export const pageConf:PageConfI = conf;

