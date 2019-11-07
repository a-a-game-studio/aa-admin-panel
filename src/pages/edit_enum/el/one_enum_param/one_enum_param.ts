
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_enum';
import { pageConf as conf } from '../../view/conf_edit_enum';

@Component
export default class one_enum_param extends Vue {

    /** Изменить псевдоним */
    fChangeAlias(e){
        ctrl.vuexSys.fSetOneField('enum_param', 'name', e.target.value)
    }

    /** Изменить имя */
    fChangeName(e){
        ctrl.vuexSys.fSetOneField('enum_param', 'name', e.target.value)
    }

    /** Изменить описание */
    fChangeDescript(e){
        ctrl.vuexSys.fSetOneField('enum_param', 'descript', e.target.value)
    }

    /** Сохранить данные группы */
    fSaveEnumParam(){
        ctrl.fSaveEnumParam();
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
