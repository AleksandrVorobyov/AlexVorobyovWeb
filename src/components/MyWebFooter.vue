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
};
</script>

<style lang="scss">
.footer {
  position: relative;
  padding: 30px 15px 40px;
  background-color: rgba(51, 51, 51, 0.5);
  overflow: hidden;
  z-index: 200;

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
  font-size: 20px;
  font-weight: 700;
  font-family: var(--fontRomanBold);
  color: var(--white);
  line-height: 1.2;
  text-align: center;

  @media (min-width: 400px) {
    font-size: 24px;
  }

  @media (min-width: 600px) {
    font-size: 28px;
  }

  @media (min-width: 1170px) {
    text-align: left;
    font-size: 20px;
  }
}

.footer__subtitle {
  font-size: 18px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--white);
  line-height: 1.2;
  text-align: center;

  @media (min-width: 400px) {
    font-size: 22px;
  }

  @media (min-width: 600px) {
    font-size: 26px;
  }

  @media (min-width: 1170px) {
    text-align: left;
    font-size: 18px;
  }
}
</style>