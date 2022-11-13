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
        my-dropdown(
          :dropPort="dropdownPortfolio",
          :menu="portfolioInner.menu",
          :dropHidden="dropHidden",
          :portfolioNavHidden="portfolioNavHidden",
          @dropdown="dropdown"
          @dropdownOption="dropdownOption"
        )
      .portfolio__card-inner(:data-portfolio-filter="portfolioInnerFilter")
        .project(
          v-for="item in portfolioAllFilter",
          :key="item",
          :class="item.allMenuClass"
        )
          my-card(:link="'#'", :cardInfo="item")
  .portfolio__background
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import MyDropdown from "@/components/parts/MyDropdown";

export default {
  name: "portfolio-inner-section",
  components: {
    MyDropdown,
  },
  setup() {
    const store = useStore();
    const loadCards = async () => await store.dispatch("loadCards");
    const portfolioInnerSectionAnim = () =>
      store.dispatch("portfolioInnerSectionAnim");

    onMounted(() => {
      loadCards();
      portfolioInnerSectionAnim();
    });

    return {
      portfolio: computed(() => store.getters.portfolio),
      portfolioAll: computed(() => store.getters.portfolioAll),
      portfolioInner: computed(() => store.getters.portfolioInner),
      dropdownPortfolio: computed(() => store.getters.dropdownPortfolio),
      dropHidden: computed(() => store.getters.dropHidden),
      portfolioNavHidden: computed(() => store.getters.portfolioNavHidden),
      portfolioInnerFilter: computed(() => store.getters.portfolioInnerFilter),
      portfolioAllFilter: computed(() => store.getters.portfolioAllFilter),
      getCheck: (e) => store.dispatch("getCheck", e),
      dropdown: (e) => store.commit("dropdown", e),
      dropdownOption: (e) => store.dispatch("dropdownOption", e),
      scrollToTop: () => store.dispatch("scrollToTop"),
    };
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