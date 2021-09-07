<template lang="pug">
.page__club(v-if="!nightMode")
.page__background
  canvas#snow
#page-link.page__link
  button(@click="scrollToTop()", v-html="up")
</template>

<script>
import { mapGetters } from "vuex";
import { gsap } from "gsap";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["up", "pageBackImg", "nightMode"]),
  },
  mounted() {
    if (!this.nightMode) {
      this.createBg();
    }
  },
  created() {
    window.onscroll = function pageLinkScroll() {
      const pageLink = document.getElementById("page-link");
      if (window.pageYOffset > 150) {
        pageLink.style.opacity = "1";
      } else {
        pageLink.style.opacity = "0";
      }
    };
  },
  methods: {
    createBg() {
      this.$store.dispatch("createBg");
    },
    scrollToTop() {
      this.$store.commit("scrollToTop");
    },
  },
};
</script>

<style lang="scss">
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
  background: url("https://firebasestorage.googleapis.com/v0/b/myportfolio-92ca1.appspot.com/o/snow-bg.jpg?alt=media&token=2bfb19e2-88fb-4b03-8b35-9dc50127aeb7")
    top left / cover no-repeat;

  @media (min-width: 1170px) {
    &::before {
      position: fixed;
      top: 0px;
      left: 0%;
      content: "";
      height: 100%;
      width: 150px;
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
      z-index: 50;
    }

    &::after {
      position: fixed;
      top: 0px;
      right: 0%;
      content: "";
      height: 100%;
      width: 150px;
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
      z-index: 50;
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

  @media (min-width: 720px) {
    animation: rocket 10s linear 1s infinite alternate;
    transform: rotate(-90deg);
    right: 60px;
    bottom: 150px;
  }

  @media (min-width: 1170px) {
    left: 60px;
    right: auto;
  }

  @media (min-width: 1400px) {
    bottom: 80px;
    left: 40px;
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

    @media (min-width: 720px) {
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

  &::before {
    position: absolute;
    display: none;
    bottom: -9px;
    right: -145%;
    content: "";
    border-left: 36px solid var(--yellowcolor);
    border-top: 36px solid transparent;
    border-bottom: 36px solid transparent;
    border-right: 36px solid transparent;
    transform: translateX(-100%);
    z-index: 10;
    cursor: pointer;

    @media (min-width: 720px) {
      display: block;
    }
  }

  &::after {
    position: absolute;
    display: none;
    bottom: 0;
    left: -50%;
    content: "";
    height: 0;
    width: 40px;
    border-bottom: 40px solid var(--redCyber);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    transform: rotate(90deg) translate(-7px, -3px);
    z-index: -1;
    cursor: pointer;

    @media (min-width: 720px) {
      display: block;
    }
  }
}
</style>