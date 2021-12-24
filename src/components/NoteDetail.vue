<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">

import {Vue, Component} from "vue-property-decorator";

@Component
export default class NoteDetail extends Vue {
  msg: number = 12345
}
</script>

<style scoped>

</style>
