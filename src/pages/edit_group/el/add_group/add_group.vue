
<script lang="ts" src="./add_group.ts"></script>

<template>
<div v-if="status.if_new_group_form">
    <div class="card">
        <div class="card-header">
            Добавить новую группу
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
                <button @click="fAddGroup" type="button" class="btn btn-primary">Добавить группу</button>
            </form>
        </div>
    </div>
</div>
</template>