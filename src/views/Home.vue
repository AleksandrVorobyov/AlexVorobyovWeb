<template lang="pug">
#page-home
  header
    my-web-navigation 
    my-web-sidebar 
    my-web-header
    my-web-full-page
  main
    my-web-portfolio
    my-web-timeline
    my-web-contact
  footer
    my-web-footer
</template>

<script>
import MyWebNavigation from "../components/MyWebNavigation.vue";
import MyWebSidebar from "../components/MyWebSidebar.vue";
import MyWebHeader from "../components/MyWebHeader.vue";
import MyWebFullPage from "../components/MyWebFullPage.vue";
import MyWebPortfolio from "../components/MyWebPortfolio.vue";
import MyWebTimeline from "../components/MyWebTimeline.vue";
import MyWebContact from "../components/MyWebContact.vue";
import MyWebFooter from "../components/MyWebFooter.vue";

export default {
  name: "Home",
  components: {
    MyWebNavigation,
    MyWebSidebar,
    MyWebHeader,
    MyWebFullPage,
    MyWebPortfolio,
    MyWebTimeline,
    MyWebContact,
    MyWebFooter,
  },
};
</script>
