<template>
  <div id="sidebar">
    <Avatar></Avatar>
    <div class="icons">
      <router-link class="icon" title="笔记" to="/note/1">
        <Icon name="file"/>
      </router-link>
      <router-link class="icon" title="笔记本" to="/notebooks">
        <Icon name="folder"/>
      </router-link>
      <router-link class="icon" title="回收站" to="/trash/2">
        <Icon name="trash"/>
      </router-link>
    </div>
    <div class="logout icon" @click="onLogout">
      <Icon name="exit"/>
    </div>
  </div>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Avatar from "@/components/Avatar.vue";

@Component({
  components: {Avatar}
})
export default class Sidebar extends Vue {

}

</script>

<style lang="scss" scoped>


#sidebar {
  position: relative;
  width: 56px;
  height: 100%;
  //text-align: center;
  background-color: #2c333c;

  .icons {
    margin-top: 15px;
    text-align: center;

  }

  .icons > .icon {
    padding: 12px 0;
    display: block;
    //border: 1px solid green;
  }

  .icons .router-link-active {
    background-color: #5e6266;
  }


  .logout {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  .icon {
    color: #fff;

  }

}


</style>
