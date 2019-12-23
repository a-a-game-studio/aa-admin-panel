
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_user';
import { pageConf as conf } from '../../view/conf_edit_user';

@Component
export default class list_group extends Vue {

    /**
     * Выбрать группу
     * @param idGroup
     */
    fSelectGroup(idGroup:number){
        ctrl.fSelectGroup(idGroup);
    }

    /**
     * Добавить пользователя в группу
     * @param idUser 
     * @param idGroup 
     */
    fAddUserToGroup(idUser:number, idGroup:number){
        ctrl.fAddUserToGroup(idUser, idGroup);
    }

    /**
     * Удалить пользователя из группу
     * @param idUser 
     * @param idGroup 
     */
    fDelUserFromGroup(idUser:number, idGroup:number){
        ctrl.fDelUserFromGroup(idUser, idGroup);
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }

    get ixUserGroupByID(){
        let ixUserGroupByID = {};
        try{
            for(let i = 0; i < ctrl.list.user_group.length; i++){
                let k = ctrl.list.user_group[i].id_group;
                let v = ctrl.list.user_group[i];
                ixUserGroupByID[k] = v;
            }
        } catch(e){
            console.log('===> Не воможно получить связку пользователей и группы', e)
            ixUserGroupByID = {};
        }
        return ixUserGroupByID;
    }
};
    
