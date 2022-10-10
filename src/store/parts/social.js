export default {
    state: {
        social: {
            list: [
                {
                    link: "https://vk.com/id65683827",
                    iconClass: "fa-vk",
                    wrapClass: "social-vk"
                },
                {
                    link: "https://wa.me/+79253215539",
                    iconClass: "fa-whatsapp",
                    wrapClass: "social-facebook"
                },
                {
                    link: "mailto:sasha89253215539@yandex.ru",
                    iconClass: "fa-envelope",
                    wrapClass: "social-email"
                },
                {
                    link: "https://telegram.im/@Voojaxx",
                    iconClass: "fa-telegram",
                    wrapClass: "social-telegram"
                },
                {
                    link: "https://github.com/AleksandrVorobyov",
                    iconClass: "fa-github",
                    wrapClass: "social-github"
                },
            ]
        },
    },
    getters: {
        social(state) {
            return state.social
        }
    }
}