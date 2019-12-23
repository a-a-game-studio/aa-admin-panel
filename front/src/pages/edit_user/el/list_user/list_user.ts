
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_user';
import { pageConf as conf } from '../../view/conf_edit_user';

@Component
export default class list_user extends Vue {

    
    fAddUser(){
        ctrl.vuexSys.fClearStatus('id_user_selected');
        ctrl.vuexSys.fSetStatus('if_new_user_form', true);
    }
    /**
     * Выбрать пользователя
     * @param idUser 
     */
    fSelectUser(idUser:number){
        ctrl.fSelectUser(idUser);
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
