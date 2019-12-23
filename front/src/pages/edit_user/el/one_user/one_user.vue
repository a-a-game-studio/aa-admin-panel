
<script lang="ts" src="./one_user.ts"></script>

<template>
<div v-if="status.id_user_selected && one.user">
    <div class="card">
        <div class="card-header">
            Редактировать данные пользователя
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <span>Login:</span>
                    <input disabled type="text" class="form-control" :value="one.user.login" placeholder="Псевдоним">
                </div>
                <div class="form-group">
                    <span>Имя:</span>
                    <input @change="fChangeName" type="text" class="form-control" :value="one.user.name" placeholder="Ввведите имя">
                </div>
                <button @click="fSaveUser()" type="button" class="btn btn-primary">Сохранить</button>
            </form>
        </div>
    </div>
</div>
</template>