
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_group';
import { pageConf as conf } from '../../view/conf_edit_group';

@Component
export default class pnl_group_pagination extends Vue {
    
    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
