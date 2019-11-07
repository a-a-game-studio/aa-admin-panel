// vue.config.js
module.exports = {
    // options...
    filenameHashing: false,
    chainWebpack: config => {
        config.output.filename('js/[name].js')
    },
    pages: {
        index: { // Страница админки с меню
            entry: 'src/pages/index/view/init_index.ts',
            filename: 'html/index.html',

            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        login:{ // Страница логина и регистрации
            entry: 'src/pages/login/view/init_login.ts',
            filename: 'html/login.html',

            chunks: ['chunk-vendors', 'chunk-common', 'login']
        },
        edit_user:{ // Редактирование пользователей
            entry: 'src/pages/edit_user/view/init_edit_user.ts',
            filename: 'html/edit_user.html',

            chunks: ['chunk-vendors', 'chunk-common', 'edit_user']
        },
        edit_group:{ // Редактирование групп пользователей
            entry: 'src/pages/edit_group/view/init_edit_group.ts',
            filename: 'html/edit_group.html',

            chunks: ['chunk-vendors', 'chunk-common', 'edit_group']
        },
        edit_enum:{ // Редактирование enum параметров
            entry: 'src/pages/edit_enum/view/init_edit_enum.ts',
            filename: 'html/edit_group.html',

            chunks: ['chunk-vendors', 'chunk-common', 'edit_enum']
        },
    }
}