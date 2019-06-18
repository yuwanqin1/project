<template>
    <div class="user">
        user修改测试vscdoe连接
        <el-button @click="click">测试</el-button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class User extends Vue {
    click () {
        console.log('测试')
    }
}
</script>

<style lang="scss" scope>
.user{
    width: 100px;
    height: 100px;
    background: green;
    color: red;
}
</style>
