<template lang="pug">
section.card-post
  .container.card-post-wrap
    .card-post__nav
      h2.card-post__nav-desc {{ activeCard.card.cardPostTitle }}
      h3.card-post__nav-title {{ activeCard.card.cardPostName }}
      .card-post__nav-meta 
        span(
          v-for="item in activeCard.card.cardPostMeta",
          :key="item",
          :class="item.class"
        ) {{ item.text }}
    .card-post__content
      .card-post__content-desc
        cardLink(
          :linkProjectTitle="activeCard.card.linkProjectTitle",
          :linkProjectItem="activeCard.card.linkProjectItem"
        )
        cardAbout(
          :cardAboutTitle="activeCard.card.cardAboutTitle",
          :cardAboutText="activeCard.card.cardAboutText"
        )
        cardDetals(
          :detalsTitle="activeCard.card.detalsTitle",
          :detalsDescItems="activeCard.card.detalsDescItems"
        )
      .card-post__content-carousel
        splide.carousel-project(
          :options="projectSlide",
          :key="'slideCardKey' + slideCardKey"
        )
          splide-slide(
            v-for="item in activeCard.card.projectSlides",
            :key="item",
            @click="fullPageAdd($event)",
            @mousedown="mousedownSlide",
            @mouseup="mouseupSlide"
          )
            img(:src="require('@/assets/img/' + item.src)", :alt="item.alt")
    .card-post__pagination
      pagination(
        :paginationPrev="pagination.prev.ttl",
        :paginationNext="pagination.next.ttl",
        @clickActionPrev="scrollToTop(), pushInServeActiveCard(), slideUpdate(), prevProject()",
        @clickActionNext="scrollToTop(), pushInServeActiveCard(), slideUpdate(), nextProject()"
      )
</template>

<script>
import { mapGetters } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import pagination from "./parts/pagination.vue";
import cardDetals from "./parts/cardDetals.vue";
import cardAbout from "./parts/cardAbout.vue";
import cardLink from "./parts/cardLink.vue";

export default {
  components: {
    Splide,
    SplideSlide,
    pagination,
    cardDetals,
    cardAbout,
    cardLink,
  },
  computed: {
    ...mapGetters([
      "activeCard",
      "projectSlide",
      "localActive",
      "pagination",
      "slideCardKey",
    ]),
  },
  methods: {
    loadActiveCard() {
      this.$store.commit("loadActiveCard");
    },
    loadCards() {
      this.$store.dispatch("loadCards");
    },
    mousedownSlide(event) {
      this.$store.commit("mousedownSlide", event);
    },
    mouseupSlide(event) {
      this.$store.commit("mouseupSlide", event);
    },
    scrollToTop() {
      this.$store.dispatch("scrollToTop");
    },
    pushInServeActiveCard() {
      this.$store.dispatch("pushInServeActiveCard");
    },
    fullPageAdd(event) {
      this.$store.commit("fullPageAdd", event);
    },
    slideUpdate() {
      this.$store.commit("slideUpdate");
    },
    cardBodyAnim() {
      this.$store.dispatch("cardBodyAnim");
    },
    prevProject() {
      this.$store.dispatch("prevProject");
    },
    nextProject() {
      this.$store.dispatch("nextProject");
    },
  },
  beforeMount() {
    if (this.localActive) {
      this.loadActiveCard();
    }
  },
  mounted() {
    this.loadCards();
    this.cardBodyAnim();
  },
};
</script>

