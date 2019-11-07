
<script lang="ts" src="./list_enum_param.ts"></script>

<template>
<div v-if="list.enum_param && list.access_enum && status.id_enum_selected">
    <div class="card">
        <div class="card-header">
            Список контроллеров
        </div>
        <div class="card-body">
            <button @click="fAddEnumParam" type="button" class="btn btn-outline-info btn-block"><i class="fas fa-plus fa-lg"></i></button>
            <template v-for="oneEnumParam in list.enum_param">
                <div class="row" style="padding-top:10px;padding-botton:10px">

                    <!-- Чекбокс для добавления контроллера группе -->
                    <div class="col-sm-2">
                        <button v-if="ixAccessEnumByID[oneEnumParam.id]" 
                            @click="fDelEnumParamFromEnum(oneEnumParam.id, status.id_enum_selected)"
                            type="button" class="btn btn-info active"
                        >
                            Y
                        </button>
                        <button v-else
                            @click="fAddEnumParamToEnum(oneEnumParam.id, status.id_enum_selected)"
                            type="button" class="btn btn-outline-info"
                        >
                            X
                        </button>
                    </div>

                    <!-- Контроллеры доступа-->
                    <div class="col-sm-10">
                        <button v-if="oneEnumParam.id == status.id_enum_param_selected" 
                            @click="fSelectEnumParam(oneEnumParam.id)"
                            type="button" class="btn btn-info active btn-block"
                        >
                            {{oneEnumParam.alias}} - {{oneEnumParam.name}}
                        </button>
                        <button v-else
                            @click="fSelectEnumParam(oneEnumParam.id)"
                            type="button" class="btn btn-outline-info btn-block"
                        >
                            {{oneEnumParam.alias}} - {{oneEnumParam.name}}
                        </button>
                    </div>

                </div>
            </template>
        </div>
    </div>
</div>
</template>