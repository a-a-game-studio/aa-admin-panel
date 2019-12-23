
import * as aaFront from '@a-a-game-studio/aa-front'

export const vuexSys = new aaFront.VuexSys();
export const store = vuexSys.getRootStore();

vuexSys.registerModuleCmd({
});

vuexSys.registerModuleOne({
    group:null,
    ctrl_access:null,
});

vuexSys.registerModuleList({
    group:null,
    ctrl_access:null,
    access_group:null,
});

vuexSys.registerModuleStatus({
    is_init:false, // Статус инициализации
    id_group:0, // ID текущего группы
    if_new_group_form:false, // Отображать форму добавления группы?
    if_new_ctrl_access_form:false, // Отображать форму добавления контроллера?
    id_group_selected:0, // ID выбранного группы
    id_ctrl_access_selected:0, // ID выбранного контроллера
});