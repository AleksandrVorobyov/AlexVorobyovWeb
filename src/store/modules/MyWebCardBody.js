import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
    state: {
        slideCardKey: 0,
        activeCard: {},
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
            const newCard = getters.portfolioAll.find(
                (e) => e.cardId === payload.cardId
            );
            state.localActive = false;
            state.activeCard = newCard;
        },
        prevProject({ state, getters }) {
            const thisCard = state.activeCard.idx;
            if (thisCard > 0) {
                const newCard = getters.portfolioAll.find(
                    (e) => e.idx === thisCard - 1
                );
                return (state.activeCard = newCard);
            } else {
                const newCard = getters.portfolioAll.find(
                    (e) => e.idx === getters.portfolioAll.length - 1
                );
                return (state.activeCard = newCard);
            }
        },
        nextProject({ state, getters }) {
            const thisCard = state.activeCard.idx;
            if (getters.portfolioAll.length > thisCard + 1) {
                const newCard = getters.portfolioAll.find(
                    (e) => e.idx === thisCard + 1
                );
                return (state.activeCard = newCard);
            } else {
                const newCard = getters.portfolioAll.find((e) => e.idx === 0);
                return (state.activeCard = newCard);
            }
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
    }
}