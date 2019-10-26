
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_group';
import { pageConf as conf } from '../../view/conf_edit_group';

@Component
export default class list_ctrl_access extends Vue {

    /**
     * Открыть форму добавления контроллера
     */
    fAddCtrlAccess(){
        ctrl.vuexSys.fClearStatus('id_ctrl_access_selected');
        ctrl.vuexSys.fSetStatus('if_new_ctrl_access_form', true);
    }

    /**
     * Выбрать группу
     * @param idCtrlAccess
     */
    fSelectCtrlAccess(idCtrlAccess:number){
        ctrl.vuexSys.fSetStatus('if_new_ctrl_access_form', false);
        ctrl.fSelectCtrlAccess(idCtrlAccess);
    }

    /**
     * Добавить пользователя в группу
     * @param idGroup 
     * @param idCtrlAccess 
     */
    fAddCtrlAccessToGroup(idCtrlAccess:number, idGroup:number){
        ctrl.fAddCtrlAccessToGroup(idCtrlAccess, idGroup);
    }

    /**
     * Удалить пользователя из группу
     * @param idGroup 
     * @param idCtrlAccess 
     */
    fDelCtrlAccessFromGroup(idCtrlAccess:number, idGroup:number){
        ctrl.fDelCtrlAccessFromGroup(idCtrlAccess, idGroup);
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }

    /**
     * Индексировать права доступа группы по ID
     */
    get ixAccessGroupByID(){
        let ixAccessGroupByID = {};
        try{
            for(let i = 0; i < ctrl.list.access_group.length; i++){
                let k = ctrl.list.access_group[i].id_ctrl_access;
                let v = ctrl.list.access_group[i];
                ixAccessGroupByID[k] = v;
            }
        } catch(e){
            console.log('===> Не воможно получить связку пользователей и группы', e)
            ixAccessGroupByID = {};
        }
        return ixAccessGroupByID;
    }
};
    
