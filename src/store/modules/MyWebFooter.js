export default {
    state: {
        footerInnerTitle: "За созданием сайта:",
        footerInnerSubTitle: "обращайтесь на ",
        footerInnerLink: "sasha89253215539@yandex.ru",
        footerTitle: '© 2020 — Воробьев Александр',
        footerSubTitle: 'Веб-разработчик из Москвы, занимаюсь версткой и созданием сайтов.',
    },
    getters: {
        footerInnerTitle(state) {
            return state.footerInnerTitle;
        },
        footerInnerSubTitle(state) {
            return state.footerInnerSubTitle;
        },
        footerInnerLink(state) {
            return state.footerInnerLink;
        },
        footerTitle(state) {
            return state.footerTitle;
        },
        footerSubTitle(state) {
            return state.footerSubTitle;
        },
    }
}