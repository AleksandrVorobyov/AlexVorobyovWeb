<template lang="pug">
section#header.header
  .container
    .header-wrap
      my-header-info(
        :info="header",
        @clickToTimeline="scrollToTimeline",
        @clickToPage="roadToPage"
      )
      my-header-avatar(
        :skillsAvatar="header.mySkillsAvatar",
        :master="header.master"
      )
  .big-container
    .header__slide
      splide(:options="header.cert")
        splide-slide(
          v-for="item in header.certSlides",
          :key="item",
          @click="fullPageAdd($event)"
        )
          img(:src="require('@/assets/img/' + item.src)", :alt="item.alt")
  .container
    my-header-bg(
      :myEmail="myEmail",
      :headerBg="header",
      @clickToPage="roadToPage"
    )
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import MyHeaderAvatar from "@/components/parts/MyHeaderAvatar";
import MyHeaderInfo from "@/components/parts/MyHeaderInfo";
import MyHeaderBg from "@/components/parts/MyHeaderBg";

export default {
  name: "header-section",
  components: {
    Splide,
    SplideSlide,
    MyHeaderAvatar,
    MyHeaderInfo,
    MyHeaderBg,
  },
  setup() {
    const store = useStore();

    const headerSectionAnim = () => store.dispatch("headerSectionAnim");

    onMounted(() => {
      headerSectionAnim();
    });

    return {
      header: computed(() => store.getters.header),
      myEmail: computed(() => store.getters.myEmail),
      roadToPage: async (link) => store.dispatch("roadToPage", link),
      fullPageAdd: (e) => store.commit("fullPageAdd", e),
      scrollToTimeline: () => store.dispatch("scrollToTimeline"),
    };
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
  padding: 35px 0;
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

  @media (min-width: 768px) {
    padding: 50px 0px;
  }

  @media (min-width: 1170px) {
    padding: 75px 0px;
  }
}

.header-wrap {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 120px 0 50px;
  margin: auto;

  @media (min-width: 1170px) {
    padding: 100px 0 50px;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
  }
}

.header__slide {
  position: relative;
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 50px;
  z-index: 10;
  overflow: hidden;
  background: var(--bgHeaderSlide);
  box-shadow: 0px 0px 50px var(--redCyber);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    z-index: -10;
    background: var(--bgHeaderSlideBefore);
    z-index: -5;
    clip-path: circle(75% at 15% 45%);
  }

  @media (min-width: 480px) {
    padding: 50px;
  }
}

.header__slide .splide__slide {
  cursor: zoom-in;
}

.header__slide-row-btn {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 80px;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 1;
}

.header__slide-btn {
  position: absolute;
  width: 30px;
  height: 80px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  outline: none;
  opacity: 0.6;
  transition: opacity 0.3s ease-in 0s, box-shadow 0.3s ease-in 0.3s;

  @media (min-width: 480px) {
    background: rgba(0, 0, 0, 1) !important;
  }

  &::before {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 4px;
    height: 30px;
    background: var(--grayText);
    pointer-events: none;

    @media (min-width: 480px) {
      background: var(--white);
    }
  }

  &::after {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 4px;
    height: 30px;
    background: var(--grayText);
    pointer-events: none;

    @media (min-width: 480px) {
      background: var(--white);
    }
  }
}

.splide__arrow--next.header__slide-btn-next {
  right: 5px;

  @media (min-width: 480px) {
    right: -40px;
  }

  &::before {
    transform: translateX(-50%) rotate(-45deg);
  }

  &::after {
    transform: translateX(-50%) rotate(45deg);
  }
}

.splide__arrow--prev.header__slide-btn-prev {
  left: 5px;

  @media (min-width: 480px) {
    left: -40px;
  }

  &::before {
    transform: translateX(-50%) rotate(45deg);
  }

  &::after {
    transform: translateX(-50%) rotate(-45deg);
  }
}

.header__slide-btn:hover {
  opacity: 1;
  @media (min-width: 480px) {
    box-shadow: 0px 0px 10px var(--redCyber), 0px 0px 20px var(--redCyber),
      0px 0px 30px var(--redCyber);
  }
}

.splide__arrows {
  pointer-events: none;
}

.splide__arrow {
  pointer-events: all;
}

// -------------night---------------
.night {
  .header {
    background: transparent;

    &::before,
    &::after {
      display: none;
    }
  }

  .header__slide {
    background: var(--yellowcolor);
    box-shadow: 0px 14px 50px 0px var(--grayBg);
  }

  .header__slide-btn:hover {
    box-shadow: 0px 0px 10px var(--grayBg);
  }

  .header__slide::before {
    background: var(--bgContactFormWhite);
  }
}
// -------------night---------------
</style>