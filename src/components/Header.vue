<template>
    <div class="header">
        <router-link to="mine" class="mine" tag="div">
            <i class="iconfont icon-list"></i>
        </router-link>
        <h1>云音乐</h1>
        <router-link to="search" class="search" tag="div">
            <i class="iconfont icon-search"></i>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "./../assets/style/variable.scss";
    .header {
        display: flex;
        height: 44px;
        background: $color-theme;
        color: #fff;
        h1 {
            line-height: 44px;
            flex: 1;
            text-align: center;
            font-size: 22px;
        }
        div {
            font-size: 22px;
            width: 44px;
            height: 44px;
            text-align: center;
            i {
                margin-top: 14px;
                font-size: 20px;
                display: inline-block;
            }
        }
    }
</style>
