
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_user';
import { pageConf as conf } from '../../view/conf_edit_user';

@Component
export default class add_user extends Vue {
    sLogin:string = null;
    sName:string = null;
    sPswd:string = null;
    sPswdRepeat:string = null;

    /** Добавить пользователя */
    fAddUser(e){

        try{
            if(this.sLogin.length >= 3 && (this.sPswd === this.sPswdRepeat) ){
                ctrl.fAddUser({
                    login:this.sLogin,
                    pswd:this.sPswd,
                    name:this.sName,
                })
            }
        } catch(e) {
            alert('Неверно заполнены поля');
            console.log('===>Ошибка добавления пользователя:',e);
        }

        this.fClearFrm();    
    }

    /** Очистить форму */
    fClearFrm(){
        this.sLogin = null;
        this.sName = null;
        this.sPswd = null;
        this.sPswdRepeat = null;
    }
    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
