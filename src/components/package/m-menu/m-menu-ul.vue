<template>
    <ul class="menu-ul">
        <li v-for="(item, index) in ulData" :key="index">
            {{item.name}}
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
    padding: 15px 0;
    font-size: 14px;
    box-shadow: 10px 10px 5px #888888;
    li{
        @include ellipsis(100px, 150px);
        list-style: none;
        padding: 3px 15px;
    }
}
</style>
