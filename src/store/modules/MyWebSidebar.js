export default {
  state: {
    sidebarLinks: [
      {
        text: "Главная",
        link: "/",
      },
      {
        text: "Работы",
        link: "/project",
      },
      {
        text: "Контакты",
        link: "/contact",
      },
    ],
    sidebarTitle: "Меню",
    sidebarBg: {
      src: "sidebar/sidebar-bg-01.jpg",
      alt: "sidebar-bg",
    },
    sidebarActive: false,
  },
  getters: {
    sidebarLinks(state) {
      return state.sidebarLinks;
    },
    sidebarTitle(state) {
      return state.sidebarTitle;
    },
    sidebarBg(state) {
      return state.sidebarBg;
    },
    sidebarActive(state) {
      return state.sidebarActive;
    },
  },
  mutations: {
    showDialog(state) {
      const body = document.body;
      if (!state.sidebarActive) {
        const scrollY = document.documentElement.style.getPropertyValue(
          "--scroll-y"
        );
        body.style.position = "fixed";
        body.style.top = `-${scrollY}`;
        state.sidebarActive = !state.sidebarActive;
      } else if (state.sidebarActive) {
        const scrollY = body.style.top;
        body.style.position = "relative";
        body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
        state.sidebarActive = !state.sidebarActive;
      }
    },
  },
};
