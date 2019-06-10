<template>
  <div class="index">
    <div class="index-title">
      <div class="index-menu">
        <div v-for="(menu, index) in menuData" :key="index">
          <m-menu :menuData="menu" @clickMenu="clickMenu"/>
        </div>
      </div>
      <div class="index-user">
        <m-menu-title :titleData="titleData"></m-menu-title>
      </div>
    </div>
    <div class="index-content">
      <transition name="el-zoom-in-top">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
/* import userTile from '@/assets/img/img1.jpg' */
import { Component, Prop, Vue } from 'vue-property-decorator'
import mMenu from '@/components/package/m-menu/m-menu.vue'
import mMenuTitle from '@/components/package/m-menu/m-menu-title.vue'

@Component({
  components: { mMenu, mMenuTitle }
})
export default class Index extends Vue {
  menuData: any = [
    { name: '首页', path: '/' },
    { name: '用户', path: 'user' },
    { name: '首页', path: '/' }
  ]
  titleData: any = {
    id: 1,
    name: '用户名',
    icon: 'img5.jpg',
    content: [
      { name: '我的', type: 1 },
      { name: '设置wwwwwwwwwwwwwwwwwwwwww', type: 2 },
      { name: '资料', type: 2 }
    ]
  }
  clickMenu (data: any) {
    this.$router.push({
      path: data.path
    })
  }
}
</script>

<style lang="scss" scope>
@import "~@/theme/index.scss";
@import "~@/theme/themeColor.scss";
$height: 50px;
$menu-width: 250px;
.index{
    @include flex_c;
    @include wh_100;
    background-color:rgba(201, 238, 240, 0.3);
     /* z-index: -1;
    filter: blur(1px);
    background: url("../assets/img/back.jpg") no-repeat;
    background-size: 100% 100%; */
    .index-title{
        @include flex_r;
        @include w_100;
        height: $height;
        min-height: $height;
        background: white;
        justify-content: space-around;
        .index-menu{
          @include flex_r;
          width: 85%;
          height: 100%;
          div{
            height: 100%;
          }
        }
        .index-user{
          @include flex_r;
          @include h_100;
          width: 8%;
          min-width: 150px;
        }
    }
    .index-content{
        @include flex_r;
        @include w_100;
        height: calc(100% - $height - 10px);
        overflow: auto;
    }
}
</style>
