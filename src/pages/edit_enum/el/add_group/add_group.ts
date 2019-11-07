
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_enum';
import { pageConf as conf } from '../../view/conf_edit_enum';

@Component
export default class add_enum extends Vue {
    sAlias:string = null;
    sName:string = null;
    sDescript:string = null;

    /** Добавить группу */
    fAddEnum(e){

        try{
            ctrl.fAddEnum({
                alias:this.sAlias,
                name:this.sName,
                descript:this.sDescript,
            })
            
        } catch(e) {
            alert('Неверно заполнены поля');
            console.log('===>Ошибка добавления группы:',e);
        }

        this.fClearFrm();    
    }

    /** Очистить форму */
    fClearFrm(){
        this.sAlias = null;
        this.sName = null;
        this.sDescript = null;
    }
    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
