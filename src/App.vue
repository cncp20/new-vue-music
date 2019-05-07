<template>
  <div id="app">
    <div id="nav">
      <m-header />
      <tab />
    </div>
    <keep-alive>
      <router-view class="content"/>
    </keep-alive>
  </div>
</template>
<script>
import MHeader from "@/components/Header.vue";
import Tab from "@/components/Tab.vue";
export default {
  components: {
    MHeader,
    Tab
  }
}
</script>
<style lang="scss">
@import './assets/style/index.scss';
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    flex: 1;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
  }
}
</style>
