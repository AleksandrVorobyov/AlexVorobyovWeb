import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default {
  state: {
    navLinks: [
      {
        link: "/",
        text: "Главная",
      },
      {
        link: "/project",
        text: "Работы",
      },
      {
        link: "/contact",
        text: "Контакты",
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
      document.getElementById("nav-burger-btn").classList.toggle("navigation__burger--active");
      document.getElementById("sidebar").classList.toggle("sidebar--active");
    },
  },
  actions: {
    navSectionAnim() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.navigation-wrap', {
        scrollTrigger: {
          trigger: '.navigation-wrap',
          toggleActions: "restart pause play pause",
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
    },
  },
}