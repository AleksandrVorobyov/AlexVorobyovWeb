<template lang="pug">
.footer-inner
  .container
    .footer-inner-column
      h3.footer-inner__title {{ footerInnerTitle }}
      p.footer-inner__subtitle {{ footerInnerSubTitle }}
        a(:href="'mailto:' + footerInnerLink") {{ footerInnerLink }}
      .footer-inner__social.header__bg-social
        my-web-social-icon
</template>

<script>
import { mapGetters } from "vuex";
import MyWebSocialIcon from "./parts/MyWebSocialIcon.vue";

export default {
  components: {
    MyWebSocialIcon,
  },
  computed: {
    ...mapGetters([
      "footerInnerTitle",
      "footerInnerSubTitle",
      "footerInnerLink",
    ]),
  },
  methods: {
    footerInnerSectionAnim() {
      this.$store.dispatch("footerInnerSectionAnim");
    },
  },
  mounted() {
    this.footerInnerSectionAnim();
  },
};
</script>

<style lang="scss" scoped>
.footer-inner {
  position: relative;
  height: 600px;
  display: flex;
  justify-content: center;
  background: var(--footerBgInner) top center no-repeat;
  z-index: 200;
  overflow: hidden;

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
    box-shadow: 0px -10px 35px var(--black);
  }
}

.footer-inner-column {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.footer-inner__title {
  margin-bottom: 40px;
  font-size: 26px;
  line-height: 30px;
  font-weight: 700;
  font-family: var(--fontRomanBold);
  color: var(--white);

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 36px;
  }
}

.footer-inner__subtitle {
  margin: 0;
  margin-bottom: 40px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 300;
  font-family: "L850-Slab-Light";
  color: var(--white);
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }

  a {
    color: var(--blueCyber);
  }

  a:hover {
    color: var(--redcolor);
    transition: 0.5s ease-in-out;
  }
}
</style>