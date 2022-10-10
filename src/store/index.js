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
import MyWebScrollTo from './modules/MyWebScrollTo'
import MyWebNotification from './modules/MyWebNotification'
import MyWebSocial from './parts/social'

export default createStore({
  state: {
  },
  mutations: {},
  actions: {
  },
  modules: {
    NavigationSec: MyWebNavigation,
    HeaderSec: MyWebHeader,
    SidebarSec: MyWebSidebar,
    NightModeSec: MyWebNightMode,
    PageBackSec: MyWebPageBack,
    PortfolioSec: MyWebPortfolio,
    TimelinetSec: MyWebTimeline,
    ContactSec: MyWebContact,
    FooterSec: MyWebFooter,
    CardBody: MyWebCardBody,
    FullPage: MyWebFullPage,
    ScrollTo: MyWebScrollTo,
    Notification: MyWebNotification,
    Social: MyWebSocial,
  }
})