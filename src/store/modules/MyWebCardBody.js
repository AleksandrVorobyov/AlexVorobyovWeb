import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
    actions: {
        cardBodyAnim() {
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
                    toggleActions: "restart pause play pause",
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
                    toggleActions: "restart pause play pause",
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
                    toggleActions: "restart pause play pause",
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
                    toggleActions: "restart pause play pause",
                },
            });
        },
    }
}