<template lang="pug">
section.portfolio
  .container
    .portfolio-wrap
      h3.portfolio__title.neon(v-html="neonPortfolioTitle")
      nav.portfolio__nav
        label(
          v-for="item in portfolioInnerMenu",
          :key="item.id",
          :class="item.labelClass",
          @click="getCheck($event)"
          v-if="portfolioNavHidden"
        )
          input(
            type="radio",
            name="checkbox",
            :id="item.id",
            :class="item.class",
            checked,
            :data-menu="item.dataMenu"
          )
          span {{ item.text }}
        .portfolio__dropdown.checked(:class="dropdownPortfolio.labelClass" v-if="!portfolioNavHidden")
          .portfolio__dropdown-active(@click="dropdown($event)") {{ dropdownPortfolio.text }}
          .portfolio__dropdown-list(v-if="!dropHidden")
            .portfolio__dropdown-item(@click="dropdownOption($event)")(
              v-for="item in portfolioInnerMenu",
              :key="item.id",
              :class="item.labelClass",
              :data-menu="item.dataMenu"
            ) {{ item.text }}
        .portfolio__card-inner
          .project(
            v-for="item in portfolioAll",
            :key="item",
            :class="item.allMenuClass"
          )
            my-web-card(
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
import MyWebCard from "./parts/MyWebCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    MyWebCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "portfolioAll",
      "neonPortfolioTitle",
      "portfolioInnerMenu",
      "dropdownPortfolio",
      "dropHidden",
      "portfolioNavHidden",
    ]),
  },

  methods: {
    loadCards() {
      this.$store.commit("loadCards");
    },
    getCheck(event) {
      this.$store.commit("getCheck", event);
    },
    dropdown(event) {
      this.$store.commit("dropdown", event);
    },
    dropdownOption(event) {
      this.$store.commit("dropdownOption", event);
    },
    portfolioInnerSectionAnim() {
      this.$store.dispatch("portfolioInnerSectionAnim");
    },
  },
  mounted() {
    this.loadCards();
    this.portfolioInnerSectionAnim();
  },
};
</script>

<style lang="scss">
.portfolio__nav {
  width: 100%;
  position: relative;
}

.portfolio__card-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;

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
  line-height: 30px;
  font-size: 26px;
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

  @media (min-width: 400px) {
    font-size: 34px;
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
  transition: all 0.3s linear;
}

.project.js,
.project.html,
.project.less,
.project.pug,
.project.vue,
.project.scss {
  opacity: 0;
  transform: scale(0);
  padding: 0;
  margin: 0;
  visibility: hidden;
  border-width: 0;
  width: 0;
  height: 0;
  display: none;
}

label.js.checked ~ .portfolio__card-inner .project.js,
label.vue.checked ~ .portfolio__card-inner .project.vue,
label.html.checked ~ .portfolio__card-inner .project.html,
label.less.checked ~ .portfolio__card-inner .project.less,
label.pug.checked ~ .portfolio__card-inner .project.pug,
label.scss.checked ~ .portfolio__card-inner .project.scss,
label.all.checked ~ .portfolio__card-inner .project.js,
label.all.checked ~ .portfolio__card-inner .project.vue,
label.all.checked ~ .portfolio__card-inner .project.html,
label.all.checked ~ .portfolio__card-inner .project.less,
label.all.checked ~ .portfolio__card-inner .project.pug,
label.all.checked ~ .portfolio__card-inner .project.scss {
  opacity: 1;
  display: inline-block;
  margin-bottom: 35px;
  visibility: visible;
  transform: scale(1);
  transition: all 1.5s linear;
  width: 100%;
  height: auto;
  animation: cards-anim 1.5s ease-in-out forwards;

  @media (min-width: 400px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  @media (min-width: 1020px) {
    width: 480px;
    height: 408px;
  }

  @media (min-width: 1170px) {
    width: 360px;
    height: 366px;
  }
}

div.js.checked ~ .portfolio__card-inner .project.js,
div.vue.checked ~ .portfolio__card-inner .project.vue,
div.html.checked ~ .portfolio__card-inner .project.html,
div.less.checked ~ .portfolio__card-inner .project.less,
div.pug.checked ~ .portfolio__card-inner .project.pug,
div.scss.checked ~ .portfolio__card-inner .project.scss,
div.all.checked ~ .portfolio__card-inner .project.js,
div.all.checked ~ .portfolio__card-inner .project.vue,
div.all.checked ~ .portfolio__card-inner .project.html,
div.all.checked ~ .portfolio__card-inner .project.less,
div.all.checked ~ .portfolio__card-inner .project.pug,
div.all.checked ~ .portfolio__card-inner .project.scss {
  opacity: 1;
  display: inline-block;
  margin-bottom: 35px;
  visibility: visible;
  transform: scale(1);
  transition: all 1.5s linear;
  width: 100%;
  height: auto;
  animation: cards-anim 1.5s ease-in-out forwards;

  @media (min-width: 400px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  @media (min-width: 1020px) {
    width: 480px;
    height: 408px;
  }

  @media (min-width: 1170px) {
    width: 360px;
    height: 366px;
  }
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
</style>