<template lang="pug">
section#portfolio.portfolio
  .container
    .portfolio-wrap
      h3.portfolio__title.neon(v-html="portfolio.neonPortfolioTitle")
      .portfolio__card
        mainCard(
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
import mainCard from "./parts/mainCard.vue";

export default {
  components: {
    mainBtn,
    mainCard,
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
    async portfolioSectionAnim() {
      await this.$store.dispatch("portfolioSectionAnim");
    },
  },
  mounted() {
    this.loadCards();
    this.portfolioSectionAnim();
  },
};
</script>

<style lang="scss" scoped>
@import url("~@/assets/style/portfolio.css");

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

// -------------portfolio---------------
.night .portfolio {
  &::after {
    height: 0;
  }
  &::before {
    height: 0;
  }

  .portfolio__title {
    &::after {
      background-color: var(--yellowcolor);
    }
  }

  .portfolio__title,
  .portfolio__nav-item {
    color: var(--black);
    font-weight: 700;
    font-family: var(--fontRomanBold);
    transition: 0.5s ease-in-out;
  }

  .portfolio__nav-item:hover {
    color: var(--redcolor);
  }
}

.night .portfolio__nav {
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    color: var(--black);
    font-weight: 700;
    font-family: var(--fontRomanBold);

    &:hover {
      color: var(--blueLinkHover);
      border-bottom-color: var(--yellowcolor);
    }
  }

  .portfolio__dropdown-active {
    color: var(--yellowcolor);
    border-bottom: 5px solid var(--yellowcolor);

    &::before {
      color: var(--yellowcolor);
    }
  }

  .portfolio__dropdown-item {
    border: 5px solid var(--yellowcolor);
  }

  .portfolio__dropdown-item + .portfolio__dropdown-item {
    border-top: 0px solid #000;
  }

  .checkbox-all:checked + label,
  .checkbox-html:checked + label,
  .checkbox-less:checked + label,
  .checkbox-scss:checked + label,
  .checkbox-pug:checked + label,
  .checkbox-js:checked + label {
    color: var(--blueLinkHover);
    border-bottom-color: var(--yellowcolor);
  }

  label > [type="radio"]:checked + span,
  label > [type="radio"]:not(:checked) + span {
    color: var(--black);
    font-family: var(--fontRomanBold);
    letter-spacing: 1px;

    &:hover {
      color: var(--blueLinkHover);
      border-bottom-color: var(--yellowcolor);
      text-shadow: 0px 0px 5px #313131;
    }
  }

  label.checked > [type="radio"] + span {
    color: var(--blueLinkHover);
    border-bottom-color: var(--yellowcolor);
    text-shadow: 0px 0px 5px #313131;
  }
}
// -------------portfolio---------------
</style>