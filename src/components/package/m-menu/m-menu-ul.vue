<template>
    <ul class="menu-ul">
        <p>菜单</p>
        <li v-for="(item, index) in ulData" :key="index" @click="menuClick(item)">
            <i :class="`iconfont ${item.icon}`" style="padding-right: 6px;"/>{{item.name}}
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch, Emit } from 'vue-property-decorator'
@Component({})
export default class MMenuUl extends Vue {
    @Prop({ default: () => [] }) ulData: any
    menuClick (data: any):void {
        this.$emit('menuClick', data)
    }
}
</script>

<style lang="scss" scoped>
@import "~@/theme/index.scss";
@import '~@/theme/themeColor.scss';
.menu-ul{
    @include wh_100;
    @include font;
    background: white;
    font-size: 14px;
    box-shadow: 1px 1px 3px #888888;
    p{
        padding: 6px 0 5px 5px;
        font-weight: bold;
        @include font;
        background: #dddddd
    }
    li{
        @include ellipsis(100px, 150px);
        list-style: none;
        padding: 3px 15px;
        &:hover{
            background: $bcak2
        }
    }
}
</style>
