import * as aaFront from '@a-a-game-studio/aa-front'
import { vuexSys, store } from './vuex_edit_group'
import { pageConf as conf } from './conf_edit_group'

class Ctrl extends aaFront.BaseCtrl{
    constructor(vuexSys:aaFront.VuexSys, conf:any){
        super(vuexSys, conf);
    }

    /**
     * Инициализация страницы
     */
    public fInit(){
        this.querySys.fInit();
        this.querySys.fList('list_group', 'group');
        this.querySys.fList('list_ctrl_access', 'ctrl_access');
        this.querySys.fStatus('is_init', 'is_init'); // Статус инициализации страницы
        this.querySys.fAction((ok, data) =>{
            if(!ok){
                if(confirm('Что то пошло не так, перейти к странице авторизации?')){
                    window.location.href = conf.common.loginURL;
                }
            }
        })
        this.querySys.fSend(conf.api.init, null);
    };

    /**
     * Выбрать группы
     * @param idGroup
     */
    public fSelectGroup(idGroup:number){

        this.vuexSys.fSetStatus('id_group_selected', idGroup);
        this.vuexSys.fClearStatus('if_new_group_form');

        this.querySys.fInit();
        this.querySys.fOne('one_group', 'group');
        this.querySys.fList('list_access_group', 'access_group');
        this.querySys.fSend(conf.api.selectGroup, {
            id_group:idGroup
        });
    };

    /**
     * Выбрать контроллер
     * @param idCtrlAccess
     */
    public fSelectCtrlAccess(idCtrlAccess:number){

        this.vuexSys.fSetStatus('id_ctrl_access_selected', idCtrlAccess);

        this.querySys.fInit();
        this.querySys.fOne('one_ctrl_access', 'ctrl_access');
        this.querySys.fSend(conf.api.selectCtrlAccess, {
            id_ctrl_access:idCtrlAccess
        });
    };

    /**
     * Добавить группу
     * @param data 
     */
    public fAddGroup(data:{
        alias:string,
        name:string,
        descript:string
    }){
        // this.vuexSys.fClearList('group');
        this.querySys.fInit();
        this.querySys.fOne('one_group', 'group');
        this.querySys.fList('list_group', 'group');
        this.querySys.fSend(conf.api.addGroup, data);
    };

    /**
     * Добавить контроллер
     * @param data 
     */
    public fAddCtrlAccess(data:{
        alias:string,
        name:string,
        descript:string
    }){
        // this.vuexSys.fClearList('group');
        this.querySys.fInit();
        this.querySys.fOne('one_ctrl_access', 'ctrl_access');
        this.querySys.fList('list_ctrl_access', 'ctrl_access');
        this.querySys.fSend(conf.api.addCtrlAccess, data);
    };
    

    /**
     * Сохранить группу
     * @param data 
     */
    public fSaveGroup(){
        this.querySys.fInit();
        this.querySys.fOne('one_group', 'group');
        this.querySys.fList('list_group', 'group');
        this.querySys.fSend(conf.api.saveGroup, this.one.group);
    };

    
    /**
     * Сохранить контроллер
     * @param data 
     */
    public fSaveCtrlAccess(){
        this.querySys.fInit();
        this.querySys.fOne('one_ctrl_access', 'ctrl_access');
        this.querySys.fList('list_ctrl_access', 'ctrl_access');
        this.querySys.fSend(conf.api.saveCtrlAccess, this.one.ctrl_access);
    };

    /**
     * Удалить группу
     * @param idGroup
     */
    public fDelGroup(idGroup:number){
        this.querySys.fInit();
        this.querySys.fList('list_group', 'group');
        this.querySys.fSend(conf.api.delGroup, {
            id_group:idGroup
        });

        this.vuexSys.fClearOne('group');
        this.vuexSys.fClearOne('ctrl_access');
        this.vuexSys.fClearList('access_group');
    };

    /**
     * Добавить контроллер группе
     * @param data 
     */
    public fAddCtrlAccessToGroup(idCtrlAccess:number, idGroup:number){
        this.querySys.fInit();
        this.querySys.fList('list_access_group', 'access_group');
        this.querySys.fSend(conf.api.addCtrlAccessToGroup, {
            id_ctrl_access:idCtrlAccess,
            id_group:idGroup,
        });
    };

    /**
     * Удалить контроллер у группы
     * @param idUser
     */
    public fDelCtrlAccessFromGroup(idCtrlAccess:number, idGroup:number){
        this.querySys.fInit();
        this.querySys.fList('list_access_group', 'access_group');
        this.querySys.fSend(conf.api.delCtrlAccessFromGroup, {
            id_ctrl_access:idCtrlAccess,
            id_group:idGroup,
        });
    };
        
}

export const ctrl = new Ctrl(vuexSys, conf);