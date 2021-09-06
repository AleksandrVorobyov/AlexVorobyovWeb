<template lang="pug">
#page-project-body
  main
    my-web-portfolio-inner
  footer
    my-web-footer
</template>

<script>
import MyWebPortfolioInner from "../components/MyWebPortfolioInner.vue";
import MyWebFooter from "../components/MyWebFooter.vue";

export default {
  name: "ProjectBody",
  components: {
    MyWebPortfolioInner,
    MyWebFooter,
  },
};
</script>