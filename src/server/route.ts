
import * as express from 'express';

import { conf } from '../config/config'

// Подключение системных классов

var router = express.Router();

/**
 * API для Админки
 * Редактирование и управление пользователями, а так-же их правами
 */
class AdminUserController
{
    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    public static async init(req:any, res:any): Promise<AdminUserController>{
        let self = new AdminUserController();

        //==================================================

        return self;

    }
}

/**
 * Login
 */
router.get(conf.page.login, async (req:any, res:any, next:any) => {
    let self = await AdminUserController.init(req, res);

    res.render('base/login.twig', {
        page:'login'
    });
});

/**
 * Загрузочная страница
 */
router.get(conf.page.index, async (req:any, res:any, next:any) => {
    let self = await AdminUserController.init(req, res);

    res.render('base/index.twig', {
        page:'index'
    });
});

/**
 * Редактирование пользователей
 */
router.get(conf.page.editUser, async (req:any, res:any, next:any) => {
    let self = await AdminUserController.init(req, res);

    res.render('base/edit_user.twig', {
        page:'edit_user'
    });
});

/**
 * Редактирование модулей доступа
 */
router.get(conf.page.editCtrlAccess, async (req:any, res:any, next:any) => {
    let self = await AdminUserController.init(req, res);

    res.render('base/edit_ctrl_access.twig', {
        page:'edit_ctrl_access'
    });
});

/**
 * Редактирование групп
 */
router.get(conf.page.editGroup, async (req:any, res:any, next:any) => {
    let self = await AdminUserController.init(req, res);

    res.render('base/edit_group.twig', {
        page:'edit_group'
    });
});

// /**
//  * Редактирование прав доступа
//  */
// router.get('/admin/role-model/edit-access-group', async (req:any, res:any, next:any) => {
//     let self = await AdminUserController.init(req, res);

//     res.render('base/edit_access_group.twig', {
//         page:'edit_access_group'
//     });
// });


export {router};
