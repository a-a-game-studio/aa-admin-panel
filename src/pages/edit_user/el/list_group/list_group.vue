
<script lang="ts" src="./list_group.ts"></script>

<template>
<div v-if="list.group && list.user_group && status.id_user_selected">
    <div class="card">
        <div class="card-header">
            Список групп
        </div>
        <div class="card-body">
            <template v-for="oneGroup in list.group">
                <div class="row" style="padding-top:10px;padding-botton:10px">

                    <!-- Чекбокс для добавления пользователя в группу -->
                    <div class="col-sm-2">
                        <button v-if="ixUserGroupByID[oneGroup.id]" 
                            @click="fDelUserFromGroup(status.id_user_selected, oneGroup.id)"
                            type="button" class="btn btn-info active"
                        >
                            Y
                        </button>
                        <button v-else
                            @click="fAddUserToGroup(status.id_user_selected, oneGroup.id)"
                            type="button" class="btn btn-outline-info"
                        >
                            X
                        </button>
                    </div>

                    <!-- Группа пользователей-->
                    <div class="col-sm-10">
                        <button v-if="oneGroup.id == status.id_group_selected" 
                            @click="fSelectGroup(oneGroup.id)"
                            type="button" class="btn btn-info active btn-block"
                        >
                            {{oneGroup.alias}} - {{oneGroup.name}}
                        </button>
                        <button v-else
                            @click="fSelectGroup(oneGroup.id)"
                            type="button" class="btn btn-outline-info btn-block"
                        >
                            {{oneGroup.alias}} - {{oneGroup.name}}
                        </button>
                    </div>

                </div>
            </template>
        </div>
    </div>
</div>
</template>