<style lang="scss" scoped>
.card-post {
  position: relative;
  padding: 30px 0;
  overflow: hidden;
  z-index: 200;

  &::before,
  &::after {
    position: absolute;
    content: "";
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

.card-post__nav {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 40px;
  max-width: 750px;
}

.card-post__nav-title,
.card-post__nav-desc {
  position: relative;
  display: block;
  width: fit-content;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  font-family: var(--fontNeon);
  color: var(--whiteText);
  z-index: 4;

  &::after {
    position: absolute;
    content: "";
    background-color: var(--redCyber);
    height: 12px;
    width: 100%;
    bottom: -8px;
    left: 0;
    z-index: -2;
  }

  @media (min-width: 480px) {
    font-size: 36px;
    line-height: 40px;
  }

  @media (min-width: 1170px) {
    font-size: 48px;
    line-height: 56px;

    &::after {
      bottom: 5px;
    }
  }
}

.card-post__nav-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-post__nav-meta span {
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  font-family: var(--fontRomanBold);
  color: var(--whiteText);
  padding: 5px 10px;
  margin: 10px;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 26px;
  }

  @media (min-width: 1170px) {
    font-size: 20px;
    line-height: 24px;
  }
}

.card-post__content {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 40px;

  @media (min-width: 1170px) {
    flex-direction: row;
  }
}

.card-post__content-desc {
  width: 100%;
  max-width: 560px;
  margin: auto;

  @media (min-width: 1170px) {
    margin-right: 30px;
    max-width: 460px;
  }
}

.card-post__content-carousel {
  display: block;
  position: relative;
  border: 10px double var(--redCyber);
  height: 500px;
  max-width: 700px;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 50px rgb(196, 219, 233);
  margin: auto;
  margin-bottom: 50px;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    height: 750px;
  }

  @media (min-width: 1170px) {
    margin: 0;
    max-width: 648px;
  }
}

.carousel-project {
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
}

.carousel-project__btn-prev,
.carousel-project__btn-next {
  position: absolute;
  top: 50%;
  outline: none;
  transform: translate(0%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px 0px;
  border: 5px solid var(--redCyber);
  transition: 0.4s linear;

  @media (min-width: 768px) {
    padding: 25px 5px;
  }

  svg {
    fill: var(--redCyber);
    transition: 0.4s linear;
  }
}

.carousel-project__btn-prev {
  left: 20px;
}

.carousel-project__btn-next {
  right: 20px;
}

.carousel-project__btn-prev:hover,
.carousel-project__btn-next:hover {
  border-color: var(--blueCyber);
  background-color: #6e343454;

  svg {
    fill: var(--blueCyber);
  }
}

.card-post__pagination {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  z-index: 50;
}

.meta-html {
  background: var(--metaHtml);
}

.meta-pug {
  background: var(--metaPug);
}

.meta-scss {
  background: var(--metaScss);
}

.meta-less {
  background: var(--metaLess);
}

.meta-vue {
  background: var(--metaVue);
}

.meta-css {
  background: var(--metaCss);
}

.meta-bootstrap {
  background: var(--metaBootstrap);
}

.meta-js {
  background: var(--metaJs);
}

.meta-jquery {
  background: var(--metajQuery);
}

.meta-php {
  background: var(--metaPhp);
}

// -------------night---------------
.night .card-post {
  &::after {
    display: none;
  }
  &::before {
    display: none;
  }

  p,
  h2,
  h3,
  h4,
  svg {
    color: var(--black);
    fill: var(--black);
    border-bottom-color: var(--yellowcolor);
  }

  a {
    color: var(--yellowcolor);
  }

  input {
    background-color: rgb(37, 37, 37);
    color: var(--white);
    border: none;
  }

  .card-post__nav-title,
  .card-post__nav-desc {
    font-weight: 700;
    font-family: var(--fontRomanBold);

    &::after {
      background-color: var(--yellowcolor);
    }
  }

  .card-post__content-carousel {
    background-color: var(--yellowcolor);
    border: 10px double var(--bgSidebarNight);
  }

  .carousel-project__btn-next,
  .carousel-project__btn-prev {
    border: 5px solid var(--bgSidebarNight);
    transition: 0.4s linear;
  }

  .carousel-project__btn-next svg,
  .carousel-project__btn-prev svg {
    fill: var(--bgSidebarNight);
    transition: 0.4s linear;
  }

  .carousel-project__btn-next:hover svg,
  .carousel-project__btn-prev:hover svg {
    fill: var(--yellowcolor);
  }

  .carousel-project__btn-next:hover,
  .carousel-project__btn-prev:hover {
    border: 5px solid var(--yellowcolor);
  }
}
// -------------night---------------
</style>