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
import MyWebSocialIcon from "./parts/MyWebSocialIcon.vue";
import { mapGetters } from "vuex";

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

<style lang="scss">
.footer-inner {
  position: relative;
  height: 600px;
  background: url("../assets/img/footer/bg-footer.png") top center no-repeat;
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
  height: 600px;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-inner__title {
  margin-bottom: 40px;
  font-size: 26px;
  font-weight: 700;
  font-family: var(--fontRomanBold);
  color: var(--white);
  font-weight: bold;

  @media (min-width: 600px) {
    font-size: 34px;
  }
}

.footer-inner__subtitle {
  margin: 0;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 300;
  font-family: "L850-Slab-Light";
  color: var(--white);
  text-align: center;
  line-height: 1.5;

  @media (min-width: 400px) {
    font-size: 24px;
  }

  @media (min-width: 600px) {
    font-size: 30px;
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