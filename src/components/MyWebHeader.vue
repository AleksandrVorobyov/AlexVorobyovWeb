<template lang="pug">
section.header
  .container
    .header-wrap
      transition(name="fade", mode="out-in", appear)
        .header__text
          h2.header__text-title.neon(v-html="neonHeaderTitleFirst")
          h2.header__text-title.neon(v-html="neonHeaderTitleSecond")
          .header__text-subtitle
            p {{ mySkillsSub }}
          .header__text-button
            a.button-01(href="#timeline")
              span Познакомиться
            my-web-btn-two(
              :link="'/contact'",
              text="Контакты",
              @click="scrollToTop"
            )
      transition(name="fade", mode="out-in", appear)
        .header__avatar
          div(
            v-for="item in mySkillsAvatar",
            :key="item",
            :class="item.classItem"
          )
            h4.avatar__title {{ item.text }}
            .avatar-css__img
              img(
                :src="require('@/assets/img/header/' + item.src)",
                :alt="item.alt"
              )
          img(src="../assets/img/header/master.jpg", alt="master")
  .big-container
    transition(name="fade", mode="out-in", appear)
      .header__slide
        splide(:options="cert")
          splide-slide(
            v-for="item in certSlides",
            :key="item",
            @click="fullPageAdd($event)"
          )
            img(:src="require('@/assets/img/' + item.src)", :alt="item.alt")
  .container
    .header__bg-wrap
      transition(name="fade", mode="out-in", appear)
        .header__bg-item
          .header__bg-title.neon(v-html="neonHeaderTitleBgFirst")
          .header__bg-skills
            ul
              li(v-for="item in mySkills") {{ item }}
          .header__bg-button
            my-web-btn-one(
              :link="'/project'",
              text="Смотреть работы",
              @click="scrollToTop"
            )
      transition(name="fade", mode="out-in", appear)
        .header__bg-item
          .header__bg-title.neon(v-html="neonHeaderTitleBgSecond")
          my-web-social-icon
          a.header__bg-email(:href="'mailto:' + myEmail") {{ myEmail }}
</template>

<script>
import MyWebBtnOne from "./parts/MyWebBtnOne.vue";
import MyWebBtnTwo from "./parts/MyWebBtnTwo.vue";
import MyWebSocialIcon from "./parts/MyWebSocialIcon.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { mapGetters } from "vuex";
export default {
  components: {
    MyWebBtnOne,
    MyWebBtnTwo,
    MyWebSocialIcon,
    Splide,
    SplideSlide,
  },
  computed: {
    ...mapGetters([
      "mySkills",
      "mySkillsSub",
      "mySkillsAvatar",
      "myEmail",
      "cert",
      "certSlides",
      "neonHeaderTitleFirst",
      "neonHeaderTitleSecond",
      "neonHeaderTitleBgFirst",
      "neonHeaderTitleBgSecond",
    ]),
  },
  methods: {
    scrollToTop() {
      this.$store.commit("scrollToTop");
    },
    fullPageAdd(event) {
      this.$store.commit("fullPageAdd", event);
    },
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
  padding-bottom: 120px;
  padding-top: 50px;
  overflow-x: hidden;
  z-index: 200;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    width: 100%;
    background: -moz-linear-gradient(
      top,
      #ffffff00 30%,
      var(--redCyber) 100%
    );
    background: -webkit-linear-gradient(
      top,
      #ffffff00 30%,
      var(--redCyber) 100%
    );
    background: linear-gradient(
      0deg,
      #ffffff00 30%,
      var(--redCyber) 100%
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background: -moz-linear-gradient(
      bottom,
      #ffffff00 30%,
      var(--redCyber) 100%
    );
    background: -webkit-linear-gradient(
      bottom,
      #ffffff00 30%,
      var(--redCyber) 100%
    );
    background: linear-gradient(
      180deg,
      #ffffff00 30%,
      var(--redCyber) 100%
    );
  }
}

.header-wrap {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 140px 15px 50px;
  margin: auto;

  @media (min-width: 1170px) {
    padding: 100px 15px 50px;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
  }
}

.header__text {
  margin: auto;
  margin-top: 30px;
  text-align: center;
  max-width: 530px;

  @media (min-width: 1170px) {
    margin-top: 0;
    text-align: left;
  }
}

.header__text-title {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  padding-bottom: 5px;
  font-size: 50px;
  font-family: var(--fontNeon);
  font-weight: 400;
  color: var(--white);
  line-height: 1.2;
  z-index: 3;
  overflow: hidden;

  &::after {
    position: absolute;
    content: "";
    clear: both;
    background: var(--redCyber);
    width: 10%;
    height: 10px;
    bottom: 0px;
    left: 0;
    z-index: -1;
    transition: 0.5s ease-in-out;
    animation: nameLogo 6s ease-in-out 0s infinite;
    border-radius: 10px 0;
  }

  @media (min-width: 480px) {
    font-size: 70px;
  }

  @media (min-width: 600px) {
    font-size: 90px;
  }
}

.header__text-subtitle p {
  font-size: 20px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--white);
  line-height: 1.5;
  margin: 0;
  margin-bottom: 30px;

  @media (min-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 600px) {
    font-size: 30px;
  }

  @media (min-width: 1170px) {
    font-size: 24px;
  }
}

