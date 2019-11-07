
<script lang="ts" src="./pnl_enum_pagination.ts"></script>

<template>
<div v-if="list.enum">
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
                <button type="button" class="css-btn-rl-margin btn btn-outline-info">
                    <span aria-hidden="true">&laquo;</span>
                </button>
            </li>
            <li v-for="page in 5" class="css-btn-rl-margin page-item">
                <button 
                    @click="fSelectUserListPage(1)"  
                    type="button" class="btn btn-outline-info"
                >
                    {{ page }}
                </button>
            </li>
            <li class="page-item">
                <button type="button" class="css-btn-rl-margin btn btn-outline-info">
                    <span aria-hidden="true">&raquo;</span>
                </button>
            
            </li>
        </ul>
    </nav>
</div>
</template>

<style scoped>
.css-btn-rl-margin{
    margin-right: 5px;
    margin-left: 5px;
}
</style>