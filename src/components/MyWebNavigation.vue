<template lang="pug">
section#navigation.navigation(ref="topDiv")
  .big-container
    nightMode
    .navigation-wrap
      h1.navigation__logo
        router-link.logo(to="/", @click.native="scrollToTop()") А<span>В</span>
      nav.navigation__menu
        ul.navigation__menu-list
          li.navigation__menu-list-item(v-for="item in navLinks", :key="item")
            mainBtnMenu(
              :btnText="item.text",
              :btnType="item.type",
              :btnId="item.id",
              :btnClass="item.class",
              @clickAction="roadToPage(item.link)"
            )
      .navigation__social
        socialIcon
      button#nav-burger-btn.navigation__burger(
        type="button",
        @click="burgerActiveMet(), showDialog()"
      )
        span
</template>

<script>
import { mapGetters } from "vuex";
import mainBtnMenu from "./parts/mainBtnMenu.vue";
import socialIcon from "./parts/socialIcon.vue";
import nightMode from "./parts/nightMode.vue";

export default {
  components: {
    mainBtnMenu,
    socialIcon,
    nightMode,
  },
  computed: {
    ...mapGetters(["navLinks"]),
  },
  methods: {
    async roadToPage(link) {
      await this.$store.dispatch("roadToPage", link);
    },
    getActiveNav() {
      this.$store.dispatch("getActiveNav");
    },
    burgerActiveMet() {
      this.$store.commit("burgerActiveMet");
    },
    showDialog() {
      this.$store.commit("showDialog");
    },
    navSectionAnim() {
      this.$store.dispatch("navSectionAnim");
    },
    scrollToTop() {
      this.$store.dispatch("scrollToTop");
    },
  },
  mounted() {
    this.getActiveNav();
    this.navSectionAnim();
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  position: relative;
  padding: 35px 0px;
  z-index: 500;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 50px 0px;
  }

  @media (min-width: 1170px) {
    padding: 75px 0px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50px;
    left: 0;
    height: 50px;
    width: 100%;
    box-shadow: 0px -10px 15px var(--redCyber);
    z-index: -1;
  }
}

.navigation-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1170px) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border: none;
  }
}

.navigation__logo {
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }

  @media (min-width: 1170px) {
    margin-bottom: 0;
  }
}

.logo {
  position: relative;
  display: inline-block;
  font-size: 52px;
  line-height: 58px;
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

  @media (min-width: 768px) {
    font-size: 64px;
    line-height: 72px;
  }

  @media (min-width: 1170px) {
    font-weight: 700;
    font-family: var(--fontNeon);
  }
}

.logo:hover span {
  transition: all 0.5s linear;
  display: inline-block;
  transform: rotate(15deg) translate(8px, 4px);
  color: #0b3960;
}

.navigation__menu {
  display: none;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1170px) {
    margin-bottom: 0;
  }
}

.nav {
  display: inline-block;
  position: relative;
  padding: 15px 30px;
  font-size: 20px;
  line-height: 24px;
  font-family: var(--fontNeon);
  color: var(--white);
  font-weight: bold;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  background: var(--redCyber);
  border-radius: 10px;
  z-index: 5;
  overflow: hidden;

  &:after {
    position: absolute;
    content: "";
    bottom: 0px;
    left: 0px;
    width: 0;
    height: 7px;
    background: var(--blueCyber);
    transition: 0.5s linear;
  }

  &:hover {
    color: var(--blueCyber);
  }

  &:hover:after {
    width: 100%;
  }

  &:active:after {
    width: 100%;
  }
}

.router-link-active.nav {
  color: var(--blueCyber);

  &:after {
    width: 100%;
  }
}

.nav:not(.nav--active):hover:after {
  max-width: 100%;
}

.navigation__menu-list {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
}

.navigation__menu-list-item + .navigation__menu-list-item {
  margin-left: 35px;
}

.navigation__social {
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
  }
}

.navigation__burger {
  position: relative;
  display: block;
  width: 60px;
  height: 50px;
  padding: 10px;
  background: var(--redCyber);
  border: 2px solid var(--white);
  cursor: pointer;
  overflow: hidden;
  z-index: 100;
  border-radius: 3px;
  outline: none;

  &::before {
    position: absolute;
    top: 8px;
    left: 10px;
    height: 3px;
    width: calc(100% - 20px);
    content: "";
    background: var(--white);
    border-radius: 3px;
    transition: top 0.4s linear 0s, transform 0.4s linear 0s;
    pointer-events: none;
  }

  &::after {
    position: absolute;
    bottom: 8px;
    left: 10px;
    height: 3px;
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
    height: 3px;
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

  @media (min-width: 768px) {
    display: flex;
  }
}
</style>