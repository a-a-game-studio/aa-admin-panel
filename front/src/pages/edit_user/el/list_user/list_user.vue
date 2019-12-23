
<script lang="ts" src="./list_user.ts"></script>

<template>
<div>
    <div class="card">
        <div class="card-header">
            Список пользователей
        </div>
        <div class="card-body">
            
            <button @click="fAddUser" type="button" class="btn btn-outline-info btn-block"><i class="fas fa-plus fa-lg"></i></button>
            <template v-for="oneUser in list.user">
                <button 
                    v-if="oneUser.id_user == status.id_user_selected" 
                    @click="fSelectUser(oneUser.id_user)"  
                    type="button" class="btn btn-info active btn-block"
                >
                    {{oneUser.id_user}} - {{oneUser.login}}
                </button>
                <button 
                    v-if="oneUser.id_user != status.id_user_selected" 
                    @click="fSelectUser(oneUser.id_user)"
                    type="button" class="btn btn-outline-info btn-block"
                >
                    {{oneUser.id_user}} - {{oneUser.login}}
                </button>
            </template>
        </div>
    </div>
</div>
</template>