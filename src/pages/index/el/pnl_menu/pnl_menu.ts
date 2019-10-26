
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_index';
import { pageConf as conf } from '../../view/conf_index';

@Component
export default class pnl_menu extends Vue {

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
