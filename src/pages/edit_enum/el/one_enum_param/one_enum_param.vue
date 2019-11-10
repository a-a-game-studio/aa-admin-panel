
<script lang="ts" src="./one_enum_param.ts"></script>

<template>
<div v-if="status.id_enum_param_selected && one.enum_param">
    <div class="card">
        <div class="card-header">
            Редактировать данные ENUM параметра
        </div>
        <div class="card-body">
            <form>
                <div class="form-enum">
                    <span>Псевдоним:</span>
                    <input @change="fChangeAlias" type="text" class="form-control" :value="one.enum_param.k" placeholder="Ввведите псевдоним">
                </div>
                <div class="form-enum">
                    <span>Имя:</span>
                    <input @change="fChangeName" type="text" class="form-control" :value="one.enum_param.name" placeholder="Введите имя">
                </div>
                <div class="form-enum">
                    <span>Значение:</span>
                    <input @change="fChangeVal" type="number" class="form-control" :value="one.enum_param.val" placeholder="Введите значение">
                </div>
                <div class="form-enum">
                    <span>Тип:</span>
                    <input @change="fChangeType" type="text" class="form-control" :value="one.enum_param.type" placeholder="Введите тип">
                </div>
                <div class="form-enum">
                    <span>Описание:</span>
                    <textarea @change="fChangeDescript" 
                        type="text" class="form-control"
                        :value="one.enum_param.descript" 
                        placeholder="Введите описание"
                    ></textarea>
                </div>
                <div class="form-enum">
                    <span>Арг. 1:</span>
                    <input @change="fChangeArg1" type="text" class="form-control" :value="one.enum_param.arg1" placeholder="Введите аргумент 1">
                </div>
                <div class="form-enum">
                    <span>Арг. 2:</span>
                    <input @change="fChangeArg2" type="text" class="form-control" :value="one.enum_param.arg2" placeholder="Введите аргумент 2">
                </div>
                <div class="form-enum">
                    <span>Арг. 3:</span>
                    <input @change="fChangeArg3" type="text" class="form-control" :value="one.enum_param.arg3" placeholder="Введите аргумент 3">
                </div>
                <br/>
                <button @click="fSaveEnumParam()" type="button" class="btn btn-primary">Сохранить</button>
                <button @click="fDelEnumParam(one.enum_param.id)" type="button" class="btn btn-danger float-right">Удалить</button>
            </form>
        </div>
    </div>
</div>
</template>
</template>