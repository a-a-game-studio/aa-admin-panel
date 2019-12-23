
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_enum';
import { pageConf as conf } from '../../view/conf_edit_enum';

@Component
export default class list_enum extends Vue {

    /** Добавить enum */
    fAddEnum(){
        ctrl.fAddEnum();
    }
    
    /**
     * Выбрать группу
     * @param idEnum
     */
    fSelectEnum(idEnum:number){
        ctrl.fSelectEnum(idEnum);
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
