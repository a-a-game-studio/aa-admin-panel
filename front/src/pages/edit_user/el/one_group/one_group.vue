
<script lang="ts" src="./one_group.ts"></script>

<template>
<div v-if="status.id_group_selected && one.group">
    <div class="card">
        <div class="card-header">
            Информация о группе пользователей
        </div>
        <div class="card-body">
            <div>
                <span><b>Псевдоним группы:</b></span>
                <span>{{one.group.alias}}</span>
            </div>
            <div>
                <span><b>Имя группы:</b></span>
                <span>{{one.group.name}}</span>
            </div>
            <div>
                <span><b>Описание:</b></span>
                <span>{{one.group.descript}}</span>
            </div>
        </div>
    </div>
</div>
</template>