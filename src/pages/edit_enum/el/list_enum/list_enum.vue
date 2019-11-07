
<script lang="ts" src="./list_enum.ts"></script>

<template>
<div>
    <div class="card">
        <div class="card-header">
            Список ENUM
        </div>
        <div class="card-body">
            
            <button @click="fAddEnum" type="button" class="btn btn-outline-info btn-block"><i class="fas fa-plus fa-lg"></i></button>
            <template v-for="oneEnum in list.enum">
                <div class="row" style="padding-top:10px;padding-botton:10px">
                    <div class="col-sm-10">
                        <button 
                            v-if="oneEnum.id == status.id_enum_selected" 
                            @click="fSelectEnum(oneEnum.id)"  
                            type="button" class="btn btn-info active btn-block"
                        >
                            {{oneEnum.k}} - {{oneEnum.name}}
                        </button>
                        <button 
                            v-if="oneEnum.id != status.id_enum_selected" 
                            @click="fSelectEnum(oneEnum.id)"
                            type="button" class="btn btn-outline-info btn-block"
                        >
                            {{oneEnum.k}} - {{oneEnum.name}}
                        </button>
                    </div>

                    <!-- Чекбокс для удаления параметра типа ENUM -->
                    <div class="col-sm-2">
                        <button 
                            @click="fDelEnumParam(oneEnumParam.id, status.id_enum_selected)"
                            type="button" class="btn btn-outline-danger"
                        >
                            X
                        </button>
                    </div>
                </div>
            </template>
        </div>
    </div>
</div>
</template>