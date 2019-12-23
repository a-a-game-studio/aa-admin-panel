import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_login';

@Component
export default class frm_login extends Vue {
    private sLogin:string = null;
    private sPswd:string = null;

    /** Логин */
    fLogin(){
        var login_data = {
            login:this.sLogin,
            pswd:this.sPswd,
        };
        ctrl.fLogin(login_data);
    }
    
    /** Ввод логина */
    fInputLogin(e){
        this.sLogin = e.target.value;
    }

    /** Ввод пароля */
    fInputPswd(e){
        this.sPswd = e.target.value;
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
};
    
