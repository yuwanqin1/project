<template>
    <button class="m-button" @click="onClick" :disabled="disabled" :class="`${type} ${size}`">
        <slot/>
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component({
    components: {}
})
export default class MButton extends Vue{
    @Prop({ default: '', validator: value => ['', 'text-ok', 'text-cancel', 'text-error', 'primary', 'warning', 'error', 'login', 'register'].indexOf(value) !== -1})
    type!: string
    @Prop({ default: '', validator: value => ['', 'small', 'large'].indexOf(value) !== -1 })
    size!: string
    @Prop({ default: false })
    disabled!: boolean
    onClick (event: any) {
        /* this.$emit('click', event) */
        this.click(event)
    }
    @Emit()
    click (data: any) {}
}
</script>

<style lang="scss" scoped>
@import '~@/theme/m-button.scss'
</style>

