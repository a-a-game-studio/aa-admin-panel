
import * as aaFront from '@a-a-game-studio/aa-front'

export const vuexSys = new aaFront.VuexSys();
export const store = vuexSys.getRootStore();

vuexSys.registerModuleCmd({
    login:false,
});

vuexSys.registerModuleOne({
    user:null,
});

vuexSys.registerModuleList({
});

vuexSys.registerModuleStatus({
    is_login:false,
    user_id:0,
    token:null,
});