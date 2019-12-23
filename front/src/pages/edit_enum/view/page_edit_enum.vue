
<script lang="ts" src="./page_edit_enum.ts"></script>

<template>
<div id="app">
    <aa-header></aa-header>
    <div class="container-fluid" v-if="status.is_init">
        <br/>
        
        <div class="row">
            <div class="col-sm-12">
                <div class="alert alert-info" role="alert">
                    <h1>Редактирование дерева типов</h1>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-3">
                <list-enum></list-enum>
            </div>
            <div class="col-sm-3">
                <one-enum></one-enum>
            </div>
            <div class="col-sm-3">
                <list-enum-param></list-enum-param>
            </div>
            <div class="col-sm-3">
                <one-enum-param></one-enum-param>
            </div>
        </div>
    </div>
</div>
</template>
