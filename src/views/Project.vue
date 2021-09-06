<template lang="pug">
#page-project
  header
    my-web-navigation
    my-web-sidebar
  router-view
</template>

<script>
import MyWebNavigation from "../components/MyWebNavigation.vue";
import MyWebSidebar from "../components/MyWebSidebar.vue";

export default {
  name: "Project",
  components: {
    MyWebNavigation,
    MyWebSidebar,
  },
};
</script>