<template>
    <div id="app">
      <router-view v-if="index" class="router"/>
      <m-button v-else @click="login">登陆</m-button>
      <vue-particles></vue-particles>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from 'vue-property-decorator'
import mButton from '@/components/package/m-button/m-button.vue'
@Component({
  components: { mButton }
})
export default class App extends Vue {
  /* 通过控制index来判断用户是否登陆 */
  index: boolean = false
  login () {
    this.index = true
  }
  /* 通过Provide将退出暴露出去,实现退出登陆 */
  @Provide('outLogin')
  outLogin () {
    this.index = false
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
  .router{
    background: url('~@/assets/img/img4.jpg') no-repeat;
    background-size: 100% 100%;
  }
}
html,body {
  @include flex_r;
  @include wh_100;
  margin: 0 ;
  padding: 0;
  overflow: auto;
}
</style>
