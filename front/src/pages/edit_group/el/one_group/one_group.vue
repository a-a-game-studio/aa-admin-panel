
<script lang="ts" src="./one_group.ts"></script>

<template>

<div v-if="status.id_group_selected && one.group">
    <div class="card">
        <div class="card-header">
            Редактировать данные группы
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <span>Псевдоним:</span>
                    <input @change="fChangeAlias" type="text" class="form-control" :value="one.group.alias" placeholder="Ввведите псевдоним">
                </div>
                <div class="form-group">
                    <span>Имя:</span>
                    <input @change="fChangeName" type="text" class="form-control" :value="one.group.name" placeholder="Введите имя">
                </div>
                <div class="form-group">
                    <span>Описание:</span>
                    <textarea @change="fChangeDescript" 
                        type="text" class="form-control" 
                        :value="one.group.descript" 
                        placeholder="Ввведите описание"
                    ></textarea>
                </div>
                <button @click="fSaveGroup()" type="button" class="btn btn-primary">Сохранить</button>
            </form>
        </div>
    </div>
</div>
</template>