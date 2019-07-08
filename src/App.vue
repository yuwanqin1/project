<template>
    <div id="app">
      <div v-if="index" class="router">
        <router-view/>
        <vue-particles/>
      </div>
      <div v-else class="app-content">
        <div class="button">
            <m-button @click="login" type="login" style="margin-right: 30px;">登陆</m-button>
            <m-button @click="login" type="register">注册</m-button>
        </div>
        <vue-particles/>
      </div>
      <div class="center-content"></div>
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
  /* 联合声明: test: string | number */
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
/* 宽高占满 */
// html,body,#app {
  $height-button: 50px;
#app {
  // display: flex;
  @include wh_100;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: url('~@/assets/img/img4.jpg');
  background-size: 100% 100%;
  .router{
    @include wh_100;
  }
  .app-content{
    @include flex_c;
    overflow: hidden;
    @include wh_100;
    #particles-js {
      @include wh_100;
      height: calc(100% - #{$height-button});
    }
    .button{
      @include flex_r;
      justify-content: flex-end;
      align-items: center;
      width: calc(100% - #{$height-button});
      height: $height-button;
    }
  }
}
.center-content{
  position: relative;
  width: 30%;
  height: 30%;
  border: 1px solid wheat;
  top: -70%;
  left: 34%;
  transform: skew(10deg);//div倾斜属性
  border-radius: 10%;
  box-shadow: 1px 0 10px 3px;  
  resize:both;//div是可以拖动右下角
  overflow:auto;
  &:hover{
    cursor: move;
    background: rgba(255, 255, 255, 0.3);
    outline: 1px solid aqua;
    height: 25%;
    transition: height 10s;
  }
}
html,body {
  @include flex_r;
  @include wh_100;
  margin: 0 ！;
  padding: 0;
  overflow: auto;
}
</style>
