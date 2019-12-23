
<script lang="ts" src="./pnl_user.ts"></script>

<template>
<div>
    <div v-if="one.user" class="card">
        <div class="card-header">
            Добро пожаловать: {{ one.user.name }}
        </div>
        <div class="card-body">
            <div>Ваше ID: {{ one.user.id }}</div>
            <div>Ваш login: {{ one.user.login }}</div>
            <div>Ваше имя:  {{ one.user.name }}</div>
        </div>
        <div class="card-footer">
            <button @click="fLogout()" type="button" class="btn btn-primary">Выход</button>
        </div>
    </div>
</div>
</template>