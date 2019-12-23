
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_enum';
import { pageConf as conf } from '../../view/conf_edit_enum';

@Component
export default class one_enum extends Vue {

    /** Изменить псевдоним */
    fChangeAlias(e){
        ctrl.vuexSys.fSetOneField('enum', 'k', e.target.value)
    }

    /** Изменить имя */
    fChangeName(e){
        ctrl.vuexSys.fSetOneField('enum', 'name', e.target.value)
    }

    /** Изменить описание */
    fChangeDescript(e){
        ctrl.vuexSys.fSetOneField('enum', 'descript', e.target.value)
    }

    /** Изменить путь 1 */
    fChangePath1(e){
        ctrl.vuexSys.fSetOneField('enum', 'path1', e.target.value)
    }

    /** Изменить путь 2 */
    fChangePath2(e){
        ctrl.vuexSys.fSetOneField('enum', 'path2', e.target.value)
    }

    /** Изменить путь 3 */
    fChangePath3(e){
        ctrl.vuexSys.fSetOneField('enum', 'path3', e.target.value)
    }

    /** Сохранить enum */
    fSaveEnum(){
        ctrl.fSaveEnum();
    }

    /** Удалить enum */
    fDelEnum(idEnum:number){
        ctrl.fDelEnum(idEnum);
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
