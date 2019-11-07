
<script lang="ts" src="./add_enum_param.ts"></script>

<template>
<div v-if="status.if_new_enum_param_form">
    <div class="card">
        <div class="card-header">
            Добавить новый контроллер
        </div>
        <div class="card-body">
            <form>
                <div class="form-enum">
                    <span>Login:</span>
                    <input v-model="sAlias" type="text" class="form-control" placeholder="Псевдоним">
                </div>
                <div class="form-enum">
                    <span>Имя:</span>
                    <input v-model="sName" type="text" class="form-control" placeholder="Ввведите имя">
                </div>
                <div class="form-enum">
                    <span>Пароль:</span>
                    <textarea v-model="sDescript" class="form-control" placeholder="Описание"></textarea>
                </div>
                <button @click="fAddEnumParam" type="button" class="btn btn-primary">Добавить контроллер</button>
            </form>
        </div>
    </div>
</div>
</template>