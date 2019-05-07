<template>
  <div class="tab">
    <router-link class="tab-item" to="recommend">
      <span>推荐</span>
    </router-link>
    <router-link class="tab-item" to="rank">
      <span>排行榜</span>
    </router-link>
    <router-link class="tab-item" to="singer">
      <span>歌手</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./../assets/style/variable.scss";
.tab {
  height: 44px;
  line-height: 44px;
  background: $color-theme;
  font-size: $font-size-medium;
  display: flex;
  .tab-item {
    flex: 1;
    text-align: center;
    span {
      color: #e4e4e4;
      display: inline-block;
      height: 36px;
    }
    &.router-link-active {
        span {
          font-weight: bold;
          color: $color-text-l;
          border-bottom: 2px solid $color-text-l;
        }
      }
  }
}
</style>
