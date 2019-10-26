
<script lang="ts" src="./page_edit_user.ts"></script>

<template>
<div id="app">
    <aa-header></aa-header>
    <div class="container-fluid" v-if="status.is_init">
        <br/>
        
        <div class="row">
            <div class="col-sm-12">
                <div class="alert alert-info" role="alert">
                    <h1>Редактирование пользователей</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <pnl-user-pagination></pnl-user-pagination>
            </div>
            <div class="col-sm-6">
                <pnl-user-pagination class="float-right"></pnl-user-pagination>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-3">
                <list-user ></list-user>
            </div>
            <div class="col-sm-3">
                <one-user></one-user>
                <add-user></add-user>
            </div>
            <div class="col-sm-3">
                <one-group></one-group>
            </div>
            <div class="col-sm-3">
                <list-group></list-group>
            </div>
        </div>
    </div>
</div>
</template>
