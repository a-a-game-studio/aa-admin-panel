
<script lang="ts" src="./page_login.ts"></script>

<template>
<div id="app">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4">{{status.user_id}} {{status.token}}</div>
            <div class="col-sm-4">
                
                <pnl-user v-if="status.is_login"></pnl-user>
                <frm-login v-if="!status.is_login"></frm-login>
            </div>
            <div class="col-sm-4"></div>
        </div>
    </div>
</div>
</template>
