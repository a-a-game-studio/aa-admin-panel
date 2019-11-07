
import * as aaFront from '@a-a-game-studio/aa-front'

export const vuexSys = new aaFront.VuexSys();
export const store = vuexSys.getRootStore();

vuexSys.registerModuleCmd({
});

vuexSys.registerModuleOne({
    enum:null,
    enum_param:null,
});

vuexSys.registerModuleList({
    enum:null,
    enum_param:null,
});

vuexSys.registerModuleStatus({
    is_init:false, // Статус инициализации
    id_enum_selected:0, // ID выбранного группы
    id_enum_param_selected:0, // ID выбранного контроллера
});