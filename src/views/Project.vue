<template lang="pug">
#page-project
  header
    my-web-navigation
    my-web-sidebar
    my-web-full-page
  router-view
</template>

<script>
import MyWebNavigation from "../components/MyWebNavigation.vue";
import MyWebSidebar from "../components/MyWebSidebar.vue";
import MyWebFullPage from "../components/MyWebFullPage.vue";

export default {
  name: "Project",
  components: {
    MyWebNavigation,
    MyWebSidebar,
    MyWebFullPage,
  },
};
</script>