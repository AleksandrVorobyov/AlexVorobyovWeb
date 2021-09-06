<template lang="pug">
section#navigation.navigation
  .big-container
    my-web-night-mode
    transition(name="slide-down", mode="out-in", appear)
      .navigation-wrap
        h1.navigation__logo
          router-link.logo(to="/") А<span>В</span>
        nav.navigation__link-nav
          ul
            li(v-for="item in navLinks", :key="item")
              router-link.nav(:to="item.link", :data-hover="item.text") {{ item.text }}
        .navigation__social
          my-web-social-icon
        button#nav-burger-btn.navigation__burger(
          type="button",
          @click="burgerActiveMet(), showDialog()"
        )
          span
</template>

<script>
import MyWebSocialIcon from "./parts/MyWebSocialIcon.vue";
import MyWebNightMode from "./parts/MyWebNightMode.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    MyWebSocialIcon,
    MyWebNightMode,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["navLinks"]),
  },
  mounted() {},
  methods: {
    burgerActiveMet() {
      this.$store.commit("burgerActiveMet");
    },
    showDialog() {
      this.$store.commit("showDialog");
    },
  },
};
</script>

<style lang="scss">
.navigation {
  position: relative;
  padding-top: 50px;
  height: 200px;
  z-index: 500;

  @media (min-width: 768px) {
    padding-top: 75px;
    height: auto;
  }

  @media (min-width: 1170px) {
    background: linear-gradient(
        90deg,
        hsla(0, 0%, 20%, 0.3),
        hsla(0, 0%, 40%, 0.5)
      );
    padding: 75px 0px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 30%, var(--var(--black)) 100%);
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      var(--redCyber) 100%
    );
    z-index: -1;
  }
}

.navigation-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding-bottom: 50px;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1170px) {
    padding: 0;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border: none;
  }
}

.navigation__logo {
  display: flex;
  justify-content: center;
}

.logo {
  position: relative;
  display: inline-block;
  font-size: 72px;
  font-weight: 400;
  font-family: var(--fontNeon);
  color: var(--white);
  text-decoration: none;
  transition: 0.8s ease-in-out;
  text-shadow: 0 0 5px var(--redCyber), 0 0 10px var(--redCyber),
    0 0 20px var(--redCyber), 0 0 40px var(--redCyber), 0 0 80px var(--redCyber);
  z-index: 10;

  &:hover {
    text-shadow: 0 0 10px var(--redCyber), 0 0 20px var(--redCyber),
      0 0 40px var(--redCyber), 0 0 80px var(--redCyber),
      0 0 120px var(--redCyber);
  }

  &::after {
    position: absolute;
    content: "";
    bottom: -7px;
    left: -3px;
    width: 100%;
    border-bottom: 7px solid var(--redCyber);
    z-index: -1;
  }

  @media (min-width: 600px) {
    font-size: 82px;
  }

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media (min-width: 1170px) {
    font-weight: 700;
    font-family: var(--fontNeon);
    margin-bottom: 0px;
    font-size: 52px;
  }
}

.logo:hover span {
  transition: all 0.5s linear;
  display: inline-block;
  transform: rotate(15deg) translate(8px, 4px);
  color: #0b3960;
}

.navigation__link-nav {
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
  }
}

.nav {
  display: inline-block;
  position: relative;
  font-size: 20px;
  font-family: var(--fontNeon);
  color: var(--white);
  font-weight: bold;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  border-bottom: 5px solid transparent;
  z-index: 5;
  margin-bottom: 50px;
  text-shadow: 0 0 5px var(--redCyber), 0 0 10px var(--redCyber),
    0 0 20px var(--redCyber), 0 0 40px var(--redCyber);

  &:after {
    position: absolute;
    content: "";
    bottom: -7px;
    left: -1px;
    width: 0;
    border-bottom: 7px solid var(--redCyber);
    transition: 0.5s linear;
  }

  &:hover {
    color: var( --blueCyber);
  }

  &:hover:after {
    width: 100%;
  }

  &:active:after {
    width: 100%;
  }

  @media (min-width: 1170px) {
    margin-bottom: 0;
  }
}

.router-link-active.nav {
  color: var( --blueCyber);
  border-bottom: 7px solid var(--redCyber);

  &:after {
    width: 100%;
  }
}

.nav:not(.nav--active):hover:after {
  max-width: 100%;
}

.navigation__link-nav ul {
  display: flex;
  justify-content: center;
  transform: translateY(5px);
  margin: 0;
}

.navigation__link-nav li {
  margin-right: 70px;
  list-style-type: none;
  transition: 0.5s ease-in-out;

  &:last-child {
    margin-right: 0;
  }
}

.navigation__link-nav a {
  font-size: 36px;
  z-index: 5;

  @media (min-width: 1170px) {
    font-size: 22px;
  }
}

.navigation__social {
  margin-bottom: 50px;
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
  z-index: 5;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1170px) {
    border-bottom: 5px solid var(--redCyber);
    margin-bottom: 0;
  }

  a {
    position: relative;
    margin-right: 30px;
    color: var(--black);
    transition: 0.5s ease-in-out;
    z-index: 5;

    @media (min-width: 1170px) {
      margin-right: 20px;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .fa-2x {
    font-size: 4em;
    color: var(--white);
    text-shadow: 0 0 5px var(--redCyber), 0 0 10px var(--redCyber),
      0 0 20px var(--redCyber), 0 0 40px var(--redCyber),
      0 0 80px var(--redCyber);
    transition: 0.8s ease-in-out;

    @media (min-width: 1170px) {
      font-size: 2em;
    }

    &:hover {
      color: var( --blueCyber);
    }
  }
}

.navigation__burger {
  position: relative;
  display: block;
  width: 70px;
  height: 60px;
  padding: 10px;
  background: var(--redCyber);
  border: 3px solid var(--white);
  cursor: pointer;
  overflow: hidden;
  z-index: 100;
  border-radius: 3px;
  outline: none;

  &::before {
    position: absolute;
    top: 10px;
    left: 10px;
    height: 4px;
    width: calc(100% - 20px);
    content: "";
    background: var(--white);
    border-radius: 3px;
    transition: top 0.4s linear 0s, transform 0.4s linear 0s;
    pointer-events: none;
  }

  &::after {
    position: absolute;
    bottom: 10px;
    left: 10px;
    height: 4px;
    width: calc(100% - 20px);
    content: "";
    background: var(--white);
    border-radius: 3px;
    transition: bottom 0.4s linear 0s, transform 0.4s linear 0s;
    pointer-events: none;
  }

  span::before {
    position: absolute;
    top: 50%;
    left: 10px;
    height: 4px;
    width: calc(100% - 20px);
    content: "";
    transform: translateY(-50%);
    background: var(--white);
    border-radius: 3px;
    transition: opacity 0.4s linear 0s;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
}

.navigation__burger.navigation__burger--active {
  &::before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    transform-origin: center;
  }

  &::after {
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%) rotate(-45deg);
    transform-origin: center;
  }

  span::before {
    opacity: 0;
  }
}

.navigation .night-sun {
  display: none;
  top: 100px;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1170px) {
    top: 150px;
  }
}
</style>