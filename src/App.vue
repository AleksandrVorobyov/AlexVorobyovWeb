<template lang="pug">
#page.page
  my-web-preloader
  my-web-page-back
  my-web-notification
  router-view
</template>

<script>
import myWebPageBack from "./components/MyWebPageBack.vue";
import MyWebPreloader from "./components/MyWebPreloader.vue";
import MyWebNotification from "./components/parts/MyWebNotification.vue";

export default {
  components: {
    myWebPageBack,
    MyWebPreloader,
    MyWebNotification,
  },
};
</script>

<style lang="scss">
@import url("~@/assets/style/variables.css");
@import url("~@/assets/style/animation.css");
@import url("~@/assets/style/main.css");

/*
  @media (min-width: 480px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1170px) {

  }
*/
</style>
