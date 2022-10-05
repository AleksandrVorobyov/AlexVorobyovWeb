<template lang="pug">
aside#sidebar.sidebar
  .sidebar-wrap
    h2.sidebar__title {{ sidebarTitle }}
    .sidebar-wrap-bg
      img(
        :src="require('@/assets/img/' + sidebarBg.src)",
        :alt="sidebarBg.alt"
      )
    .sidebar__links
      ul.sidebar__links-col
        li.sidebar__links-item(v-for="item in sidebarLinks", :key="item") 
          router-link.sidebar__links-item-link(:to="item.link" @click="burgerActiveMet(), showDialog()")
            span {{ item.text }}
    .sidebar__social
      MyWebSocialIcon
    .sidebar__btn
      MyWebNightMode
</template>

<script>
import { mapGetters } from "vuex";
import MyWebSocialIcon from "./parts/MyWebSocialIcon.vue";
import MyWebNightMode from "./parts/MyWebNightMode.vue";

export default {
  components: {
    MyWebSocialIcon,
    MyWebNightMode,
  },
  computed: {
    ...mapGetters(["sidebarLinks", "sidebarTitle", "sidebarBg"]),
  },
  methods: {
    showDialog() {
      this.$store.commit('showDialog')
    },
    burgerActiveMet() {
      this.$store.commit('burgerActiveMet')
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    });
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 200px;
  left: -100%;
  width: 100%;
  height: calc(100% - 200px);
  z-index: 500;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
  transition: left 2s ease 0s;
}

.sidebar--active {
  left: 0;
}

.sidebar-wrap {
  position: relative;
  padding: 60px 20px;
  width: 100%;
  height: 100vh;
  background: rgba(73, 73, 73, 0.3);
  background-blend-mode: color-dodge;
}

.sidebar-wrap-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  overflow: hidden;
  animation: sidebar-bg 40s linear 0s infinite alternate;
  z-index: -10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.sidebar__title {
  font-size: 40px;
  font-family: var(--fontNeon);
  font-weight: 400;
  color: var(--white);
  text-align: center;
  margin-bottom: 30px;
}

.sidebar__btn .night-sun {
  position: relative;
  top: 0;
  left: 0;
}

.sidebar__links {
  margin-bottom: 30px;
}

.sidebar__links-col {
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar__links-item {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px var(--redCyber), 0px 0px 20px var(--redCyber),
    0px 0px 30px var(--redCyber);
}

.sidebar__links-item + .sidebar__links-item {
  margin-top: 30px;
}

.sidebar__links-item-link {
  display: flex;
  padding: 10px;
  width: 100%;
  background: var(--redCyber50);
  text-decoration: none;
  font-size: 26px;
  line-height: 30px;
  font-family: var(--fontNeon);
  font-weight: 400;
  color: var(--white);
}

.sidebar__social {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>