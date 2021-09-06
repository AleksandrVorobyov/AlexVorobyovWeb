<template lang="pug">
#page-contact
  header
    my-web-navigation
    my-web-sidebar
  main
    my-web-contact
  footer
    my-web-footer
</template>

<script>
import MyWebNavigation from "../components/MyWebNavigation.vue";
import MyWebSidebar from "../components/MyWebSidebar.vue";
import MyWebContact from "../components/MyWebContact.vue";
import MyWebFooter from "../components/MyWebFooter.vue";

export default {
  name: "Home",
  components: {
    MyWebNavigation,
    MyWebSidebar,
    MyWebContact,
    MyWebFooter,
  },
};
</script>