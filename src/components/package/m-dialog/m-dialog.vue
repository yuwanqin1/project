<template>
    <div class="dialog" v-show="show">
        <div class="dialog-mask"></div>
        <div class="dialog-content" ref="dialog" :style="styles">
            <div class="title">
                <div>
                    <slot name="title" title="标题">
                        <i class="iconfont icon-weibiaoti9"/>
                    </slot>
                </div>
                <div @click="maskClick">
                    <i class="iconfont icon-chacha1"/>
                </div>
            </div>
            <div class="content">
                <slot name="content"/>
            </div>
            <div class="bottom">
                <slot name="button">
                    <m-button @click="maskClick">取消</m-button>
                    <m-button type="success">确定</m-button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import mButton from '@/components/package/m-button/m-button.vue'

/* 定义接口 */
interface types { [key: string]: string }

@Component({
    components: { mButton }
})
/* 引用组件必须定义dialogShow */
export default class Dialog extends Vue{
    /* 重点知识:解决$refs访问时警告 */
    $refs!: { dialog: HTMLElement }
    @Prop({ default: 'router' }) path!: string
    @Prop({ default: 'dialogShow' }) showName!: string
    /* 重点知识:通过接口解决键值对类型 */
    @Prop({ default: () => { return { height: '500px', width: '500px' } }}) styles!: types

    dialogTop!: string
    dialogLeft!: string
    show: boolean = true
    screen: any = { height: document.body.clientHeight, width: document.body.clientWidth }

    maskClick () {
        /* this.$parent.dialogShow = false:
        这是直接修改父组件里控制dialog显示隐藏属性
        但是ts语法不允许这样操作,所以暂时放弃 */
        if (this.path === 'router') this.$router.go(-1)
        this.$emit('close')
    }
    dialogDosition () {
        this.$refs.dialog.style.top = (this.screen.height - parseInt(this.styles.height)) / 2 + 'px'
        this.$refs.dialog.style.left = (this.screen.width - parseInt(this.styles.width)) / 2 + 'px'
    }
    mounted () {
        this.dialogDosition()
        /* 给window挂onresize方法动态改变screen的值 */
        window.onresize = () => {
            return (() => {
                this.screen = { height: document.body.clientHeight, width: document.body.clientWidth }
                this.$nextTick(() => { this.dialogDosition() })
            })()
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@/theme/index.scss";
@import "~@/theme/themeColor.scss";

$title-hight: 50px;
.border-bottom{ border-bottom: $border; }

.dialog{
    position: absolute;
    .dialog-content{
        position: fixed;
        background: white;
        border-radius: 2%;
        z-index: 50002;
        .title{
            @include flex_r;
            justify-content: space-between;
            height: $title-hight;
            width: 100%;
            @extend .border-bottom;
            div:nth-of-type(1){
                display: flex;
                align-items: center;
                width: 80%;
                height: 100%;
                .iconfont{
                    font-size: 30px;
                }
            }
            div:nth-of-type(2){
                @include flex_cc;
                width: 10%;
                height: 100%;
                border-left: $border;
                &:hover{
                    border-radius: 0 10px 0 0;
                    background: #e7eaf6;
                    box-shadow: -1px 1px 1px #dddddd;                    
                }
            }
        }
        .bottom{
            position: absolute;
            bottom: 0;
            height: $title-hight;
            width: 95%;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;

        }
        .content{
            position: absolute;
            top: $title-hight;
            height: calc(100% - #{$title-hight * 2});
            @include w_100;
            @extend .border-bottom;
        }
    }
    .dialog-mask{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 50001;
        background: rgba(0,0,0,0.5);
    }
}
</style>
