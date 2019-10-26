
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_login';

@Component
export default class pnl_user extends Vue {

    /** Логин */
    fLogout(){
        ctrl.fLogout();
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
};
    
