

export interface ConfI {
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
    port:3002
}
