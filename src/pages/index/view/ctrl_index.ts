import * as aaFront from '@a-a-game-studio/aa-front'
import { vuexSys, store } from './vuex_index'
import { pageConf as conf } from './conf_index'

class Ctrl extends aaFront.BaseCtrl{
    constructor(vuexSys:aaFront.VuexSys, conf:any){
        super(vuexSys, conf);
    }

    public fInit(){
        this.querySys.fInit();
        this.querySys.fOne('one_user_info', 'user');
        this.querySys.fStatus('user_id', 'user_id');
        this.querySys.fStatus('is_login', 'is_login');
        this.querySys.fSend(conf.api.index, null);
    };
        
}

export const ctrl = new Ctrl(vuexSys, conf);