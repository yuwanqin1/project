<template>
    <div class="menu" @click="clickMenu">
        <div class="menu-name">{{menuData.name}}</div>
    </div>
</template>

<script>
export default {
  name: 'm-menu',
  props: {
    menuData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    clickMenu () {
      this.$emit('clickMenu', this.menuData)
    }
  }
}
</script>

<style lang="scss" scope>
@import "~@/theme/index.scss";
@import "~@/theme/themeColor.scss";
$menu-height: 50px;
.menu{
    @include flex_cc;
    @include wh_100;
    @include font;
    background: $bcak2;
    .menu-name{
        height: $menu-height;
        line-height: $menu-height;
        text-align: center;
        font-size: 16px;
        padding: 0px 10px;
        @include ellipsis;
    }
    &:hover{
        cursor: pointer;
        color: aqua;
        background: white;
    }
    &:hover::after{
        @include afters(#2382ee);
    }
}
</style>
