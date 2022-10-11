<template lang="pug">
section#portfolioInner.portfolio
  .container
    .portfolio-wrap
      h3.portfolio__title.neon(v-html="portfolio.neonPortfolioTitle")
      nav.portfolio__nav
        label(
          v-for="item in portfolioInner.menu",
          :key="item.id",
          :class="item.labelClass",
          v-if="portfolioNavHidden"
        )
          input(
            type="radio",
            name="checkbox",
            :id="item.id",
            :class="item.class",
            checked,
            :data-menu="item.dataMenu",
            @click="getCheck($event), scrollToTop()"
          )
          span.portfolio__nav-label-text {{ item.text }}
        .portfolio__dropdown.checked(
          :class="dropdownPortfolio.labelClass",
          v-if="!portfolioNavHidden"
        )
          .portfolio__dropdown-active(@click="dropdown($event)") {{ dropdownPortfolio.text }}
          .portfolio__dropdown-list(v-if="!dropHidden")
            .portfolio__dropdown-item(@click="dropdownOption($event)")(
              v-for="item in portfolioInner.menu",
              :key="item.id",
              :class="item.labelClass",
              :data-menu="item.dataMenu"
            ) {{ item.text }}
      .portfolio__card-inner(:data-portfolio-filter="portfolioInnerFilter")
        .project(
          v-for="item in portfolioAllFilter",
          :key="item",
          :class="item.allMenuClass"
        )
          mainCard(
            :link="'#'",
            :src="item.cardSrc",
            :alt="item.cardAlt",
            :title="item.cardTitle",
            :text="item.cardText",
            :card-id="item.cardId"
          )
  .portfolio__background
</template>

<script>
import { mapGetters } from "vuex";
import mainCard from "./parts/mainCard.vue";

export default {
  components: {
    mainCard,
  },
  computed: {
    ...mapGetters([
      "portfolio",
      "portfolioAll",
      "portfolioInner",
      "dropdownPortfolio",
      "dropHidden",
      "portfolioNavHidden",
      "portfolioInnerFilter",
      "portfolioAllFilter",
    ]),
  },

  methods: {
    async loadCards() {
      await this.$store.dispatch("loadCards");
    },
    getCheck(event) {
      this.$store.dispatch("getCheck", event);
    },
    dropdown(event) {
      this.$store.commit("dropdown", event);
    },
    dropdownOption(event) {
      this.$store.dispatch("dropdownOption", event);
    },
    portfolioInnerSectionAnim() {
      this.$store.dispatch("portfolioInnerSectionAnim");
    },
    scrollToTop() {
      this.$store.dispatch("scrollToTop");
    },
  },
  mounted() {
    this.loadCards();
    this.portfolioInnerSectionAnim();
  },
};
</script>

<style lang="scss" scoped>
@import url("~@/assets/style/portfolio.css");

.portfolio__nav {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  gap: 10px;
  justify-content: space-evenly;
  user-select: none;
  z-index: 100;
}

.portfolio__card-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;

  @media (min-width: 1170px) {
    justify-content: start;
  }
}

.portfolio__nav input,
.portfolio__nav label {
  display: flex;
  justify-content: center;

  @media (min-width: 1170px) {
    display: inline;
  }
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}

label > [type="radio"]:checked + span,
label > [type="radio"]:not(:checked) + span {
  position: relative;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 5px;
  margin-right: 5px;
  letter-spacing: 3px;
  cursor: pointer;
  color: var(--whiteText);
  font-size: 26px;
  line-height: 30px;
  text-transform: uppercase;
  font-weight: 700;
  border-bottom: 5px solid transparent;
  transition: all 0.2s ease;
  font-family: var(--fontNeon);
  margin-bottom: 20px;

  &:hover {
    color: var(--blueLinkHover);
    border-bottom-color: var(--redCyber);
  }

  @media (min-width: 1170px) {
    font-size: 24px;
    margin-bottom: 0;
  }
}

label.checked > [type="radio"] + span {
  color: var(--blueLinkHover);
  border-bottom-color: var(--redCyber);
}

.portfolio__dropdown {
  position: relative;
  display: inline-block;
  min-width: 300px;
  min-height: 60px;
}

.portfolio__dropdown-active {
  padding: 15px 15px;
  font-size: 28px;
  line-height: 1;
  letter-spacing: 5px;
  font-weight: 700;
  font-family: var(--fontNeon);
  color: var(--redCyber);
  background: var(--white);
  cursor: pointer;
  border-radius: 10px;
  text-align: left;
  transition: color 0.4s linear, border 0.4s linear;
  border-bottom: 5px solid var(--redCyber);
}

.portfolio__dropdown-active:hover {
  color: var(--blueCyber);
  border-bottom: 5px solid var(--blueCyber);

  &::before {
    color: var(--blueCyber);
  }
}

.portfolio__dropdown-active::before {
  content: "\261F";
  position: absolute;
  top: 50%;
  right: 20px;
  color: var(--redCyber);
  font-size: 28px;
  transition: color 0.4s linear;
  transform: translateY(-50%);
}

.portfolio__dropdown-list {
  position: absolute;
  display: grid;
  top: 100%;
  left: 0;
  width: 100%;
}

.portfolio__dropdown-item {
  display: inline-block;
  width: 100%;
  padding: 15px 15px;
  font-size: 28px;
  letter-spacing: 5px;
  font-weight: 700;
  font-family: var(--fontNeon);
  cursor: pointer;
  border: 5px solid var(--redCyber);
  background: var(--white);
  z-index: 500;
  transition: background 0.4s linear;
}

.portfolio__dropdown-item + .portfolio__dropdown-item {
  border-top: 0px solid #000;
}

.portfolio__dropdown-item:hover {
  background: var(--blueCyber);
}

.project {
  transition: opacity 0.6s linear;

  @media (max-width: 560px) {
    width: 100%;
  }
}

.project.hidden--on {
  opacity: 0;
  display: none;
}
</style>