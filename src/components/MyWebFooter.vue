<template lang="pug">
.footer
  .container
    .footer-wrap
      .footer__title {{ footerTitle }}
      .footer__subtitle {{ footerSubTitle }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["footerTitle", "footerSubTitle"]),
  },
  methods: {
    footerSectionAnim() {
      this.$store.dispatch("footerSectionAnim");
    },
  },
  mounted() {
    this.footerSectionAnim();
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding: 20px 0;
  background-color: rgba(51, 51, 51, 0.5);
  overflow: hidden;
  z-index: 200;

  @media (min-width: 768px) {
    padding: 30px 15px 40px;
  }

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: 0;
    height: 50px;
    width: 100%;
    box-shadow: 0px 10px 15px var(--black);
  }
}

.footer__title {
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 26px;
  font-weight: 700;
  font-family: var(--fontRomanBold);
  color: var(--white);
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }

  @media (min-width: 1170px) {
    text-align: left;
    font-size: 22px;
    line-height: 26px;
  }
}

.footer__subtitle {
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--white);
  text-align: center;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 26px;
  }

  @media (min-width: 1170px) {
    text-align: left;
    font-size: 18px;
    line-height: 22px;
  }
}

// -------------night---------------
.night .footer {
  background: var(--bgSidebarNight);

  &::after {
    display: none;
  }
  &::before {
    display: none;
  }
}
// -------------night---------------
</style>