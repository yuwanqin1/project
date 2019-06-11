<template>
    <ul class="menu-ul">
        <p>测试</p>
        <li v-for="(item, index) in ulData" :key="index">
            <i :class="`iconfont ${item.icon}`"/>{{item.name}}
        </li>
    </ul>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch, Emit } from 'vue-property-decorator'
@Component({})
export default class MMenuUl extends Vue {
    @Prop({ default: () => [] }) ulData: any
}
</script>

<style lang="scss" scoped>
@import "~@/theme/index.scss";
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
    }
    li{
        @include ellipsis(100px, 150px);
        list-style: none;
        padding: 3px 15px;
        &:hover{
            background: red
        }
    }
}
</style>