.header__text-button {
  display: flex;
  justify-content: center;

  .button-01 {
    display: none;
  }

  @media (min-width: 768px) {
    .button-01 {
      display: inline-block;
    }

    * + * {
      margin-left: 60px;
    }
  }

  @media (min-width: 1170px) {
    justify-content: flex-start;
  }
}

.header__avatar {
  position: relative;
  box-shadow: 10px 14px 16px -3px rgba(34, 60, 80, 0.18);
  height: 280px;
  width: 280px;
  transition: 1.2s ease-in-out;
  border-radius: 50%;
  z-index: 5;
  border: 10px double var(--redCyber);
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 auto;

  @media (min-width: 400px) {
    height: 320px;
    width: 320px;
  }

  @media (min-width: 600px) {
    height: 430px;
    width: 430px;
  }

  img {
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
}

.header__avatar_html {
  position: absolute;
  top: -90px;
  left: -25px;
  width: 120px;
  height: 120px;
  transition: 0.5s linear;

  @media (min-width: 400px) {
    top: -100px;
    height: 150px;
    width: 150px;
  }

  @media (min-width: 600px) {
    left: 0px;
  }

  &:hover {
    transform: translateY(-15px);

    .avatar__title {
      color: var(--redCyber);
      text-shadow: 1px 1px 2px #000000;
    }
  }
}

.header__avatar_css {
  position: absolute;
  top: -90px;
  right: -25px;
  width: 120px;
  height: 120px;
  transition: 0.5s linear;

  @media (min-width: 400px) {
    top: -100px;
    height: 150px;
    width: 150px;
  }

  @media (min-width: 600px) {
    right: 0px;
  }

  &:hover {
    transform: translateY(-15px);

    .avatar__title {
      color: var(--redCyber);
      text-shadow: 1px 1px 2px #000000;
    }
  }
}

.header__avatar_js {
  position: absolute;
  top: -130px;
  left: 50%;
  width: 120px;
  height: 120px;
  transform: translate(-50%, 0);
  transition: 0.5s linear;

  @media (min-width: 400px) {
    top: -140px;
    height: 150px;
    width: 150px;
  }

  &:hover {
    transform: translate(-50%, -15px);

    .avatar__title {
      color: var(--redCyber);
      text-shadow: 1px 1px 2px #000000;
    }
  }
}

.avatar__title {
  font-family: var(--fontRomanBold);
  text-align: center;
  color: var(--white);
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 1px;
  transition: 0.5s linear;
}

.avatar-html__img {
  width: 120px;
  height: 120px;

  @media (min-width: 400px) {
    height: 150px;
    width: 150px;
  }

  img {
    border-radius: 0;
  }
}

.avatar-css__img {
  height: 120px;
  width: 120px;

  @media (min-width: 400px) {
    width: 150px;
    height: 150px;
  }

  img {
    border-radius: 0;
  }
}

.avatar-js__img {
  height: 120px;
  width: 120px;

  @media (min-width: 400px) {
    width: 150px;
    height: 150px;
  }

  img {
    border-radius: 0;
  }
}

.header__slide {
  position: relative;
  width: 100%;
  padding: 50px;
  border-radius: 15px;
  margin-bottom: 50px;
  z-index: 10;
  overflow: hidden;
  background: linear-gradient(140deg, #e2d13d 30%, #ec6948);
  box-shadow: 0px 10px 50px 0px var(--redCyber);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    z-index: -10;
    background: linear-gradient(140deg, #e23d87 30%, #48ecb5);
    z-index: -5;
    clip-path: circle(75% at 15% 45%);
  }
}

.header__slide .splide__slide {
  cursor: zoom-in;
}

.header__bg-wrap {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  padding: 0 15px;

  @media (min-width: 1170px) {
    justify-content: space-between;
    flex-direction: row;
  }
}

.header__bg-item {
  background-color: rgba(23, 115, 141, 0.25);
  border-radius: 10px;
  padding: 15px;

  @media (min-width: 1170px) {
    background: transparent;
    border-radius: 5px;
    padding: 10px;
  }
}

.header__bg-item:last-child {
  margin-bottom: 30px;

  @media (min-width: 1170px) {
    margin-bottom: 0;
  }
}

.header__bg-title {
  margin-bottom: 50px;
  font-size: 32px;
  font-family: var(--fontNeon);
  color: var(--white);
  font-weight: 700;
  text-shadow: 0px 3px 42.32px rgba(255, 255, 255, 0.004);

  @media (min-width: 400px) {
    font-size: 40px;
  }

  @media (min-width: 480px) {
    font-size: 50px;
  }

  @media (min-width: 600px) {
    font-size: 54px;
  }

  @media (min-width: 1170px) {
    font-size: 40px;
  }
}

.header__bg-skills ul {
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  list-style-type: none;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--white);
  line-height: 1.2;
  text-shadow: 0px 3px 10px rgba(255, 255, 255, 0.4);

  @media (min-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 600px) {
    font-size: 34px;
  }

  @media (min-width: 1170px) {
    font-size: 24px;
  }
}

.header__bg-button {
  display: flex;

  @media (min-width: 400px) {
    margin-left: 20px;
  }

  @media (min-width: 1170px) {
    margin-left: 0;
  }
}

.header__bg-social {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  transition: 0.5s ease-in-out;
  z-index: 5;

  a {
    position: relative;
    margin-right: 20px;
    color: var(--white);
    transition: 0.5s ease-in-out;

    &:last-child {
      margin-right: 0;
    }
  }
}

.header__bg-social .fa-2x {
  font-size: 34px;
  text-shadow: 0 0 5px var(--redCyber), 0 0 10px var(--redCyber),
    0 0 20px var(--redCyber), 0 0 40px var(--redCyber), 0 0 80px var(--redCyber);
  transition: 0.5s ease-in-out;

  @media (min-width: 400px) {
    font-size: 48px;
  }

  @media (min-width: 600px) {
    font-size: 64px;
  }

  @media (min-width: 1170px) {
    font-size: 32px;
  }

  &:hover {
    color: #73ebeb;
  }
}

.header__bg-email {
  font-size: 20px;
  font-family: var(--fontRomanReg);
  font-weight: 400;
  color: var(--white);
  text-decoration: underline;
  text-shadow: 0px 3px 42.32px rgba(255, 255, 255, 0.004);
  transition: 0.5s ease-in-out;

  &:hover {
    color: var(--blueCyber);
  }

  &:focus,
  &:active {
    color: var(--redcolor);
  }

  @media (min-width: 400px) {
    font-size: 28px;
  }

  @media (min-width: 600px) {
    font-size: 34px;
  }

  @media (min-width: 1170px) {
    font-size: 24px;
  }
}

.header__slide-row-btn {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 80px;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 1;
}

.header__slide-btn {
  position: absolute;
  width: 30px;
  height: 80px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  outline: none;
  background: rgba(0, 0, 0, 1) !important;
  opacity: 0.6;
  transition: opacity 0.3s ease-in 0s, box-shadow 0.3s ease-in 0.3s;

  &::before {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 4px;
    height: 30px;
    background: var(--white);
    pointer-events: none;
  }

  &::after {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 4px;
    height: 30px;
    background: var(--white);
    pointer-events: none;
  }
}

.splide__arrow--next.header__slide-btn-next {
  right: -40px;
  &::before {
    transform: translateX(-50%) rotate(-45deg);
  }

  &::after {
    transform: translateX(-50%) rotate(45deg);
  }
}

.splide__arrow--prev.header__slide-btn-prev {
  left: -40px;
  &::before {
    transform: translateX(-50%) rotate(45deg);
  }

  &::after {
    transform: translateX(-50%) rotate(-45deg);
  }
}

.header__slide-btn:hover {
  opacity: 1;
  box-shadow: 0px 0px 10px var(--redCyber), 0px 0px 20px var(--redCyber),
    0px 0px 30px var(--redCyber);
}

.splide__arrows {
  pointer-events: none;
}

.splide__arrow {
  pointer-events: all;
}
</style>