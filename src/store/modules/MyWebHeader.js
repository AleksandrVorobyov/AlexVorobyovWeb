import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default {
  state: {
    mySkills: [
      "Html/Pug, Css/Scss/Less, Javascript/Typescript",
      "pixel perfect, полное соответствие макету.",
      "верстаю с сеткой или без.",
      "адаптивная верстка под мобильные устройства.",
      "с Bootstrap и без него.",
    ],
    mySkillsSub:
      "Верстальщик сайтов, Frontend-разработчик. Оперативная верстка. Работаю с соблюдением сроков и выполнением ТЗ.",
    mySkillsAvatar: [
      {
        text: "CSS",
        src: "css.png",
        alt: "css.png",
        classItem: "header__avatar_css",
      },
      {
        text: "HTML",
        src: "html.png",
        alt: "html.png",
        classItem: "header__avatar_html",
      },
      {
        text: "JS",
        src: "js.png",
        alt: "js.png",
        classItem: "header__avatar_js",
      },
    ],
    myEmail: "sasha89253215539@yandex.ru",
    cert: {
      rewind: true,
      speed: 800,
      perPage: 2,
      gap: 30,
      pagination: false,
      drag: false,
      classes: {
        arrows: "splide__arrows header__slide-row-btn",
        arrow: "splide__arrow header__slide-btn",
        prev: "splide__arrow--prev header__slide-btn-prev",
        next: "splide__arrow--next header__slide-btn-next",
      },
      arrowPath: "m15.5 0",
      breakpoints: {
        720: {
          perPage: 1,
        }
      }
    },
    certSlides: [
      {
        alt: 'cert-html',
        src: 'header/cert/html.webp',
      },
      {
        alt: 'cert-html-pro',
        src: 'header/cert/html-pro.webp',
      },
      {
        alt: 'cert-js',
        src: 'header/cert/js.webp',
      },
    ],
    neonHeaderTitleFirst: "<span>Ал</span>ексан<span>д</span>р",
    neonHeaderTitleSecond: "Вор<span>обь</span>ев",
    neonHeaderTitleBgFirst: "Чт<span>о</span> я ум<span>е</span>ю:",
    neonHeaderTitleBgSecond: "На св<span>язи</span>:",
  },
  getters: {
    mySkills(state) {
      return state.mySkills;
    },
    mySkillsSub(state) {
      return state.mySkillsSub;
    },
    mySkillsAvatar(state) {
      return state.mySkillsAvatar;
    },
    myEmail(state) {
      return state.myEmail;
    },
    cert(state) {
      return state.cert;
    },
    certSlides(state) {
      return state.certSlides;
    },
    neonHeaderTitleFirst(state) {
      return state.neonHeaderTitleFirst;
    },
    neonHeaderTitleSecond(state) {
      return state.neonHeaderTitleSecond;
    },
    neonHeaderTitleBgFirst(state) {
      return state.neonHeaderTitleBgFirst;
    },
    neonHeaderTitleBgSecond(state) {
      return state.neonHeaderTitleBgSecond;
    },
  },
  actions: {
    headerSectionAnim() {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.header__text',
          toggleActions: "play pause play pause",
        },
      });

      let headerTextItems = gsap.utils.toArray('.header__text > *')
      tl.from(headerTextItems[0], {
        opacity: 0,
        y: 100,
        duration: .5,
      })
      .from(headerTextItems[1], {
        opacity: 0,
        y: 100,
        duration: .5,
      })
      .from(headerTextItems[2], {
        opacity: 0,
        y: 100,
        duration: .5,
      })
      .from(headerTextItems[3], {
        opacity: 0,
        y: 100,
        duration: .5,
      })

      gsap.from('.header__avatar', {
        opacity: 0,
        y: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.header__avatar',
          toggleActions: "play pause play pause",
        },
      })

      gsap.from('.header__slide', {
        opacity: 0,
        y: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.header__slide',
          toggleActions: "play pause play pause",
        },
      })

      gsap.from('.header__bg-item', {
        opacity: 0,
        y: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.header__bg-item',
          toggleActions: "play pause play pause",
        },
      })
    },
  }
};
