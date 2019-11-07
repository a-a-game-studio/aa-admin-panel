
<script lang="ts" src="./one_enum.ts"></script>

<template>

<div v-if="status.id_enum_selected && one.enum">
    <div class="card">
        <div class="card-header">
            Редактировать данные группы
        </div>
        <div class="card-body">
            <form>
                <div class="form-enum">
                    <span>Псевдоним:</span>
                    <input @change="fChangeAlias" type="text" class="form-control" :value="one.enum.alias" placeholder="Ввведите псевдоним">
                </div>
                <div class="form-enum">
                    <span>Имя:</span>
                    <input @change="fChangeName" type="text" class="form-control" :value="one.enum.name" placeholder="Введите имя">
                </div>
                <div class="form-enum">
                    <span>Описание:</span>
                    <textarea @change="fChangeDescript" 
                        type="text" class="form-control" 
                        :value="one.enum.descript" 
                        placeholder="Ввведите описание"
                    ></textarea>
                </div>
                <button @click="fSaveEnum()" type="button" class="btn btn-primary">Сохранить</button>
            </form>
        </div>
    </div>
</div>
</template>