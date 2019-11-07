
import Vue from 'vue';
import Component from 'vue-class-component'
import {ctrl} from './ctrl_edit_enum';

@Component
export default class page_edit_enum extends Vue {
    el = '#app'

    created(){
        ctrl.fInit();
    }

    get status(){ return ctrl.status; }
    get one(){ return ctrl.one; }
    get list(){ return ctrl.list; }
};
