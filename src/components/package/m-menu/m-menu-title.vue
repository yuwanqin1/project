<template>
    <div class="menu-title">
        <img class="title-img" :src="imgs" alt="头像">
        <div class="title-user" @click="showI = !showI" @mouseleave="showI = true">
            <div class="title">
                {{titleData.name}}
                <i v-if="showI" class="iconfont icon-xiangshangzhanhang"/>
                <i v-else class="iconfont icon-xiangxiazhanhang"/>
                <div v-if="!showI" class="title-ul">
                    <m-menu-ul :ul-data="titleData.content"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch, Emit } from 'vue-property-decorator'
import mMenuUl from './m-menu-ul.vue'
/* 必须要加这个 */
@Component({
  components: { mMenuUl }
})
export default class MMenuTitle extends Vue {
 @Prop({ default: () => {} }) titleData:any
 /* ts引入图片 */
  imgs:any = require(`@/assets/img/${this.titleData.icon}`)
  showI: boolean = false
}
</script>

<style lang="scss" scope>
@import '~@/theme/index.scss';
.menu-title{
    $user: 50px;
    @include flex_r;
    @include wh_100;
    .title-user{
        @include w_100;
        height: $user;
        .title{
            @include flex_rc;
            @include wh_100;
            @include font;
            font-size: 18px;
            .title-ul{
                position: absolute;
                top: 50px;
                right: 50px;
            }
        }
    }
    .title-img{
        width: $user;
        border-radius: 50%;
    }
}
</style>
