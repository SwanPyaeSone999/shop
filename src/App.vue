<template>
  <div>
    <!-- <Menubar></Menubar> -->
    <Menubar></Menubar>
    <router-view></router-view>
  </div>
</template>

<script>
import Menubar from "./components/Menubar";
export default {
  components: { Menubar },
  name: "App",
};
</script>

<style>
</style>