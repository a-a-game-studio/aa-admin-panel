
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_group';
import { pageConf as conf } from '../../view/conf_edit_group';

@Component
export default class one_group extends Vue {

    /** Изменить псевдоним */
    fChangeAlias(e){
        ctrl.vuexSys.fSetOneField('group', 'name', e.target.value)
    }

    /** Изменить имя */
    fChangeName(e){
        ctrl.vuexSys.fSetOneField('group', 'name', e.target.value)
    }

    /** Изменить описание */
    fChangeDescript(e){
        ctrl.vuexSys.fSetOneField('group', 'descript', e.target.value)
    }

    /** Сохранить данные группы */
    fSaveGroup(){
        ctrl.fSaveGroup();
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
