
<script lang="ts" src="./add_user.ts"></script>

<template>
<div v-if="status.if_new_user_form">
    <div class="card">
        <div class="card-header">
            Добавить нового пользователя
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <span for="exampleInputEmail1">Login:</span>
                    <input v-model="sLogin" type="text" class="form-control" placeholder="Псевдоним">
                </div>
                <div class="form-group">
                    <span for="exampleInputPassword1">Имя:</span>
                    <input v-model="sName" type="text" class="form-control" placeholder="Ввведите имя">
                </div>
                <div class="form-group">
                    <span for="exampleInputPassword1">Пароль:</span>
                    <input v-model="sPswd" type="password" class="form-control" placeholder="Введите пароль">
                </div>
                <div class="form-group">
                    <span for="exampleInputPassword1">Повторить пароль:</span>
                    <input v-model="sPswdRepeat" type="password" class="form-control" placeholder="Повторите пароль">
                </div>
                <button @click="fAddUser" type="button" class="btn btn-primary">Добавить пользователя</button>
            </form>
        </div>
    </div>
</div>
</template>