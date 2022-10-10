export default {
    state: {
        notification: {
            active: false,
            error: {
                formEmailEmpty: "Введите свою почту!",
                formEmail: "Неверно указана почта!",
                formThemeEmpty: "Введите тему!",
                formTheme: "Неверно указана тема!",
                formDesc: "Напишите ваше сообщение! Минимум 10 букв.",
            },
            success: {
                form: "Заявка успешно отправлена!"
            },
            main: {
                icon: "",
                class: "",
                title: ""
            }
        },
        formSuccess: {
            icon: "fa-check-circle",
            class: "notification--success",
        },
        formError: {
            icon: "fa-exclamation-triangle",
            class: "notification--error",
        },
    },
    getters: {
        notification(state) {
            return state.notification;
        },
        formSuccess(state) {
            return state.formSuccess;
        },
        formError(state) {
            return state.formError;
        },
    },
    mutations: {
    },
    actions: {
        getNotificationForm({ state, getters, commit, dispatch }, { type, text }) {
            if (type === "error") {
                state.notification.main.title = text
                state.notification.main.icon = state.formError.icon
                state.notification.main.class = state.formError.class
                state.notification.active = !state.notification.active;
                setTimeout(() => {
                    state.notification.active = !state.notification.active
                }, 3000);
            } else {
                state.notification.main.title = text
                state.notification.main.icon = state.formSuccess.icon
                state.notification.main.class = state.formSuccess.class
                state.notification.active = !state.notification.active;
                setTimeout(() => {
                    state.notification.active = !state.notification.active
                }, 3000);
            }
        },
    }
}