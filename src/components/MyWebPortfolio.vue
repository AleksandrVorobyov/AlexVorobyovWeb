<template lang="pug">
section#portfolio.portfolio
  .container
    .portfolio-wrap
      h3.portfolio__title.neon(v-html="portfolio.neonPortfolioTitle")
      .portfolio__card
        my-web-card(
          v-for="item in firstPortfolioCards",
          :key="item",
          :link="item.cardLink",
          :src="item.cardSrc",
          :alt="item.cardAlt",
          :title="item.cardTitle",
          :text="item.cardText",
          :card-id="item.cardId"
        )
      .portfolio__btn
        mainBtn(
          :btnType="portfolio.btn.type",
          :btnId="portfolio.btn.id",
          :btnText="portfolio.btn.text",
          @clickAction="roadToPage(portfolio.btn.link)"
        )
  .portfolio__background
</template>

<script>
import { mapGetters } from "vuex";
import mainBtn from "./parts/mainBtn.vue";
import MyWebCard from "./parts/MyWebCard.vue";

export default {
  components: {
    mainBtn,
    MyWebCard,
  },
  computed: {
    ...mapGetters(["portfolio", "portfolioAll"]),
    firstPortfolioCards() {
      return this.portfolioAll.slice(0, 9);
    },
  },
  methods: {
    async roadToPage(link) {
      await this.$store.dispatch("roadToPage", link);
    },
    async loadCards() {
      await this.$store.dispatch("loadCards");
    },
    portfolioSectionAnim() {
      this.$store.dispatch("portfolioSectionAnim");
    },
  },
  mounted() {
    this.loadCards();
    this.portfolioSectionAnim();
  },
};
</script>

<style lang="scss">
.portfolio {
  position: relative;
  padding: 35px 0;
  overflow: hidden;
  min-height: 80vh;
  z-index: 200;

  @media (min-width: 768px) {
    padding: 50px 0px;
  }

  @media (min-width: 1170px) {
    padding: 75px 0px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 50px;
    width: 100%;
  }

  &::before {
    top: -50px;
    right: 0;
    box-shadow: 0px 10px 15px var(--redCyber);
  }

  &::after {
    bottom: -50px;
    left: 0;
    box-shadow: 0px -10px 15px var(--redCyber);
  }
}

.portfolio__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--portfolioBgMob) top center/ cover no-repeat;
  z-index: -1;
  opacity: 0.8;

  @media (min-width: 768px) {
    background: linear-gradient(#dfdbdb48, #fa9d9d70),
      var(--portfolioBgWeb) top center/ cover no-repeat;
    background-attachment: fixed;
    background-blend-mode: hue;
  }
}

.portfolio-wrap {
  text-align: center;
}

.portfolio__title {
  position: relative;
  display: inline-block;
  margin-bottom: 35px;
  font-size: 32px;
  line-height: 36px;
  font-family: var(--fontNeon);
  color: var(--whiteText);
  font-weight: bold;
  z-index: 5;

  &::after {
    position: absolute;
    content: "";
    clear: both;
    background-color: var(--redCyber);
    width: 100%;
    height: 10px;
    bottom: -7px;
    left: -3px;
    z-index: -1;
    transition: 0.5s ease-in-out;
  }

  @media (min-width: 480px) {
    font-size: 44px;
    line-height: 48px;
  }

  @media (min-width: 1170px) {
    margin-bottom: 70px;
    font-size: 64px;
    line-height: 68px;
  }
}

.portfolio__btn {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
}

.portfolio__card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    gap: 30px;
  }
}

.portfolio__color-circle {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
}
</style>