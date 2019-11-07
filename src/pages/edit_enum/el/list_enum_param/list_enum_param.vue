
<script lang="ts" src="./list_enum_param.ts"></script>

<template>
<div v-if="list.enum_param && status.id_enum_selected">
    <div class="card">
        <div class="card-header">
            Список ENUM параметров
        </div>
        <div class="card-body">
            <button @click="fAddEnumParam" type="button" class="btn btn-outline-info btn-block"><i class="fas fa-plus fa-lg"></i></button>
            <template v-for="oneEnumParam in list.enum_param">
                <div class="row" style="padding-top:10px;padding-botton:10px">

                    <!-- ENUM параметры-->
                    <div class="col-sm-10">
                        <button v-if="oneEnumParam.id == status.id_enum_param_selected" 
                            @click="fSelectEnumParam(oneEnumParam.id)"
                            type="button" class="btn btn-info active btn-block"
                        >
                            {{oneEnumParam.k}} - {{oneEnumParam.name}}
                        </button>
                        <button v-else
                            @click="fSelectEnumParam(oneEnumParam.id)"
                            type="button" class="btn btn-outline-info btn-block"
                        >
                            {{oneEnumParam.k}} - {{oneEnumParam.name}}
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