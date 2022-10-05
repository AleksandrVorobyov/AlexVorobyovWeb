import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default {
  state: {
    myEmail: "sasha89253215539@yandex.ru",
    header: {
      mySkills: [
        "Html/Pug, Css/Scss/Less, Javascript/Typescript/Vue",
        "Pixel perfect, полное соответствие макету.",
        "Верстаю с сеткой или без.",
        "Адаптивная верстка под мобильные устройства.",
        "С Bootstrap и без него.",
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
      headerTextBtn: {
        btnTimeline: {
          text: "Познакомиться",
          id: "headerTextBtnTimeline",
          type: "button",
        },
        btnContact: {
          text: "Контакты",
          id: "headerTextBtnContact",
          type: "button",
          link: "/contact",
          class: "button--inner"
        },
      },
      headerBgBtn: {
        id: "headerBgBtn",
        type: "button",
        link: "/project",
        text: "Смотреть работы",
      },
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
      neonHeaderTitleFirst: `<span>Ал</span>ексан<span>д</span>р`,
      neonHeaderTitleSecond: `Вор<span>обь</span>ев`,
      neonHeaderTitleBgFirst: `Чт<span>о</span> я ум<span>е</span>ю:`,
      neonHeaderTitleBgSecond: `На св<span>язи</span>:`,
    }
  },
  getters: {
    header(state) {
      return state.header;
    },
    myEmail(state) {
      return state.myEmail;
    },
  },
  actions: {
    headerSectionAnim() {
      if (window.innerWidth >= 768) {
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
      }
    },
  }
};
