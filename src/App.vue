<template>
  <div id="app">
    <Sidebar>
    </Sidebar>
    <router-view></router-view>
    <div>

    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import Sidebar from "@/components/Sidebar.vue"

@Component({
  components: {
    Sidebar
  }
})
export default class App extends Vue {

}

</script>


<style>

html, body, #app {
  height: 100%;
}

body {
  text-align: center;
  margin-top: 60px;
  background-color: #eee;
}
</style>
