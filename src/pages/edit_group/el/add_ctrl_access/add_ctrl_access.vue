
<script lang="ts" src="./add_ctrl_access.ts"></script>

<template>
<div v-if="status.if_new_ctrl_access_form">
    <div class="card">
        <div class="card-header">
            Добавить новый контроллер
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <span>Login:</span>
                    <input v-model="sAlias" type="text" class="form-control" placeholder="Псевдоним">
                </div>
                <div class="form-group">
                    <span>Имя:</span>
                    <input v-model="sName" type="text" class="form-control" placeholder="Ввведите имя">
                </div>
                <div class="form-group">
                    <span>Пароль:</span>
                    <textarea v-model="sDescript" class="form-control" placeholder="Описание"></textarea>
                </div>
                <button @click="fAddCtrlAccess" type="button" class="btn btn-primary">Добавить контроллер</button>
            </form>
        </div>
    </div>
</div>
</template>