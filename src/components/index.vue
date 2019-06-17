<template>
  <div class="index">
    <div class="index-title">
      <div class="index-menu">
        <div v-for="(menu, index) in menuData" :key="index">
          <m-menu :menuData="menu" @clickMenu="clickMenu"/>
        </div>
      </div>
      <div class="index-user">
        <m-menu-title @menuClick="menuClicks" :titleData="titleData"/>
      </div>
    </div>
    <div class="index-content">
      <transition name="el-zoom-in-top">
        <router-view/>
      </transition>
    </div>
    <m-dialog @close="closeDialog" path="" v-show="dialogShow" :styles="{height: '300px', width: '500px'}" @click="save">
      <template #title="scope">
        <div><i class="iconfont icon-weibiaoti9"/>登陆{{scope.title}}</div>
      </template>
      <template #content>
        <div class="dialog">
          <el-input v-model="user.name" placeholder="请输入账号">
            <template slot="prepend">账号:</template>
          </el-input>
          <el-input v-model="user.password" placeholder="请输入密码">
            <template slot="prepend">密码:</template>
          </el-input>
        </div>
      </template>
    </m-dialog>
  </div>
</template>

<script lang="ts">
/* import userTile from '@/assets/img/img1.jpg' */
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import mMenu from '@/components/package/m-menu/m-menu.vue'
import mMenuTitle from '@/components/package/m-menu/m-menu-title.vue'
import mDialog from '@/components/package/m-dialog/m-dialog.vue';

interface users {
  name: string,
  password: string
}

@Component({
  components: { mMenu, mMenuTitle, mDialog }
})
export default class Index extends Vue {
 /*ts监听
  @Watch('res')
  resChange(val: number, oldVal: number){
    console.log('监听:', val)
  } */
  dialogShow: boolean = false;
  menuData: any = [
    { name: '首页', path: '/' },
    { name: '用户', path: 'user' },
    { name: '首页', path: '/' }
  ]
  titleData: any = {
    id: 1,
    name: 'tom yu',
    icon: 'img5.jpg',
    content: [
      { type: 1, name: '我的', icon: 'icon-user' },
      { type: 2, name: '设置', icon: 'icon-icon--' },
      { type: 3, name: '切换', icon: 'icon-qiehuanyonghu' },
      { type: 4, name: '登陆', icon: 'icon-denglu' },
      { type: 5, name: '退出', icon: 'icon-tuichu' }
    ]
  }
  user: users = { name: '', password: '' }

  save () {
    let data = {
      names: 16 >= this.user.name.length && this.user.name.length >= 8, 
      passwords: 16 >= this.user.password.length && this.user.password.length >= 12
    }
    if (data.names && data.passwords){
      console.log('登陆成功')
    } else {
    this.$message.error(`${!data.names ? '账户' : '密码'}错误`)
    }
  }
  clickMenu (data: any) {
    this.$router.push({
      path: data.path
    })
  }
  menuClicks (data:any) {
    this.dialogShow = true
  }
  closeDialog () {
    this.dialogShow = false
  }
}
/* 
计算高度
height: calc(100% - #{$page-height}); 
*/
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
     /*filter: blur(1px);
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
          width: 88%;
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
    .dialog{
      @include flex_c;
      justify-content: space-around;
      @include wh_x(75%);
    }
}
</style>
