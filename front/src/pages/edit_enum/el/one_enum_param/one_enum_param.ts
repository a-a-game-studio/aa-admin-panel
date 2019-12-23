
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_enum';
import { pageConf as conf } from '../../view/conf_edit_enum';

@Component
export default class one_enum_param extends Vue {

    /** Изменить псевдоним */
    fChangeAlias(e){
        ctrl.vuexSys.fSetOneField('enum_param', 'k', e.target.value)
    }

    /** Изменить имя */
    fChangeName(e){
        ctrl.vuexSys.fSetOneField('enum_param', 'name', e.target.value)
    }

    /** Изменить тип */
    fChangeType(e){
        ctrl.vuexSys.fSetOneField('enum_param', 'type', e.target.value)
    }

    /** Изменить значение */
    fChangeVal(e){
        ctrl.vuexSys.fSetOneField('enum_param', 'val', e.target.value)
    }

    /** Изменить описание */
    fChangeDescript(e){
        ctrl.vuexSys.fSetOneField('enum_param', 'descript', e.target.value)
    }

    /** Изменить аргумент 1 */
    fChangeArg1(e){
        ctrl.vuexSys.fSetOneField('enum_param', 'arg1', e.target.value)
    }

    /** Изменить аргумент 2 */
    fChangeArg2(e){
        ctrl.vuexSys.fSetOneField('enum_param', 'arg2', e.target.value)
    }

    /** Изменить аргумент 3 */
    fChangeArg3(e){
        ctrl.vuexSys.fSetOneField('enum_param', 'arg3', e.target.value)
    }

    /** Сохранить enum параметр */
    fSaveEnumParam(){
        ctrl.fSaveEnumParam();
    }

    /** Удалить enum параметр */
    fDelEnumParam(idEnumParam:number){
        ctrl.fDelEnumParam(idEnumParam);
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
