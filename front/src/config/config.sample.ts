
import * as aaFront from '@a-a-game-studio/aa-front'

export interface ConfI extends aaFront.ConfI{
    page:PageUrl; // URL страниц
    api:any; // URL api
    port:number; // Порт сервера
}

/**
 * URL page
 */
class PageUrl{
    index = '/aa/admin';
    login = '/aa/admin/login';
    editUser = '/aa/admin/edit-user';
    editCtrlAccess = '/aa/admin/edit-ctrl-access';
    editGroup = '/aa/admin/edit-group';
    editEnum = '/aa/admin/edit-enum';
}; const pageUrl = new PageUrl();

export const conf:ConfI = {
    page:pageUrl,
    api:null, //  URL API для конкретной страницы
    common:{
        baseURL:'//dev.aa-admin-panel.ru',
        apiURL:'//dev.aa-core.ru',
        loginURL:'/aa/admin/login',
    },
    port:3000
}
