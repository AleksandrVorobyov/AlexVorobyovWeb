import { createStore } from 'vuex'
import MyWebNavigation from './modules/MyWebNavigation'
import MyWebHeader from './modules/MyWebHeader'
import MyWebSidebar from './modules/MyWebSidebar'
import MyWebNightMode from './modules/MyWebNightMode'
import MyWebPageBack from './modules/MyWebPageBack'
import MyWebPortfolio from './modules/MyWebPortfolio'
import MyWebTimeline from './modules/MyWebTimeline'
import MyWebContact from './modules/MyWebContact'
import MyWebFooter from './modules/MyWebFooter'
import MyWebCardBody from './modules/MyWebCardBody'
import MyWebFullPage from './modules/MyWebFullPage'
import smoothScroll from 'smoothscroll'

export default createStore({
  state: {
  },
  mutations: {},
  actions: {
    scrollToTop() {
      setTimeout(() => {
        const page = document.getElementById('page');
        smoothScroll(page, 100, 1500)
      }, 300);
    },
    scrollToTimeline() {
      const smoothScrollTimeline = document.getElementById('timeline');
      smoothScroll(smoothScrollTimeline, 100, 1500)
    },
  },
  modules: {
    MyWebNavigationSec: MyWebNavigation,
    MyWebHeaderSec: MyWebHeader,
    MyWebSidebarSec: MyWebSidebar,
    MyWebNightModeSec: MyWebNightMode,
    MyWebPageBackSec: MyWebPageBack,
    MyWebPortfolioSec: MyWebPortfolio,
    MyWebTimelinetSec: MyWebTimeline,
    MyWebContactSec: MyWebContact,
    MyWebFooterSec: MyWebFooter,
    MyWebCardBody: MyWebCardBody,
    MyWebFullPage: MyWebFullPage,
  }
})
