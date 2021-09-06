<template lang="pug">
.page__club(v-if="!nightMode")
.page__background
  canvas#snow
#page-link.page__link
  a(href="#navigation") {{ up }}
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
  background: url('https://firebasestorage.googleapis.com/v0/b/myportfolio-92ca1.appspot.com/o/snow-bg.jpg?alt=media&token=2bfb19e2-88fb-4b03-8b35-9dc50127aeb7') top left /cover no-repeat;

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
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 30%, var(--black) 100%);
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
  display: none;
  bottom: 150px;
  left: 60px;
  z-index: 500;
  transform: rotate(-90deg);
  animation: rocket 10s linear 1s infinite alternate;
  opacity: 0;
  transition: opacity 0.5s linear;

  @media (min-width: 1170px) {
    display: block;
  }

  @media (min-width: 1400px) {
    bottom: 80px;
    left: 40px;
  }

  a {
    display: inline-block;
    font-size: 24px;
    font-weight: 700;
    font-family: var(--fontNeon);
    color: var(--var(--white));
    text-decoration: none;
    padding: 15px;
    background-color: var(--blueCyber);
    transition: color 0.4s linear;
    z-index: 15;
  }

  a:hover {
    color: var(--redCyber);
  }

  &::before {
    position: absolute;
    bottom: -9px;
    right: -145%;
    content: "";
    border-left: 36px solid var(--white);
    border-top: 36px solid transparent;
    border-bottom: 36px solid transparent;
    border-right: 36px solid transparent;
    transform: translateX(-100%);
    z-index: 10;
  }

  &::after {
    position: absolute;
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
  }
}
</style>