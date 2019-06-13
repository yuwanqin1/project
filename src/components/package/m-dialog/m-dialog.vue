<template>
    <div class="dialog">
        <div class="dialog-mask"></div>
        <div class="dialog-content" ref="dialog" :style="styles">
            <div class="title">
                <div>标题</div>
                <div @click="maskClick"><i class="el-icon-close"/></div>
            </div>
            <div class="bottom">
                <el-button @click="maskClick">取消</el-button>
                <el-button type="success">确定</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
@Component({
    components: {}
})
/* 引用组件必须定义dialogShow */
export default class Dialog extends Vue{
    @Prop({ default: 'dialogShow' }) showName!: string
    @Prop({ default: () => { return { height: '500px', width: '500px' } }}) styles!: object
    dialogTop!: string
    dialogLeft!: string
    screen: any = { height: document.body.clientHeight, width: document.body.clientWidth }
    maskClick () {
        this.$parent[this.showName] = false
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
            border-bottom: $border;
            div:nth-of-type(1){
                display: flex;
                align-items: center;
                width: 80%;
                height: 100%;
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
            align-items: flex-end;
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
