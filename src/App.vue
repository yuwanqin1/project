<template>
  <router-view id="app"/>
</template>

<style lang="scss">
@import "~@/theme/index.scss";
/* 宽高占满 */
// html,body,#app {
#app {
  display: flex;
  @include wh_100;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
html,body {
  margin: 0;
  padding: 0;
}
</style>
