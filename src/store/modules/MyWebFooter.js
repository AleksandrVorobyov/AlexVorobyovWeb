import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
    state: {
        footerInnerTitle: "За созданием сайта:",
        footerInnerSubTitle: "обращайтесь на ",
        footerInnerLink: "sasha89253215539@yandex.ru",
        footerTitle: '© 2020 — Воробьев Александр',
        footerSubTitle: 'Веб-разработчик из Москвы, занимаюсь версткой и созданием сайтов.',
    },
    getters: {
        footerInnerTitle(state) {
            return state.footerInnerTitle;
        },
        footerInnerSubTitle(state) {
            return state.footerInnerSubTitle;
        },
        footerInnerLink(state) {
            return state.footerInnerLink;
        },
        footerTitle(state) {
            return state.footerTitle;
        },
        footerSubTitle(state) {
            return state.footerSubTitle;
        },
    },
    actions: {
        footerSectionAnim() {
          gsap.registerPlugin(ScrollTrigger);
          gsap.from('.footer-wrap', {
            scrollTrigger: {
              trigger: '.footer',
              toggleActions: "restart pause play pause",
            },
            opacity: 0,
            y: 50,
            duration: 1.5,
          });
        },
        footerInnerSectionAnim() {
          gsap.registerPlugin(ScrollTrigger);
          gsap.from('.footer-inner-column', {
            scrollTrigger: {
              trigger: '.footer-inner',
              toggleActions: "restart pause play pause",
            },
            opacity: 0,
            y: 50,
            duration: 1.5,
          });
        },
      }
}