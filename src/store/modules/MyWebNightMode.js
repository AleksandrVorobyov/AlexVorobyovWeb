export default {
    state: {
        nightMode: false,
        nightModeOn: 'Включить белую тему',
        nightModeOff: 'Выключить белую тему',
    },
    getters: {
        nightMode(state) {
            return state.nightMode;
        },
        nightModeOn(state) {
            return state.nightModeOn;
        },
        nightModeOff(state) {
            return state.nightModeOff;
        },
    },
    mutations: {
        nightModeCheck(state) {
            document.querySelector("body").classList.toggle('night')
            if (state.nightMode) {
                state.nightMode = false
            } else {
                state.nightMode = true
            }
            console.log(state.nightMode);
        }
    },
}