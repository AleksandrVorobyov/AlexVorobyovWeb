export default {
    mutations: {
        fullPageAdd(_, event) {
            document.querySelector(".full-page").classList.add("active");
            document.querySelector(".full-page-item img").src =
                event.target.querySelector("img").src;
            document.querySelector("body").classList.add("hidden");
        },
        fullPageRemove(_, event) {
            event.target.closest(".full-page").classList.remove("active");
            document.querySelector("body").classList.remove("hidden");
        },
    },
}