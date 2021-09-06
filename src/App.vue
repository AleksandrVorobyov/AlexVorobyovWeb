<template lang="pug">
#page.page
  my-web-notification
  my-web-preloader
  my-web-page-back
  router-view
</template>

<script>
import myWebPageBack from "./components/MyWebPageBack.vue";
import MyWebPreloader from "./components/MyWebPreloader.vue";
import MyWebNotification from "./components/parts/MyWebNotification.vue";

export default {
  components: {
    myWebPageBack,
    MyWebPreloader,
    MyWebNotification
  },
};
</script>

<style lang="scss">
:root {
  --white: #fff;
  --black: #000;
  --whiteText: #fff;
  --blueLinkHover: #73ebeb;
  --blue: #037ec6;
  --grayText: #666666;
  --lightGrayText: #c4c4c4;
  --lightGrayBg: #f5f5f5;
  --grayBg: #808080;
  --redcolor: #e74c3c;
  --yellowcolor: #fbdc4d;
  --redCyber: #ec0b36;
  --greenCyber: #00ff80;
  --redCyber50: #ec0b3485;
  --blueCyber: #00ffff;
  --pincCyber: #fd6dfd;
  --bgSidebarNight: #7e90b9;
  --metaHtml: #ff861a;
  --metaPug: #c24215;
  --metaScss: #c69;
  --metaLess: #07f;
  --metaVue: #42b983;
  --metaCss: #039be5;
  --metaBootstrap: #a062c7;
  --metaJs: #ffd200;
  --metajQuery: #044d85;
  --metaPhp: #777bb4;
  --fontNeon: "Neoneon";
  --fontRomanReg: "L890-Roman-Regular";
  --fontRomanBold: "L890-Roman-Bold";
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html,
body {
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  color: var(--black);
  line-height: 1;
  font-size: 16px;
  font-weight: 400;
  user-select: none;
}

body.hidden {
  overflow: hidden;
}

body::before {
  content: "";
  display: block;
  width: 1px;
  height: 0px;
  background-color: transparent;
}

main {
  min-height: 80vh;
}

input,
textarea {
  font-size: 16px;
  line-height: 1.5;
  resize: vertical;
  -webkit-appearance: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}

.big-container {
  max-width: 1470px;
  padding: 0 15px;
  margin: auto;
}

.container {
  max-width: 1140px;
  margin: auto;
}

.display-block {
  display: block;
}

.relative {
  position: relative;
}

@media (max-width: 1170px) {
  .animated {
    animation: none;
  }

  .wow {
    animation: none;
  }
}

img {
  pointer-events: none;
}

::-webkit-scrollbar-button {
  background-repeat: no-repeat;
  width: 5px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background-color: #242424;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 0px;
  border-radius: 0px;
  background: var(--redCyber50);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--redCyber);
}

::-webkit-resizer {
  background-repeat: no-repeat;
  width: 10px;
  height: 0px;
}

::-webkit-scrollbar {
  width: 10px;
}

.page {
  position: relative;
}

.page::before {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  content: "";
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 30%, var(--black) 100%);
  z-index: 1000;
}

.page::after {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  content: "";
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 30%, var(--black) 100%);
  z-index: 1000;
}

.white-color {
  background: var(--white);
}

.display-none {
  display: none;
}

.neon span {
  animation: neon linear infinite 3s;
}

@keyframes notif {
  to {
    width: 0%;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fade-enter-active {
  animation: fadeInUp 1s ease-in-out;
}

@keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-500px);
    -ms-transform: translateY(-500px);
    transform: translateY(-500px);
  }

  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.slide-down-enter-active {
  animation: slideInDown 1s linear;
}

@keyframes shake {
  0%,
  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
  }
}

.shake-enter-active {
  animation: shake 1.5s linear;
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(1000px);
    -ms-transform: translateX(1000px);
    transform: translateX(1000px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.slide-right-enter-active {
  animation: slideInRight 1s linear;
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-1000px);
    -ms-transform: translateX(-1000px);
    transform: translateX(-1000px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.slide-left-enter-active {
  animation: slideInLeft 1s linear;
}
</style>
