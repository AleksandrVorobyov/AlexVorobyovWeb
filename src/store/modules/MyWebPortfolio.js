import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  state: {
    portfolioAll: [],
    activeCard: {},
    projectSlide: {
      perPage: 1,
      rewind: true,
      speed: 800,
      classes: {
        arrows: "splide__arrows your-class-arrows",
        arrow: "splide__arrow your-class-arrow",
        prev: "splide__arrow--prev carousel-project__btn-prev",
        next: "splide__arrow--next carousel-project__btn-next",
      },
      pagination: false,
      gap: 10,
      fixedHeight: 750,
    },
    neonPortfolioTitle: "По<span>рт</span>фо<span>ли</span>о",
    portfolioInnerMenu: [
      {
        id: "project",
        class: "checkbox-all",
        dataMenu: "project",
        text: "Все работы",
        labelClass: "checked all",
      },
      {
        id: "html",
        class: "checkbox-html",
        dataMenu: "html",
        text: "HTML/CSS",
        labelClass: "html",
      },
      {
        id: "less",
        class: "checkbox-less",
        dataMenu: "less",
        text: "HTML/LESS",
        labelClass: "less",
      },
      {
        id: "scss",
        class: "checkbox-scss",
        dataMenu: "scss",
        text: "HTML/SCSS",
        labelClass: "scss",
      },
      {
        id: "pug",
        class: "checkbox-pug",
        dataMenu: "pug",
        text: "PUG/SCSS",
        labelClass: "pug",
      },
      {
        id: "js",
        class: "checkbox-js",
        dataMenu: "js",
        text: "JS",
        labelClass: "js",
      },
      {
        id: "vue",
        class: "checkbox-vue",
        dataMenu: "vue",
        text: "Vue",
        labelClass: "vue",
      },
    ],
    localActive: true,
    paginationPrev: "Предыдущий проект",
    paginationNext: "Следующий проект",
    dropdownPortfolio: {
      text: "Все работы",
      class: "checkbox-all",
      labelClass: "checked all",
    },
    dropHidden: true,
    portfolioNavHidden: true,
    slideCardKey: 0,
  },
  getters: {
    localActive(state) {
      return state.localActive;
    },
    portfolioAll(state) {
      return state.portfolioAll;
    },
    activeCard(state) {
      return state.activeCard;
    },
    projectSlide(state) {
      return state.projectSlide;
    },
    neonPortfolioTitle(state) {
      return state.neonPortfolioTitle;
    },
    portfolioInnerMenu(state) {
      return state.portfolioInnerMenu;
    },
    paginationPrev(state) {
      return state.paginationPrev;
    },
    paginationNext(state) {
      return state.paginationNext;
    },
    dropdownPortfolio(state) {
      return state.dropdownPortfolio;
    },
    dropHidden(state) {
      return state.dropHidden;
    },
    portfolioNavHidden(state) {
      if (window.screen.width >= 1170) {
        return state.portfolioNavHidden = true
      } else {
        return state.portfolioNavHidden = false
      }
    },
    slideCardKey(state) {
      return state.slideCardKey;
    },
  },
  mutations: {
    randColor(state, payload) {
      const cardBg = payload.item;
      let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256),
        background = "#" + r.toString(16) + g.toString(16) + b.toString(16);
      cardBg.style.borderColor = background;
      cardBg.querySelector(
        ".card__text"
      ).style.borderTop = `6px solid ${background}`;
    },
    findCard(state, payload) {
      const newCard = state.portfolioAll.find(
        (e) => e.cardId === payload.cardId
      );
      state.localActive = false;
      state.activeCard = newCard;
    },
    async loadCards(state) {
      const res = await fetch(
        "https://myportfolio-92ca1-default-rtdb.europe-west1.firebasedatabase.app/cardsAll.json"
      );
      state.portfolioAll = await res.json();
      state.portfolioAll.forEach((item, index) => {
        item.idx = index
      })
    },
    getCheck(_, event) {
      const navPort = document.querySelector(".portfolio__nav");
      navPort.querySelectorAll("label").forEach((item) => {
        item.classList.remove("checked");
      });
      event.target.closest("label").classList.add("checked");
    },
    async pushInServeActiveCard(state) {
      const data = state.activeCard;
      const url =
        "https://myportfolio-92ca1-default-rtdb.europe-west1.firebasedatabase.app/activeCard/0.json";
      const responsedel = await fetch(url, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("activeCard", JSON.stringify(data));
    },
    loadActiveCard(state, payload) {
      state.activeCard = JSON.parse(localStorage.getItem("activeCard"));
    },
    prevProject(state) {
      const thisCard = state.activeCard.idx;
      if (thisCard > 0) {
        const newCard = state.portfolioAll.find(
          (e) => e.idx === thisCard - 1
        );
        return (state.activeCard = newCard);
      } else {
        const newCard = state.portfolioAll.find(
          (e) => e.idx === state.portfolioAll.length - 1
        );
        return (state.activeCard = newCard);
      }
    },
    nextProject(state) {
      const thisCard = state.activeCard.idx;
      if (state.portfolioAll.length > thisCard + 1) {
        const newCard = state.portfolioAll.find(
          (e) => e.idx === thisCard + 1
        );
        return (state.activeCard = newCard);
      } else {
        const newCard = state.portfolioAll.find((e) => e.idx === 0);
        return (state.activeCard = newCard);
      }
    },
    mousedownSlide(state, event) {
      event.target.style.cursor = "grab";
    },
    mouseupSlide(state, event) {
      event.target.style.cursor = "default";
    },
    dropdown(state, event) {
      state.dropHidden = !state.dropHidden;
    },
    dropdownOption(state, event) {
      const newDrop = event.target.getAttribute("data-menu");
      const inner = state.portfolioInnerMenu.find(
        (e) => e.dataMenu === newDrop
      );
      state.dropdownPortfolio.text = inner.text;
      state.dropdownPortfolio.class = inner.class;
      state.dropdownPortfolio.labelClass = inner.labelClass;
      state.dropHidden = !state.dropHidden;
    },
    slideUpdate(state) {
      state.slideCardKey += 1;
    },
  },
  actions: {
    portfolioSectionAnim() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to('.portfolio__title', {
        keyframes: [
          {
            opacity: 0,
            y: 50,
            duration: 0,
          }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
          }
        ],
        scrollTrigger: {
          trigger: '.portfolio__title',
          toggleActions: "restart pause play pause",
        },
      })

      gsap.to('.portfolio__nav-bottom', {
        keyframes: [
          {
            opacity: 0,
            y: 50,
            duration: 0,
          }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
          }
        ],
        scrollTrigger: {
          trigger: '.portfolio__nav-bottom',
          toggleActions: "restart pause play pause",
        },
      })
    },
    portfolioInnerSectionAnim() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to('.portfolio__title', {
        keyframes: [
          {
            opacity: 0,
            y: 50,
            duration: 0,
          }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
          }
        ],
        scrollTrigger: {
          trigger: '.portfolio__title',
          toggleActions: "restart pause play pause",
        },
      })

      gsap.to('.portfolio__nav', {
        keyframes: [
          {
            opacity: 0,
            y: 50,
            duration: 0,
          }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
          }
        ],
        scrollTrigger: {
          trigger: '.portfolio__nav',
          toggleActions: "restart pause play pause",
        },
      })
    },
    cardAnim() {
      gsap.registerPlugin(ScrollTrigger);
      document.querySelectorAll(".card").forEach((item, index) => {
        gsap.to(item, {
          keyframes: [
            {
              opacity: 0,
              y: 50,
              duration: 0,
            }, {
              opacity: 1,
              y: 0,
              duration: 1.5,
            }
          ],
          scrollTrigger: {
            trigger: item,
            toggleActions: "restart pause play pause",
          },
        });
      })
    },
  },
};
