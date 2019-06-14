<template>
    <button class="m-button" @click="onClick" :disabled="disabled" :class="`${type} ${size}`">
        <slot/>
    </button>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator'
export default class MButton extends Vue{
    @Prop({ default: '' }) type!: string
    onClick (event: any) {
        this.$emit('click', event)
    }
}
</script>

<style lang="scss" scoped>
@import '~@/theme/m-button.scss'
</style>

