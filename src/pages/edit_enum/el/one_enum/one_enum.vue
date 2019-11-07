
<script lang="ts" src="./one_enum.ts"></script>

<template>

<div v-if="status.id_enum_selected && one.enum">
    <div class="card">
        <div class="card-header">
            Редактировать данные ENUM
        </div>
        <div class="card-body">
            <form>
                <div class="form-enum">
                    <span>Псевдоним:</span>
                    <input @change="fChangeAlias" type="text" class="form-control" :value="one.enum.k" placeholder="Ввведите псевдоним">
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
                <div class="form-enum">
                    <span>Путь 1:</span>
                    <input @change="fChangeName" type="text" class="form-control" :value="one.enum.path1" placeholder="Введите путь 1">
                </div>
                <div class="form-enum">
                    <span>Путь 2:</span>
                    <input @change="fChangeName" type="text" class="form-control" :value="one.enum.path2" placeholder="Введите путь 2">
                </div>
                <div class="form-enum">
                    <span>Путь 3:</span>
                    <input @change="fChangeName" type="text" class="form-control" :value="one.enum.path3" placeholder="Введите путь 3">
                </div>
                <br/>
                <button @click="fSaveEnum()" type="button" class="btn btn-primary">Сохранить</button>
            </form>
        </div>
    </div>
</div>
</template>