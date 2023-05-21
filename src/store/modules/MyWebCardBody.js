import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
    state: {
        slideCardKey: 0,
        activeCard: {},
        urlActiveCard: "https://myportfolio-92ca1-default-rtdb.europe-west1.firebasedatabase.app/activeCard/0.json",
        localActive: true,
        pagination: {
            prev: {
                ttl: "Предыдущий проект"
            },
            next: {
                ttl: "Следующий проект"
            },
        },
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
    },
    getters: {
        slideCardKey(state) {
            return state.slideCardKey;
        },
        urlActiveCard(state) {
            return state.urlActiveCard;
        },
        activeCard(state) {
            return state.activeCard;
        },
        localActive(state) {
            return state.localActive;
        },
        pagination(state) {
            return state.pagination;
        },
        projectSlide(state) {
            return state.projectSlide;
        },
    },
    mutations: {
        loadActiveCard(state) {
            state.activeCard = JSON.parse(localStorage.getItem("activeCard"));
        },
        slideUpdate(state) {
            state.slideCardKey += 1;
        },
    },
    actions: {
        cardBodyAnim() {
            if (window.innerWidth >= 768) {
                gsap.registerPlugin(ScrollTrigger);
                gsap.to('.card-post__nav', {
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
                        trigger: '.card-post__nav',
                        toggleActions: "play play play pause",
                    },
                });
                gsap.to('.card-post__content-desc', {
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
                        trigger: '.card-post__content-desc',
                        toggleActions: "play play play pause",
                    },
                });
                gsap.to('.card-post__content-carousel', {
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
                        trigger: '.card-post__content-carousel',
                        toggleActions: "play play play pause",
                    },
                });
                gsap.to('.card-post__pagination', {
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
                        trigger: '.card-post__pagination',
                        toggleActions: "play play play pause",
                    },
                });
            }
        },
        findCard({ state, getters }, payload) {
            state.localActive = false;
            state.activeCard = getters.portfolioAll.find(
                (e) => e.cardId === payload.cardId
            );
        },
        searchPrevProject({ state, getters }) {
            const thisCard = state.activeCard.idx;
            if (thisCard > 0) {
                return (state.activeCard = getters.portfolioAll.find(
                    (e) => e.idx === thisCard - 1
                ));
            } else {
                return (state.activeCard = getters.portfolioAll.find(
                    (e) => e.idx === getters.portfolioAll.length - 1
                ));
            }
        },
        searchNextProject({ state, getters }) {
            const thisCard = state.activeCard.idx;
            if (getters.portfolioAll.length > thisCard + 1) {
                return (state.activeCard = getters.portfolioAll.find(
                    (e) => e.idx === thisCard + 1
                ));
            } else {
                return (state.activeCard = getters.portfolioAll.find((e) => e.idx === 0));
            }
        },
        pushInServeActiveCard({ state, dispatch }) {
            dispatch("workWithBackendData", {
              method: "PUT",
              url: state.urlActiveCard,
              body: state.activeCard,
            });

            localStorage.setItem(
              "activeCard",
              JSON.stringify(state.activeCard)
            );
        },
        async nextProject({ state, getters, commit, dispatch }) {
            await dispatch("searchNextProject");
            await dispatch("pushInServeActiveCard");
            await commit("slideUpdate");
            await dispatch("scrollToTop");
        },
        async prevProject({ state, getters, commit, dispatch }) {
            await dispatch("searchPrevProject");
            await dispatch("pushInServeActiveCard");
            await commit("slideUpdate");
            await dispatch("scrollToTop");
        },
        async workWithBackendData({}, { method, url, body = null }) {
            const headers = {
                'Content-Type': 'application/json'
            }

            return await fetch(url, {
              method: method,
              headers: headers,
              body: body ? JSON.stringify(body) : body,
            }).then((res) => res.json());
        }
    }
}