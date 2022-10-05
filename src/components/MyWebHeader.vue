<template lang="pug">
section#header.header
  .container
    .header-wrap
      .header__text
        h2.header__text-title.neon(v-html="header.neonHeaderTitleFirst")
        h2.header__text-title.neon(v-html="header.neonHeaderTitleSecond")
        p.header__text-subtitle {{ header.mySkillsSub }}
        .header__text-button
          mainBtn(
            :btnType="header.headerTextBtn.btnTimeline.type",
            :btnId="header.headerTextBtn.btnTimeline.id",
            :btnText="header.headerTextBtn.btnTimeline.text",
            @clickAction="scrollToTimeline()"
          )
          mainBtn(
            :btnType="header.headerTextBtn.btnContact.type",
            :btnId="header.headerTextBtn.btnContact.id",
            :btnClass="header.headerTextBtn.btnContact.class",
            :btnText="header.headerTextBtn.btnContact.text",
            @clickAction="roadToPage(header.headerTextBtn.btnContact.link)"
          )
      .header__avatar
        div(
          v-for="item in header.mySkillsAvatar",
          :key="item",
          :class="item.classItem"
        )
          h4.header__avatar-title {{ item.text }}
          .header__avatar-img
            img(
              :src="require('@/assets/img/header/' + item.src)",
              :alt="item.alt"
            )
        img(src="@/assets/img/header/master.jpg", alt="master")
  .big-container
    .header__slide
      splide(:options="header.cert")
        splide-slide(
          v-for="item in header.certSlides",
          :key="item",
          @click="fullPageAdd($event)"
        )
          img(:src="require('@/assets/img/' + item.src)", :alt="item.alt")
  .container
    .header__bg-wrap
      .header__bg-item
        .header__bg-title.neon(v-html="header.neonHeaderTitleBgFirst")
        .header__bg-skills
          ul
            li(v-for="item in header.mySkills") {{ item }}
        .header__bg-button
          mainBtn(
            :btnType="header.headerBgBtn.type",
            :btnId="header.headerBgBtn.id",
            :btnText="header.headerBgBtn.text",
            @clickAction="roadToPage(header.headerBgBtn.link)"
          )
      .header__bg-item
        .header__bg-title.neon(v-html="header.neonHeaderTitleBgSecond")
        .header__bg-social
          MyWebSocialIcon
        a.header__bg-email(:href="'mailto:' + myEmail") {{ myEmail }}
</template>

<script>
import { mapGetters } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import mainBtn from "./parts/mainBtn.vue";
import MyWebSocialIcon from "./parts/MyWebSocialIcon.vue";

export default {
  components: {
    mainBtn,
    MyWebSocialIcon,
    Splide,
    SplideSlide,
  },
  computed: {
    ...mapGetters(["header", "myEmail"]),
  },
  methods: {
    async roadToPage(link) {
      await this.$store.dispatch("roadToPage", link);
    },
    fullPageAdd(event) {
      this.$store.commit("fullPageAdd", event);
    },
    scrollToTimeline() {
      this.$store.dispatch("scrollToTimeline");
    },
    headerSectionAnim() {
      this.$store.dispatch("headerSectionAnim");
    },
  },
  mounted() {
    this.headerSectionAnim();
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
  padding: 35px 0;
  overflow: hidden;
  z-index: 200;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: 0;
    height: 50px;
    width: 100%;
    box-shadow: 0px 10px 15px var(--redCyber);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50px;
    left: 0;
    height: 50px;
    width: 100%;
    box-shadow: 0px -10px 15px var(--redCyber);
  }

  @media (min-width: 768px) {
    padding: 50px 0px;
  }

  @media (min-width: 1170px) {
    padding: 75px 0px;
  }
}

.header-wrap {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 120px 0 50px;
  margin: auto;

  @media (min-width: 1170px) {
    padding: 100px 0 50px;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
  }
}

.header__text {
  display: grid;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;

  @media (min-width: 1170px) {
    margin-top: 0;
    text-align: left;
    max-width: 530px;
  }
}

.header__text-title {
  position: relative;
  display: block;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-bottom: 5px;
  font-size: 48px;
  line-height: 54px;
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

  @media (min-width: 768px) {
    font-size: 64px;
    line-height: 68px;
  }

  @media (min-width: 1170px) {
    font-size: 90px;
    line-height: 98px;
    margin: 0 0 20px;
  }
}

.header__text-subtitle {
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--white);

  @media (min-width: 1170px) {
    margin-bottom: 30px;
    font-size: 24px;
    line-height: 28px;
  }
}

.header__text-button {
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 250px 250px;
    gap: 60px;
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
  border-radius: 50%;
  z-index: 5;
  border: 10px double var(--redCyber);
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 auto;

  @media (min-width: 480px) {
    height: 320px;
    width: 320px;
  }

  @media (min-width: 768px) {
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

.header__avatar_html,
.header__avatar_css,
.header__avatar_js {
  position: absolute;
  width: 120px;
  height: 120px;
  transition: 0.5s linear;

  @media (min-width: 480px) {
    height: 140px;
    width: 140px;
  }

  @media (min-width: 1170px) {
    &:hover {
      transform: translateY(-15px);

      .avatar__title {
        color: var(--redCyber);
        text-shadow: 1px 1px 2px #000000;
      }
    }
  }
}

.header__avatar_js:hover {
  @media (min-width: 1170px) {
    transform: translate(-50%, -15px);
  }
}

.header__avatar_html {
  top: -90px;
  left: -25px;

  @media (min-width: 480px) {
    top: -100px;
  }

  @media (min-width: 768px) {
    left: 0px;
  }
}

.header__avatar_css {
  top: -90px;
  right: -25px;

  @media (min-width: 480px) {
    top: -100px;
  }

  @media (min-width: 768px) {
    right: 0px;
  }
}

.header__avatar_js {
  top: -130px;
  left: 50%;
  transform: translate(-50%, 0);

  @media (min-width: 480px) {
    top: -140px;
  }
}

.header__avatar-title {
  font-family: var(--fontRomanBold);
  text-align: center;
  color: var(--white);
  font-size: 22px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 1px;
  transition: 0.5s linear;
}

.header__avatar-img {
  width: 120px;
  height: 120px;

  @media (min-width: 480px) {
    height: 140px;
    width: 140px;
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
  margin-bottom: 30px;
  font-size: 32px;
  line-height: 36px;
  font-family: var(--fontNeon);
  color: var(--white);
  font-weight: 700;
  text-shadow: 0px 3px 42.32px rgba(255, 255, 255, 0.004);

  @media (min-width: 1170px) {
    margin-bottom: 50px;
    font-size: 40px;
    line-height: 44px;
  }
}

.header__bg-skills ul {
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  list-style-type: none;

  li {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    font-family: var(--fontRomanReg);
    color: var(--white);
    text-shadow: 0px 3px 10px rgba(255, 255, 255, 0.4);

    @media (min-width: 1170px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
}

.header__bg-button {
  display: flex;

  @media (min-width: 480px) {
    margin-left: 20px;
  }

  @media (min-width: 1170px) {
    margin-left: 0;
  }
}

.header__bg-social {
  margin-bottom: 30px;
}

.header__bg-email {
  font-size: 24px;
  line-height: 28px;
  font-family: var(--fontRomanReg);
  font-weight: 400;
  color: var(--white);
  text-decoration: underline;
  text-shadow: 0px 3px 42.32px rgba(255, 255, 255, 0.004);
  transition: 0.5s ease-in-out;

  &:hover {
    color: var(--yellowcolor);
  }

  &:focus,
  &:active {
    color: var(--redcolor);
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