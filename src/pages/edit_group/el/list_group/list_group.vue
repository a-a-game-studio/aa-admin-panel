
<script lang="ts" src="./list_group.ts"></script>

<template>
<div>
    <div class="card">
        <div class="card-header">
            Список групп
        </div>
        <div class="card-body">
            
            <button @click="fAddGroup" type="button" class="btn btn-outline-info btn-block"><i class="fas fa-plus fa-lg"></i></button>
            <template v-for="oneGroup in list.group">
                <button 
                    v-if="oneGroup.id == status.id_group_selected" 
                    @click="fSelectGroup(oneGroup.id)"  
                    type="button" class="btn btn-info active btn-block"
                >
                    {{oneGroup.alias}} - {{oneGroup.name}}
                </button>
                <button 
                    v-if="oneGroup.id != status.id_group_selected" 
                    @click="fSelectGroup(oneGroup.id)"
                    type="button" class="btn btn-outline-info btn-block"
                >
                    {{oneGroup.alias}} - {{oneGroup.name}}
                </button>
            </template>
        </div>
    </div>
</div>
</template>