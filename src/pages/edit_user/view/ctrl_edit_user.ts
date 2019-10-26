import * as aaFront from '@a-a-game-studio/aa-front'
import { vuexSys, store } from './vuex_edit_user'
import { pageConf as conf } from './conf_edit_user'

class Ctrl extends aaFront.BaseCtrl{
    constructor(vuexSys:aaFront.VuexSys, conf:any){
        super(vuexSys, conf);
    }

    /**
     * Инициализация страницы
     */
    public fInit(){
        this.querySys.fInit();
        this.querySys.fList('list_user', 'user');
        this.querySys.fList('list_group', 'group');
        this.querySys.fStatus('count_user', 'count_user'); // Статус инициализации страницы
        this.querySys.fStatus('is_init', 'is_init'); // Статус инициализации страницы
        this.querySys.fSend(conf.api.init, {
            offset:0,
            limit:100
        });
    };

    /**
     * Выбрать пользователя
     * @param idUser
     */
    public fSelectUser(idUser:number){

        this.vuexSys.fSetStatus('id_user_selected', idUser);
        this.vuexSys.fClearStatus('if_new_user_form');

        this.querySys.fInit();
        this.querySys.fOne('one_user', 'user');
        this.querySys.fList('list_user_group', 'user_group');
        this.querySys.fSend(conf.api.selectUser, {
            id_user:idUser
        });
    };

    /**
     * Выбрать группу
     * @param idGroup
     */
    public fSelectGroup(idGroup:number){

        this.vuexSys.fSetStatus('id_group_selected', idGroup);

        this.querySys.fInit();
        this.querySys.fOne('one_group', 'group');
        this.querySys.fSend(conf.api.selectGroup, {
            id_group:idGroup
        });
    };

    /**
     * Добавить пользователя
     * @param data 
     */
    public fAddUser(data:{
        login:string,
        pswd:string,
        name:string,
    }){
        // this.vuexSys.fClearList('user');
        this.querySys.fInit();
        this.querySys.fOne('one_user', 'user');
        this.querySys.fList('list_user', 'user');
        this.querySys.fSend(conf.api.addUser, data);
    };

    /**
     * Сохранить пользователя
     * @param data 
     */
    public fSaveUser(){
        this.querySys.fInit();
        this.querySys.fOne('one_user', 'user');
        this.querySys.fList('list_user', 'user');
        this.querySys.fSend(conf.api.saveUser, this.one.user);
    };

    /**
     * Удалить пользователя
     * @param idUser
     */
    public fDelUser(idUser:number){
        this.querySys.fInit();
        this.querySys.fList('list_user', 'user');
        this.querySys.fSend(conf.api.selectUser, {
            id_user:idUser
        });

        this.vuexSys.fClearOne('user');
        this.vuexSys.fClearOne('group');
        this.vuexSys.fClearList('user_group');
    };

    /**
     * Добавить пользователя в группу
     * @param data 
     */
    public fAddUserToGroup(idUser:number, idGroup:number){
        this.querySys.fInit();
        this.querySys.fList('list_user_group', 'user_group');
        this.querySys.fSend(conf.api.addUserToGroup, {
            id_user:idUser,
            id_group:idGroup
        });
    };

    /**
     * Удалить пользователя из группы
     * @param idUser
     */
    public fDelUserFromGroup(idUser:number, idGroup:number){
        this.querySys.fInit();
        this.querySys.fList('list_user_group', 'user_group');
        this.querySys.fSend(conf.api.delUserFromGroup, {
            id_user:idUser,
            id_group:idGroup
        });
    };
        
}

export const ctrl = new Ctrl(vuexSys, conf);