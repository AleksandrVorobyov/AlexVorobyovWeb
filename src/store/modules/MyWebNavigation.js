export default {
    state: {
        navLinks: [
            {
              link: "/",
              text: "Главная",
            },
            {
              link: "/project",
              text: "Работы",
            },
            {
              link: "/contact",
              text: "Контакты",
            },
        ],
    },
    getters: {
        navLinks(state) {
            return state.navLinks
        },
    },
    mutations: {
        burgerActiveMet() {
            document.getElementById("nav-burger-btn").classList.toggle("navigation__burger--active");
            document.getElementById("sidebar").classList.toggle("sidebar--active");
        },
    },
    modules: {
        },
}