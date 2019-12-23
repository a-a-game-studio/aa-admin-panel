
<script lang="ts" src="./pnl_menu.ts"></script>

<template>
<div>
    <div class="card">
        <div class="card-header">
            Ролевая модель
        </div>
        <div class="card-body">
            

                    <a :href="conf.page.editUser" class="btn btn-outline-primary d-block">
                        Редактирование пользователей
                    </a>
                
                    <a :href="conf.page.editCtrlAccess" class="btn btn-outline-primary d-block" style="color:#CCC;">
                        Редактирование модулей доступа
                    </a>
                
                    <a :href="conf.page.editGroup" class="btn btn-outline-primary d-block" style="color:#CCC;">
                        Редактирование групп
                    </a>
                
        </div>
    </div>
</div>
</template>