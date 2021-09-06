<template lang="pug">
#page-card
  main
    my-web-card-body
  footer
    my-web-footer-inner
</template>

<script>
import MyWebCardBody from "../components/MyWebCardBody.vue";
import MyWebFooterInner from "../components/MyWebFooterInner.vue";

export default {
  name: "Card",
  components: {
    MyWebCardBody,
    MyWebFooterInner,
  },
};
</script>
