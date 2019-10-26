
<script lang="ts" src="./page_edit_group.ts"></script>

<template>
<div id="app">
    <aa-header></aa-header>
    <div class="container-fluid" v-if="status.is_init">
        <br/>
        
        <div class="row">
            <div class="col-sm-12">
                <div class="alert alert-info" role="alert">
                    <h1>Редактирование групп пользователей</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <pnl-group-pagination></pnl-group-pagination>
            </div>
            <div class="col-sm-6">
                <pnl-group-pagination class="float-right"></pnl-group-pagination>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-3">
                <list-group></list-group>
            </div>
            <div class="col-sm-3">
                <one-group></one-group>
                <add-group></add-group>
            </div>
            <div class="col-sm-3">
                <one-ctrl-access></one-ctrl-access>
                <add-ctrl-access></add-ctrl-access>
            </div>
            <div class="col-sm-3">
                <list-ctrl-access></list-ctrl-access>
            </div>
        </div>
    </div>
</div>
</template>
