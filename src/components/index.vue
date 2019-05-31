<template>
  <div class="index">
    <div class="index-title"></div>
    <div class="index-content"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Index extends Vue {
  // @Prop() private msg!: string;
}
</script>

<style lang="scss" scope>
@import "~@/theme/index.scss";
$height: 50px;
.index{
    @include flex_c;
    @include wh_100;
    .index-title{
        @include w_100;
        height: $height;
        background: red;
    }
    .index-content{
        @include w_100;
        height: calc(100% - $height);
        background: #dddddd;
    }
}
</style>
