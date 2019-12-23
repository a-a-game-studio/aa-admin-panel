
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_group';
import { pageConf as conf } from '../../view/conf_edit_group';

@Component
export default class list_group extends Vue {

    
    fAddGroup(){
        ctrl.vuexSys.fClearStatus('id_group_selected');
        ctrl.vuexSys.fSetStatus('if_new_group_form', true);
    }
    /**
     * Выбрать группу
     * @param idGroup
     */
    fSelectGroup(idGroup:number){
        ctrl.fSelectGroup(idGroup);
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
