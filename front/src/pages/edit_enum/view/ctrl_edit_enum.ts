import * as aaFront from '@a-a-game-studio/aa-front'
import { vuexSys, store } from './vuex_edit_enum'
import { pageConf as conf } from './conf_edit_enum'

class Ctrl extends aaFront.BaseCtrl{
    constructor(vuexSys:aaFront.VuexSys, conf:any){
        super(vuexSys, conf);
    }

    /**
     * Инициализация страницы
     */
    public fInit(){
        this.querySys.fInit();
        this.querySys.fList('list_enum', 'enum');
        this.querySys.fStatus('is_init', 'is_init'); // Статус инициализации страницы
        this.querySys.fAction((ok, data) =>{
            if(!ok){
                if(confirm('Что то пошло не так, перейти к странице авторизации?')){
                    window.location.href = conf.common.loginURL;
                }
            }
        })
        this.querySys.fSend(conf.api.init, null);
    };

    /**
     * Выбрать ENUM
     * @param idEnum
     */
    public fSelectEnum(idEnum:number){

        this.vuexSys.fSetStatus('id_enum_selected', idEnum);
        this.vuexSys.fClearStatus('id_enum_param_selected');

        this.querySys.fInit();
        this.querySys.fOne('one_enum', 'enum');
        this.querySys.fList('list_enum_param', 'enum_param');
        this.querySys.fSend(conf.api.selectEnum, {
            id_enum:idEnum
        });
    };

    /**
     * Выбрать контроллер
     * @param idEnumParam
     */
    public fSelectEnumParam(idEnumParam:number){

        this.vuexSys.fSetStatus('id_enum_param_selected', idEnumParam);

        this.querySys.fInit();
        this.querySys.fOne('one_enum_param', 'enum_param');
        this.querySys.fSend(conf.api.selectEnumParam, {
            id_enum_param:idEnumParam
        });
    };

    /**
     * Добавить ENUM
     * @param data 
     */
    public fAddEnum(){
        this.vuexSys.fClearStatus('id_enum_selected');
        this.vuexSys.fClearStatus('id_enum_param_selected');

        this.querySys.fInit();
        this.querySys.fOne('one_enum', 'enum');
        this.querySys.fList('list_enum', 'enum');
        this.querySys.fSend(conf.api.addEnum, null);
    };

    /**
     * Добавить ENUM параметр
     * @param data 
     */
    public fAddEnumParam(){
        this.vuexSys.fClearStatus('id_enum_param_selected');

        this.querySys.fInit();
        this.querySys.fOne('one_enum_param', 'enum_param');
        this.querySys.fList('list_enum_param', 'enum_param');
        this.querySys.fSend(conf.api.addEnumParam, {
            id_enum:this.one.enum.id
        });
    };
    

    /**
     * Сохранить группу
     * @param data 
     */
    public fSaveEnum(){
        this.querySys.fInit();
        this.querySys.fOne('one_enum', 'enum');
        this.querySys.fList('list_enum', 'enum');

        let sendData:any = this.one.enum;
        sendData.id_enum = this.one.enum.id;
        this.querySys.fSend(conf.api.saveEnum, sendData);
    };

    
    /**
     * Сохранить контроллер
     * @param data 
     */
    public fSaveEnumParam(){
        this.querySys.fInit();
        this.querySys.fOne('one_enum_param', 'enum_param');
        this.querySys.fList('list_enum_param', 'enum_param');

        let sendData:any = this.one.enum_param;
        sendData.id_enum_param = this.one.enum_param.id;
        this.querySys.fSend(conf.api.saveEnumParam, this.one.enum_param);
    };

    /**
     * Удалить enum
     * @param idEnum
     */
    public fDelEnum(idEnum:number){
        this.vuexSys.fClearStatus('id_enum_selected');
        this.vuexSys.fClearStatus('id_enum_param_selected');

        this.querySys.fInit();
        this.querySys.fList('list_enum', 'enum');
        this.querySys.fSend(conf.api.delEnum, {
            id_enum:idEnum
        });

        this.vuexSys.fClearOne('enum');
        this.vuexSys.fClearOne('enum_param');
        this.vuexSys.fClearList('enum');
        this.vuexSys.fClearList('enum_param');
    };

    /**
     * Удалить enum параметр
     * @param idUser
     */
    public fDelEnumParam(idEnumParam:number){
        this.vuexSys.fClearStatus('id_enum_param_selected');

        this.querySys.fInit();
        this.querySys.fList('list_enum_param', 'enum_param');
        this.querySys.fSend(conf.api.delEnumParam, {
            id_enum_param:idEnumParam, // ID удаляемого enum параметра
            id_enum:this.one.enum.id // Чтобы получить список измененных enum параметров
        });
    };
        
}

export const ctrl = new Ctrl(vuexSys, conf);