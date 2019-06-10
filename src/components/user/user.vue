<template>
    <div class="user">
        user
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class User extends Vue {

}
</script>

<style lang="scss" scope>
.user{
    width: 100px;
    height: 100px;
    background: green;
}
</style>
