
import * as aaFront from '@a-a-game-studio/aa-front'

export const vuexSys = new aaFront.VuexSys();
export const store = vuexSys.getRootStore();

vuexSys.registerModuleCmd({
    login:false,
});

vuexSys.registerModuleOne({
    user:null,
    group:null,
});

vuexSys.registerModuleList({
    user:null,
    group:null,
    user_group:null,
});

vuexSys.registerModuleStatus({
    is_init:false, // Статус инициализации
    id_user:0, // ID текущего пользователя
    if_new_user_form:false, // Отображать форму добавления пользователя?
    id_user_selected:0, // ID выбранного пользователя
    id_group_selected:0, // ID выбранной группы
});