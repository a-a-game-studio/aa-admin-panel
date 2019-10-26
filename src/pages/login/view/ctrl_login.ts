import * as aaFront from '@a-a-game-studio/aa-front'
import { vuexSys, store } from './vuex_login'
import { pageConf as conf } from './conf_login'

class Ctrl extends aaFront.BaseCtrl{
    constructor(vuexSys:aaFront.VuexSys){
        super(vuexSys, conf);
    }

    public fInit(){
        this.querySys.fInit();
        this.querySys.fOne('one_user_info', 'user');
        this.querySys.fStatus('user_id', 'user_id');
        this.querySys.fStatus('is_login', 'is_login');
        this.querySys.fSend(conf.api.index, null);
    };

    //=========================================
    /** Авторизоваться */ 
    public fLogin(data:{
        login:string;
        pswd:string;
    }) {
        this.querySys.fInit();
        this.querySys.fCmd('cmd_login', 'login');
        this.querySys.fOne('one_user', 'user');
        this.querySys.fStatus('token', 'token');
        this.querySys.fStatus('is_login', 'is_login');

        this.querySys.fSend(conf.api.login, data);
    };

    //=========================================
    /** Выход */ 
    public fLogout(){
        this.querySys.fInit();
        this.querySys.fCmd('cmd_logout', 'logout');
        this.querySys.fSend(conf.api.logout, null);

        this.vuexSys.fClearStatus('user_id');
        this.vuexSys.fClearStatus('is_login');
        this.vuexSys.fClearStatus('token');
        this.vuexSys.fClearOne('user');

        localStorage['token'] = null;
    };
    
}

export const ctrl = new Ctrl(vuexSys);