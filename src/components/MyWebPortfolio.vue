<template lang="pug">
section#portfolio.portfolio
  .container
    .portfolio-wrap
      transition(name="fade", mode="out-in", appear)
        h3.portfolio__title.neon(v-html="neonPortfolioTitle")
      transition(name="shake", mode="out-in", appear)
        nav.portfolio__card
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
    .portfolio__nav-bottom
      transition(name="fade", mode="out-in", appear)
        my-web-btn-one(
          :link="'./project'",
          :text="'Все работы'",
          @click="scrollToTop()"
        )
  .portfolio__background
</template>

<script>
import MyWebBtnOne from "./parts/MyWebBtnOne.vue";
import MyWebCard from "./parts/MyWebCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    MyWebBtnOne,
    MyWebCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["portfolioAll", "neonPortfolioTitle"]),
    firstPortfolioCards() {
      return this.portfolioAll.slice(0, 9);
    },
  },
  methods: {
    scrollToTop() {
      this.$store.commit("scrollToTop");
    },
    loadCards() {
      this.$store.commit("loadCards");
    },
  },
  mounted() {
    this.loadCards();
  },
};
</script>

<style lang="scss">
.portfolio {
  position: relative;
  padding: 80px 15px;
  overflow-x: hidden;
  min-height: 80vh;
  z-index: 200;

  @media (min-width: 600px) {
    padding: 120px 15px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 30%,
      var(--redCyber) 100%
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      var(--redCyber) 100%
    );
  }
}

.portfolio__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#dfdbdb48, #fa9d9d70),
    url("../assets/img/portfolio/bg.webp") top center/ cover no-repeat;
  background-attachment: fixed;
  background-blend-mode: hue;
  z-index: -1;
  opacity: 0.8;
}

.portfolio-wrap {
  text-align: center;
}

.portfolio__title {
  position: relative;
  display: inline-block;
  margin-bottom: 70px;
  font-size: 32px;
  font-family: var(--fontNeon);
  color: var(--whiteText);
  font-weight: bold;
  z-index: 5;

  @media (min-width: 400px) {
    font-size: 40px;
  }

  @media (min-width: 480px) {
    font-size: 50px;
  }

  @media (min-width: 600px) {
    font-size: 72px;
  }

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

  @media (min-width: 1170px) {
    font-size: 64px;
  }
}

.portfolio__nav-bottom {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
}

.portfolio__card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1020px) {
    flex-direction: row;
  }
}

.portfolio__card .card {
  margin-bottom: 30px;

  @media (min-width: 1020px) {
    margin-right: 30px;
    margin-left: 30px;
    margin-left: 0;
    &:nth-child(2n),
    &:last-child {
      margin-right: 0;
    }
  }

  @media (min-width: 1170px) {
    margin-right: 30px;
    margin-bottom: 30px;
    &:nth-child(3n) {
      margin-right: 0 !important;
    }

    &:nth-child(2n),
    &:last-child {
      margin-right: 30px;
    }
  }
}

.portfolio__color-circle {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
}
</style>