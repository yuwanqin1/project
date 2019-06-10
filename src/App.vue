<template>
    <router-view id="app"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class App extends Vue {
  jump (data: any) {
    this.$router.push(data)
  }
}
</script>

<style lang="scss" scope>
/* 设置样式app.vue必须私有化:scope */
@import "~@/theme/index.scss";
// @import "~@/theme/common.scss";
/* 宽高占满 */
// html,body,#app {
#app {
  // display: flex;
  @include wh_100;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
html,body {
  display: flex;
  @include wh_100;
  margin: 0;
  padding: 0;
  overflow: auto;
}
</style>
