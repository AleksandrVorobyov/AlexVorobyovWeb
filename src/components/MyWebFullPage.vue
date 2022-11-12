<template lang="pug">
section.full-page(@click="fullPageRemove($event)")
  .full-page-item
    img
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "full-page-section",
  setup() {
    const store = useStore();
    return {
      fullPageRemove: (event) => store.commit("fullPageRemove", event),
    };
  },
};
</script>

<style lang="scss" scoped>
.full-page {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000a1;
  z-index: 300;
  transform: scale(0.5);
  opacity: 0;
  transition: all 0.5s linear;
  pointer-events: none;
  z-index: 1000;
}

.full-page.active {
  transform: scale(1);
  opacity: 1;
  pointer-events: all;
}

.full-page-item {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  cursor: zoom-out;

  @media (min-width: 768px) {
    padding: 50px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

// -------------night---------------
.night .full-page {
  .full-page-wrap {
    background-color: var(--yellowcolor);
  }

  .full-page__title h2 span {
    color: var(--yellowcolor);
  }

  .full-page__desc {
    border-bottom-color: var(--yellowcolor);
  }

  .full-page__img + .full-page__img {
    border-top-color: var(--yellowcolor);
  }
}
// -------------night---------------
</style>