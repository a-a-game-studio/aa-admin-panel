
<script lang="ts" src="./list_ctrl_access.ts"></script>

<template>
<div v-if="list.ctrl_access && list.access_group && status.id_group_selected">
    <div class="card">
        <div class="card-header">
            Список контроллеров
        </div>
        <div class="card-body">
            <button @click="fAddCtrlAccess" type="button" class="btn btn-outline-info btn-block"><i class="fas fa-plus fa-lg"></i></button>
            <template v-for="oneCtrlAccess in list.ctrl_access">
                <div class="row" style="padding-top:10px;padding-botton:10px">

                    <!-- Чекбокс для добавления контроллера группе -->
                    <div class="col-sm-2">
                        <button v-if="ixAccessGroupByID[oneCtrlAccess.id]" 
                            @click="fDelCtrlAccessFromGroup(oneCtrlAccess.id, status.id_group_selected)"
                            type="button" class="btn btn-info active"
                        >
                            Y
                        </button>
                        <button v-else
                            @click="fAddCtrlAccessToGroup(oneCtrlAccess.id, status.id_group_selected)"
                            type="button" class="btn btn-outline-info"
                        >
                            X
                        </button>
                    </div>

                    <!-- Контроллеры доступа-->
                    <div class="col-sm-10">
                        <button v-if="oneCtrlAccess.id == status.id_ctrl_access_selected" 
                            @click="fSelectCtrlAccess(oneCtrlAccess.id)"
                            type="button" class="btn btn-info active btn-block"
                        >
                            {{oneCtrlAccess.alias}} - {{oneCtrlAccess.name}}
                        </button>
                        <button v-else
                            @click="fSelectCtrlAccess(oneCtrlAccess.id)"
                            type="button" class="btn btn-outline-info btn-block"
                        >
                            {{oneCtrlAccess.alias}} - {{oneCtrlAccess.name}}
                        </button>
                    </div>

                </div>
            </template>
        </div>
    </div>
</div>
</template>