import router from '@/router'
import smoothScroll from 'smoothscroll'
export default {
    actions: {
        async roadToPage({ state, getters, commit, dispatch }, link) {
            await router.push(link).then(() => {
                dispatch("scrollToTop")
            })
        },
        scrollToTop() {
                smoothScroll(document.getElementById('navigation'), 100, 1500)
        },
        scrollToTimeline() {
            const smoothScrollTimeline = document.getElementById('timeline');
            smoothScroll(smoothScrollTimeline, 100, 1500)
        },
    }
}