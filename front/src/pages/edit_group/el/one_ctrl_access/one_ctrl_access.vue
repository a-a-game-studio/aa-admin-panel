
<script lang="ts" src="./one_ctrl_access.ts"></script>

<template>
<div v-if="status.id_ctrl_access_selected && one.ctrl_access">
    <div class="card">
        <div class="card-header">
            Редактировать данные контроллера
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <span>Псевдоним:</span>
                    <input @change="fChangeAlias" type="text" class="form-control" :value="one.ctrl_access.alias" placeholder="Ввведите псевдоним">
                </div>
                <div class="form-group">
                    <span>Имя:</span>
                    <input @change="fChangeName" type="text" class="form-control" :value="one.ctrl_access.name" placeholder="Введите имя">
                </div>
                <div class="form-group">
                    <span>Описание:</span>
                    <textarea @change="fChangeDescript" 
                        type="text" class="form-control" 
                        :value="one.ctrl_access.descript" 
                        placeholder="Введите описание"
                    ></textarea>
                </div>
                <button @click="fSaveCtrlAccess()" type="button" class="btn btn-primary">Сохранить</button>
            </form>
        </div>
    </div>
</div>
</template>
</template>