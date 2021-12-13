import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
    state: {
        timelineItems: [
            {
                title: 'Оцениваю макет',
                subtitle: 'Оцениваю объем работы, сложность, нюансы. Задаю вопросы.',
                desc: 'Время: 2 - 4 часа',
                animSide: 'slide-left',
            },
            {
                title: 'ТЗ, смета и график работ',
                subtitle: 'Согласовываем техническое задание и график работ по проекту. Отмечаю стоимость по этапам работы.',
                desc: 'Время: 1 - 2 часа',
                animSide: 'slide-right',
            },
            {
                title: 'Вы держите руку на пульсе',
                subtitle: 'Выдаю клиенту доступ к GitHub репозиторию и доске Trello. Вы в любое время можете видеть актуальное состояние проекта и задач.',
                desc: 'Время: 2 часа',
                animSide: 'slide-left',
            },
            {
                title: 'Выполняю каждый этап',
                subtitle: 'Поочередно выполняю каждый этап работы. Передаю результаты. Заказчик производит поэтапную оплату.',
                desc: 'Время: 2 - 4 часа',
                animSide: 'slide-right',
            },
            {
                title: 'Финальное ревью проекта',
                subtitle: 'Проект готов. Финальное ревью и полировка до идеального состояния. Передаю файлы проекта заказчику.',
                desc: 'Время: 2 - 4 часа',
                animSide: 'slide-left',
            },
        ],
        neonTimelineTitle: "К<span>ак</span> я р<span>або</span>таю"
    },
    getters: {
        timelineItems(state) {
            return state.timelineItems;
        },
        neonTimelineTitle(state) {
            return state.neonTimelineTitle;
        },
    },
    actions: {
        timelineSectionAnim() {
            gsap.registerPlugin(ScrollTrigger);

            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.timeline',
                    toggleActions: "restart pause play pause",
                },
            });

            let timelineItems = document.querySelectorAll('.timeline__column-item-text')

            gsap.from('.timeline__title', {
                opacity: 0,
                ease: "elastic",
                duration: 1.5,
                y: 30,
                scrollTrigger: {
                    trigger: '.timeline',
                    toggleActions: "restart pause play pause",
                },
            })

            timelineItems.forEach((item, index) => {
                tl.from(item, {
                    opacity: 0,
                    ease: "elastic",
                    duration: 1,
                    x: () => {
                        if (index % 2 !== 0) {
                            return 100
                        } else {
                            return -100
                        }
                    },
                });
            })

        },
    }
}