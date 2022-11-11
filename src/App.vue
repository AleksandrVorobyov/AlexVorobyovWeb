<template lang="pug">
#page.page
  my-web-preloader
  my-web-page-back
  notification(v-show="notification.active")
  router-view
</template>

<script>
import { mapGetters } from "vuex";
import MyWebPageBack from "./components/MyWebPageBack.vue";
import MyWebPreloader from "./components/MyWebPreloader.vue";

export default {
  components: {
    MyWebPageBack,
    MyWebPreloader,
  },
  computed: {
    ...mapGetters(["notification"]),
  },
  mounted() {
    window.scrollTo(0, 0);
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
