import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import router from '@/router'
export default {
  state: {
    navLinks: [
      {
        link: "/",
        text: "Главная",
        type: "button",
        class: "navigation__menu-btn",
        id: "navigationMenuBtnMain"
      },
      {
        link: "/project",
        text: "Работы",
        type: "button",
        class: "navigation__menu-btn",
        id: "navigationMenuBtnProject"
      },
      {
        link: "/contact",
        text: "Контакты",
        type: "button",
        class: "navigation__menu-btn",
        id: "navigationMenuBtnContact"
      },
    ],
  },
  getters: {
    navLinks(state) {
      return state.navLinks
    },
  },
  mutations: {
    burgerActiveMet() {
      const burgernav = document.getElementById("nav-burger-btn")
      const navigation = document.getElementById("navigation")
      const sidebar = document.getElementById("sidebar")
      let navigationHeight = navigation.offsetHeight + 'px'
      if (!sidebar.classList.contains("sidebar--active")) {
        burgernav.classList.add("navigation__burger--active");
        sidebar.classList.add("sidebar--active");
        sidebar.style.top = navigationHeight
        sidebar.style.height = `calc(100% - ${navigationHeight})`
        return
      } else {
        burgernav.classList.remove("navigation__burger--active");
        sidebar.classList.remove("sidebar--active");
      }
    },
  },
  actions: {
    navSectionAnim() {
      if (window.innerWidth >= 768) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.navigation-wrap', {
          scrollTrigger: {
            trigger: '.navigation-wrap',
            toggleActions: "play play play pause",
          },
          keyframes: [
            {
              opacity: 0,
              y: -100,
              duration: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
            },
          ],
          ease: "power1.out",
        });
      }
    },
    getActiveNav({ state }) {
      let link = router.currentRoute.value.fullPath
      let activeLink = state.navLinks.find((e) => e.link === link)
      if (activeLink === undefined) {
        link = "/project"
        activeLink = state.navLinks.find((e) => e.link === link)
        return document.getElementById(activeLink.id).classList.add("btn-menu--active")
      }
      return document.getElementById(activeLink.id).classList.add("btn-menu--active")
    }
  },
}