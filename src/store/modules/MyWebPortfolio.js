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
        link: "/project"
      }
    },
    portfolioInner: {
      menu: [
        {
          id: "project",
          class: "checkbox-all",
          dataMenu: "all",
          text: "Все работы",
          labelClass: "checked all",
          data: 'all',
        },
        {
          id: "html",
          class: "checkbox-html",
          dataMenu: "html",
          text: "HTML/CSS",
          labelClass: "html",
          data: 'html',
        },
        {
          id: "less",
          class: "checkbox-less",
          dataMenu: "less",
          text: "HTML/LESS",
          labelClass: "less",
          data: 'less',
        },
        {
          id: "scss",
          class: "checkbox-scss",
          dataMenu: "scss",
          text: "HTML/SCSS",
          labelClass: "scss",
          data: 'scss',
        },
        {
          id: "pug",
          class: "checkbox-pug",
          dataMenu: "pug",
          text: "PUG/SCSS",
          labelClass: "pug",
          data: 'pug',
        },
        {
          id: "js",
          class: "checkbox-js",
          dataMenu: "js",
          text: "JS",
          labelClass: "js",
          data: 'js',
        },
        {
          id: "vue",
          class: "checkbox-vue",
          dataMenu: "vue",
          text: "Vue",
          labelClass: "vue",
          data: 'vue',
        },
      ],
    },
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
    portfolioInnerFilter: "all",
    portfolioAllFilter: [],
  },
  getters: {
    portfolio(state) {
      return state.portfolio;
    },
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
    portfolioInner(state) {
      return state.portfolioInner;
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
    findCard(state, payload) {
      const newCard = state.portfolioAll.find(
        (e) => e.cardId === payload.cardId
      );
      state.localActive = false;
      state.activeCard = newCard;
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
    checkForFilter(state) {
      state.portfolioAllFilter = []

      if (state.portfolioInnerFilter != 'all') {
        state.portfolioAll.forEach((item) => {
          let thisItem = item;
          item.allMenuClass.forEach((elem) => {
            if (elem === state.portfolioInnerFilter) {
              state.portfolioAllFilter.push(thisItem)
            }
          })
        })
      } else {
        state.portfolioAllFilter = state.portfolioAll
      }
    }
  },
  actions: {
    portfolioSectionAnim() {
      if (window.innerWidth >= 768) {
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
            toggleActions: "play pause play pause",
          },
        })

        gsap.to('.portfolio__btn', {
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
            trigger: '.portfolio__btn',
            toggleActions: "play pause play pause",
          },
        })
      }
    },
    portfolioInnerSectionAnim() {
      if (window.innerWidth >= 768) {
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
            toggleActions: "play pause play pause",
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
            toggleActions: "play pause play pause",
          },
        })
      }
    },
    cardAnim() {
      if (window.innerWidth >= 768) {
        gsap.registerPlugin(ScrollTrigger);
        let allCards = gsap.utils.toArray('.card')
        gsap.to(allCards, {
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
            trigger: allCards,
            start: "-1000",
            end: "500",
          },
        });
      }
    },
    async loadCards({ state, commit }) {
      const res = await fetch(
        "https://myportfolio-92ca1-default-rtdb.europe-west1.firebasedatabase.app/cardsAll.json"
      );
      state.portfolioAll = await res.json();
      state.portfolioAll.forEach((item, index) => {
        item.idx = index
      })

      await commit('checkForFilter')

      if (document.querySelector('.portfolio__nav')) {
        await document.querySelectorAll('.portfolio__nav label').forEach((item) => {
          if (item.querySelector('input').getAttribute('data-menu') === state.portfolioInnerFilter) {
            item.classList.add('checked')
          } else {
            item.classList.remove('checked')
          }
        })
      }
      return
    },
    async pushInServeActiveCard({ state }) {
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
    getCheck({ state, commit }, event) {
      state.portfolioInnerFilter = event.target.getAttribute('data-menu');
      document.querySelectorAll('.portfolio__nav label').forEach((item) => {
        item.classList.remove('checked')
      })
      event.target.closest('label').classList.add('checked')
      commit('checkForFilter')
    },
    dropdownOption({ state, commit }, event) {
      const newDrop = event.target.getAttribute("data-menu");
      const inner = state.portfolioInner.find(
        (e) => e.dataMenu === newDrop
      );
      state.dropdownPortfolio.text = inner.text;
      state.dropdownPortfolio.class = inner.class;
      state.dropdownPortfolio.labelClass = inner.labelClass;
      state.dropHidden = !state.dropHidden;
      state.portfolioInnerFilter = inner.dataMenu;
      commit('checkForFilter')
    },
  },
};
