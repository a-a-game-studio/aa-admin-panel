
<script lang="ts" src="./one_enum_param.ts"></script>

<template>
<div v-if="status.id_enum_param_selected && one.enum_param">
    <div class="card">
        <div class="card-header">
            Редактировать данные контроллера
        </div>
        <div class="card-body">
            <form>
                <div class="form-enum">
                    <span>Псевдоним:</span>
                    <input @change="fChangeAlias" type="text" class="form-control" :value="one.enum_param.alias" placeholder="Ввведите псевдоним">
                </div>
                <div class="form-enum">
                    <span>Имя:</span>
                    <input @change="fChangeName" type="text" class="form-control" :value="one.enum_param.name" placeholder="Введите имя">
                </div>
                <div class="form-enum">
                    <span>Описание:</span>
                    <textarea @change="fChangeDescript" 
                        type="text" class="form-control" 
                        :value="one.enum_param.descript" 
                        placeholder="Введите описание"
                    ></textarea>
                </div>
                <button @click="fSaveEnumParam()" type="button" class="btn btn-primary">Сохранить</button>
            </form>
        </div>
    </div>
</div>
</template>
</template>