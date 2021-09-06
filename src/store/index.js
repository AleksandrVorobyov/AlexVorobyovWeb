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

export default createStore({
  state: {
  },
  mutations: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
  },
  actions: {
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
  }
})
