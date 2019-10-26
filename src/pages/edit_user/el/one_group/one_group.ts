
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from '../../view/ctrl_edit_user';
import { pageConf as conf } from '../../view/conf_edit_user';

@Component
export default class one_group extends Vue {

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
    get conf(){ return conf; }
};
    
