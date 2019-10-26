
<script lang="ts" src="./page_index.ts"></script>

<template>
<div id="app">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4">
                <pnl-menu v-if="status.is_login"></pnl-menu>
            </div>
            <div class="col-sm-4">
            </div>
            <div class="col-sm-4"></div>
        </div>
    </div>
</div>
</template>
