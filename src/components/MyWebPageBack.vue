<template lang="pug">
.page__club(v-if="!nightMode")
.page__background
  canvas#snow
#page-link.page__link
  button(@click="scrollToTop()", v-html="up")
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "page-back-section",
  setup() {
    const store = useStore();
    const nightMode = computed(() => store.getters.nightMode);
    const createBg = () => store.dispatch("createBg");

    onMounted(() => {
      if (!nightMode.value) {
        createBg();
      }
    
      const pageLink = document.getElementById("page-link");
      pageLink.style.opacity = "0";

      window.onscroll = () => {
        if (window.pageYOffset > 150) {
          pageLink.style.opacity = "1";
        } else {
          pageLink.style.opacity = "0";
        }
      };
    });

    return {
      up: computed(() => store.getters.up),
      pageBackImg: computed(() => store.getters.pageBackImg),
      nightMode: nightMode,
      scrollToTop: () => store.dispatch("scrollToTop"),
    };
  },
};
</script>

<style lang="scss" scoped>
.page__club {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
}

.page__background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background: var(--pageBg) top left / cover no-repeat;

  @media (min-width: 1170px) {
    &::before,
    &::after {
      position: fixed;
      top: 0px;
      content: "";
      height: 100%;
      width: 150px;
      z-index: 50;
    }

    &::before {
      left: 0%;
      background: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(30%, rgba(255, 255, 255, 0)),
        to(var(--black))
      );
      background: -o-linear-gradient(
        bottom,
        rgba(255, 255, 255, 0) 30%,
        var(--black) 100%
      );
      background: linear-gradient(
        -90deg,
        rgba(255, 255, 255, 0) 30%,
        var(--black) 100%
      );
    }

    &::after {
      right: 0%;
      background: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(30%, rgba(255, 255, 255, 0)),
        to(var(--black))
      );
      background: -o-linear-gradient(
        bottom,
        rgba(255, 255, 255, 0) 30%,
        var(--black) 100%
      );
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 30%,
        var(--black) 100%
      );
    }
  }
}

.page__background-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
}

.page__link {
  position: fixed;
  right: 30px;
  bottom: 60px;
  z-index: 500;
  transition: opacity 0.5s linear;

  @media (min-width: 768px) {
    animation: rocket 10s linear 1s infinite alternate;
    transform: rotate(-90deg);
    right: 60px;
    bottom: 150px;
  }

  @media (min-width: 1170px) {
    left: 60px;
    right: auto;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
    font-weight: 700;
    font-family: var(--fontNeon);
    color: var(--white);
    text-decoration: none;
    padding: 15px;
    background: #80808080;
    transition: color 0.4s linear;
    z-index: 15;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid var(--redCyber);
    cursor: pointer;

    @media (min-width: 768px) {
      display: inline-block;
      width: auto;
      height: auto;
      border-radius: 0%;
      font-size: 24px;
      background: var(--blueCyber);
      border: 0px solid var(--grayBg);
    }
  }

  a:hover {
    color: var(--redCyber);
  }

  &::before,
  &::after {
    position: absolute;
    display: none;
    content: "";
    cursor: pointer;

    @media (min-width: 768px) {
      display: block;
    }
  }

  &::before {
    bottom: -10px;
    right: -145%;
    border-left: 36px solid var(--yellowcolor);
    border-top: 36px solid transparent;
    border-bottom: 36px solid transparent;
    border-right: 36px solid transparent;
    transform: translateX(-100%);
    z-index: 10;
  }

  &::after {
    bottom: 0;
    left: -50%;
    height: 0;
    width: 40px;
    border-bottom: 40px solid var(--redCyber);
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    transform: rotate(90deg) translate(-5px, -6px);
    z-index: -1;
  }
}
</style>