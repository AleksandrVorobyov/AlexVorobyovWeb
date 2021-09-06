<template lang="pug">
router-link.button-02(:to="link") 
  span {{ text }}
</template>

<script>
export default {
  props: {
    link: String,
    text: String,
  },
};
</script>

<style lang="scss">
.button-02 {
  filter: hue-rotate(240deg);
}
</style>