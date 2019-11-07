
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_enum';
import { pageConf as conf } from '../../view/conf_edit_enum';

@Component
export default class one_enum extends Vue {

    /** Изменить псевдоним */
    fChangeAlias(e){
        ctrl.vuexSys.fSetOneField('enum', 'name', e.target.value)
    }

    /** Изменить имя */
    fChangeName(e){
        ctrl.vuexSys.fSetOneField('enum', 'name', e.target.value)
    }

    /** Изменить описание */
    fChangeDescript(e){
        ctrl.vuexSys.fSetOneField('enum', 'descript', e.target.value)
    }

    /** Сохранить данные группы */
    fSaveEnum(){
        ctrl.fSaveEnum();
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
