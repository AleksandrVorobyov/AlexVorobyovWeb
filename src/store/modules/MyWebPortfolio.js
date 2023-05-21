import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  state: {
    portfolio: {
      neonPortfolioTitle: "По<span>рт</span>фо<span>ли</span>о",
      btn: {
        type: "button",
        id: "portfolioBtn",
        text: "Открыть все работы",
        link: "/project",
      },
      cardsUrl:
        "https://myportfolio-92ca1-default-rtdb.europe-west1.firebasedatabase.app/cardsAll.json",
    },
    portfolioInner: {
      menu: [
        {
          id: "project",
          class: "checkbox-all",
          dataMenu: "all",
          text: "Все работы",
          labelClass: "checked all",
          data: "all",
        },
        {
          id: "html",
          class: "checkbox-html",
          dataMenu: "html",
          text: "HTML/CSS",
          labelClass: "html",
          data: "html",
        },
        {
          id: "less",
          class: "checkbox-less",
          dataMenu: "less",
          text: "HTML/LESS",
          labelClass: "less",
          data: "less",
        },
        {
          id: "scss",
          class: "checkbox-scss",
          dataMenu: "scss",
          text: "HTML/SCSS",
          labelClass: "scss",
          data: "scss",
        },
        {
          id: "pug",
          class: "checkbox-pug",
          dataMenu: "pug",
          text: "PUG/SCSS",
          labelClass: "pug",
          data: "pug",
        },
        {
          id: "js",
          class: "checkbox-js",
          dataMenu: "js",
          text: "JS",
          labelClass: "js",
          data: "js",
        },
        {
          id: "vue",
          class: "checkbox-vue",
          dataMenu: "vue",
          text: "Vue",
          labelClass: "vue",
          data: "vue",
        },
      ],
    },
    portfolioAll: [],
    dropdownPortfolio: {
      text: "Все работы",
      class: "checkbox-all",
      labelClass: "checked all",
    },
    dropHidden: true,
    portfolioNavHidden: true,
    portfolioInnerFilter: "all",
    portfolioAllFilter: [],
  },
  getters: {
    portfolio(state) {
      return state.portfolio;
    },
    portfolioAll(state) {
      return state.portfolioAll;
    },
    portfolioInner(state) {
      return state.portfolioInner;
    },
    dropdownPortfolio(state) {
      return state.dropdownPortfolio;
    },
    dropHidden(state) {
      return state.dropHidden;
    },
    portfolioNavHidden(state) {
      if (window.screen.width >= 1170) {
        return (state.portfolioNavHidden = true);
      } else {
        return (state.portfolioNavHidden = false);
      }
    },
    portfolioInnerFilter(state) {
      return state.portfolioInnerFilter;
    },
    portfolioAllFilter(state) {
      return state.portfolioAllFilter;
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
    mousedownSlide(state, event) {
      event.target.style.cursor = "grab";
    },
    mouseupSlide(state, event) {
      event.target.style.cursor = "default";
    },
    dropdown(state, event) {
      state.dropHidden = !state.dropHidden;
    },
    checkForFilter(state) {
      if (state.portfolioInnerFilter != "all") {
       state.portfolioAllFilter = [...state.portfolioAll].filter((item) => {
         return item.allMenuClass.includes(state.portfolioInnerFilter);
       });
      } else {
        state.portfolioAllFilter = state.portfolioAll;
      }
    },
  },
  actions: {
    portfolioSectionAnim() {
      if (window.innerWidth >= 768) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".portfolio__title", {
          keyframes: [
            {
              opacity: 0,
              y: 50,
              duration: 0,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
            },
          ],
          scrollTrigger: {
            trigger: ".portfolio__title",
            toggleActions: "play play play pause",
          },
        });

        gsap.to(".portfolio__btn", {
          keyframes: [
            {
              opacity: 0,
              y: 50,
              duration: 0,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
            },
          ],
          scrollTrigger: {
            trigger: ".portfolio__btn",
            toggleActions: "play play play pause",
          },
        });
      }
    },
    portfolioInnerSectionAnim() {
      if (window.innerWidth >= 768) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".portfolio__title", {
          keyframes: [
            {
              opacity: 0,
              y: 50,
              duration: 0,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
            },
          ],
          scrollTrigger: {
            trigger: ".portfolio__title",
            toggleActions: "play play play pause",
          },
        });

        gsap.to(".portfolio__nav", {
          keyframes: [
            {
              opacity: 0,
              y: 50,
              duration: 0,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
            },
          ],
          scrollTrigger: {
            trigger: ".portfolio__nav",
            toggleActions: "play play play pause",
          },
        });
      }
    },
    cardAnim() {
      if (window.innerWidth >= 768) {
        gsap.registerPlugin(ScrollTrigger);
        let allCards = gsap.utils.toArray(".card");
        gsap.to(allCards, {
          keyframes: [
            {
              opacity: 0,
              y: 50,
              duration: 0,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
            },
          ],
          scrollTrigger: {
            trigger: allCards,
            start: "-1000",
            end: "500",
          },
        });
      }
    },
    async loadCards({ state, commit, dispatch }) {
      await dispatch("workWithBackendData", {
        method: "GET",
        url: state.portfolio.cardsUrl,
      }).then((data) => {
        state.portfolioAll = data;
        state.portfolioAll.forEach((item, index) => {
          item.idx = index;
        });
      });

      await commit("checkForFilter");

      if (document.querySelector(".portfolio__nav")) {
        await document
          .querySelectorAll(".portfolio__nav label")
          .forEach((item) => {
            if (
              item.querySelector("input").getAttribute("data-menu") ===
              state.portfolioInnerFilter
            ) {
              item.classList.add("checked");
            } else {
              item.classList.remove("checked");
            }
          });
      }
    },
    getCheck({ state, commit }, event) {
      state.portfolioInnerFilter = event.target.getAttribute("data-menu");
      document.querySelectorAll(".portfolio__nav label").forEach((item) => {
        item.classList.remove("checked");
      });
      event.target.closest("label").classList.add("checked");
      new Promise((resolve, reject) => {
        state.portfolioAllFilter = null;
        resolve();
      }).then(() => {
        commit("checkForFilter");
      });
    },
    dropdownOption({ state, commit }, event) {
      const newDrop = event.target.getAttribute("data-menu");
      const inner = state.portfolioInner.menu.find(
        (e) => e.dataMenu === newDrop
      );
      state.dropdownPortfolio.text = inner.text;
      state.dropdownPortfolio.class = inner.class;
      state.dropdownPortfolio.labelClass = inner.labelClass;
      state.dropHidden = !state.dropHidden;
      state.portfolioInnerFilter = inner.dataMenu;
      commit("checkForFilter");
    },
  },
};
