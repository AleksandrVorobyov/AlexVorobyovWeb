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
        my-web-card-link(
          :linkProjectTitle="activeCard.card.linkProjectTitle",
          :linkProjectItem="activeCard.card.linkProjectItem"
        )
        my-web-card-about(
          :cardAboutTitle="activeCard.card.cardAboutTitle",
          :cardAboutText="activeCard.card.cardAboutText"
        )
        my-web-card-detals(
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
      my-web-pagination(
        :paginationPrev="paginationPrev",
        :paginationNext="paginationNext",
        @clickAction="scrollToTop(), pushInServeActiveCard(), slideUpdate()"
      )
</template>

<script>
import MyWebPagination from "./parts/MyWebPagination.vue";
import MyWebCardDetals from "./parts/MyWebCardDetals.vue";
import MyWebCardAbout from "./parts/MyWebCardAbout.vue";
import MyWebCardLink from "./parts/MyWebCardLink.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { mapGetters } from "vuex";

export default {
  components: {
    MyWebPagination,
    MyWebCardDetals,
    MyWebCardAbout,
    MyWebCardLink,
    Splide,
    SplideSlide,
  },
  computed: {
    ...mapGetters([
      "activeCard",
      "projectSlide",
      "localActive",
      "paginationPrev",
      "paginationNext",
      "slideCardKey",
    ]),
  },
  methods: {
    loadActiveCard() {
      this.$store.commit("loadActiveCard");
    },
    loadCards() {
      this.$store.commit("loadCards");
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
      this.$store.commit("pushInServeActiveCard");
    },
    slideUpdate() {
      this.$store.commit("slideUpdate");
    },
    fullPageAdd(event) {
      this.$store.commit("fullPageAdd", event);
    },
    cardBodyAnim() {
      this.$store.dispatch("cardBodyAnim");
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
  watch: {
    slideCardKey() {
      console.log("slideCardKey", this.slideCardKey);
    },
  },
};
</script>

<style lang="scss">
.card-post {
  position: relative;
  padding: 30px 15px;
  overflow: hidden;
  z-index: 200;

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
    box-shadow: 0px -10px 15px var(--redCyber);
  }
}

.card-post__nav {
  margin-bottom: 40px;
  max-width: 750px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.card-post__nav-title,
.card-post__nav-desc {
  position: relative;
  display: inline-block;
  margin-bottom: 40px;
  font-size: 28px;
  font-family: var(--fontNeon);
  color: var(--whiteText);
  font-weight: bold;
  line-height: 1.2;
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
  }

  @media (min-width: 600px) {
    font-size: 48px;

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
  font-family: var(--fontRomanBold);
  color: var(--whiteText);
  font-weight: bold;
  padding: 5px 10px;
  margin: 10px;

  @media (min-width: 600px) {
    font-size: 26px;
  }

  @media (min-width: 1170px) {
    font-size: 20px;
  }
}

.card-post__content {
  position: relative;
  display: flex;
  padding: 40px 0;
  flex-direction: column-reverse;

  @media (min-width: 1170px) {
    flex-direction: row;
  }
}

.card-post__content-desc {
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
  box-shadow: 19px 19px 100px 0px rgb(196, 219, 233);
  margin: auto;
  margin-bottom: 50px;

  img {
    width: 100%;
  }

  @media (min-width: 600px) {
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.carousel-project__btn-prev {
  position: absolute;
  top: 50%;
  left: 20px;
  outline: none;
  transform: translate(0%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 25px 5px;
  border: 5px solid var(--redCyber);
  transition: 0.4s linear;

  svg {
    fill: var(--redCyber);
    transition: 0.4s linear;
  }
}

.carousel-project__btn-next {
  position: absolute;
  top: 50%;
  right: 20px;
  outline: none;
  transform: translate(0%, -50%);
  background-color: #00000081;
  padding: 25px 5px;
  border: 5px solid var(--redCyber);
  transition: 0.4s linear;

  svg {
    fill: var(--redCyber);
    transition: 0.4s linear;
  }
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
  display: flex;
  margin: 40px 0 80px;
  z-index: 50;

  .pagination + .pagination {
    margin-left: 30px;
  }
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
</style>