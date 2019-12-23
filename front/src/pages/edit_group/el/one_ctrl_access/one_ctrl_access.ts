
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_group';
import { pageConf as conf } from '../../view/conf_edit_group';

@Component
export default class one_ctrl_access extends Vue {

    /** Изменить псевдоним */
    fChangeAlias(e){
        ctrl.vuexSys.fSetOneField('ctrl_access', 'name', e.target.value)
    }

    /** Изменить имя */
    fChangeName(e){
        ctrl.vuexSys.fSetOneField('ctrl_access', 'name', e.target.value)
    }

    /** Изменить описание */
    fChangeDescript(e){
        ctrl.vuexSys.fSetOneField('ctrl_access', 'descript', e.target.value)
    }

    /** Сохранить данные группы */
    fSaveCtrlAccess(){
        ctrl.fSaveCtrlAccess();
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
