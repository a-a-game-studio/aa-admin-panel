
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_enum';
import { pageConf as conf } from '../../view/conf_edit_enum';

@Component
export default class list_enum_param extends Vue {

    /**
     * Добавить параметр
     */
    fAddEnumParam(){
        ctrl.fAddEnumParam();
    }

    /**
     * Выбрать группу
     * @param idEnumParam
     */
    fSelectEnumParam(idEnumParam:number){
        ctrl.vuexSys.fSetStatus('if_new_enum_param_form', false);
        ctrl.fSelectEnumParam(idEnumParam);
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }

    /**
     * Индексировать права доступа группы по ID
     */
    get ixAccessEnumByID(){
        let ixAccessEnumByID = {};
        try{
            for(let i = 0; i < ctrl.list.access_enum.length; i++){
                let k = ctrl.list.access_enum[i].id_enum_param;
                let v = ctrl.list.access_enum[i];
                ixAccessEnumByID[k] = v;
            }
        } catch(e){
            console.log('===> Не воможно получить связку пользователей и группы', e)
            ixAccessEnumByID = {};
        }
        return ixAccessEnumByID;
    }
};
    
