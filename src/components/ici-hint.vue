<template>
    <div class="fms-input-hint" :class="{'ici-hint-show':value}">
        <slot></slot>
        <!--加载图标-->
        <div v-show="loading">
            <div class="fms-input-hint-loading">
                <ici-loading></ici-loading>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ici-hint",
        data() {
            return {

            };
        },
        props:{
            value:Boolean,
            loading:Boolean,
        },
        mounted() {
        },
        beforeDestroy() {
        },
        methods: {},
        components: {}
    }
</script>

<style scoped lang="less">
    .fms-input-hint {
        position: absolute;
        left: 0;
        visibility: hidden;
        opacity: 0;
        transition: all .3s;
        width: 100%;
        max-height: 300px;
        overflow: auto;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, .2);
        background-color: #ffffff;
        border-radius: 0 0 2px 2px;
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
        z-index: 1;
        margin: 2px 0px;
        &.ici-hint-show{
            visibility: visible;
            opacity: 1;
        }
        .fms-input-hint-loading {
            text-align: center;
            padding: 10px;
        }
    }
</style>
