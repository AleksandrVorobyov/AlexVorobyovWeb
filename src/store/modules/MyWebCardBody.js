import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
    state: {
        slideCardKey: 0,
    },
    getters: {
        slideCardKey(state) {
            return state.slideCardKey;
        },
    },
    mutations: {
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
                        toggleActions: "play pause play pause",
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
                        toggleActions: "play pause play pause",
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
                        toggleActions: "play pause play pause",
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
                        toggleActions: "play pause play pause",
                    },
                });
            }
        },
    }
}