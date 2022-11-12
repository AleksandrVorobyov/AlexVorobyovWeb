<template lang="pug">
section#timeline.timeline
  .container
    .timeline-wrap
      h3.timeline__title.neon(v-html="neonTimelineTitle") 
      .timeline__column
        .timeline__row(v-for="(item, idx) in timelineItems", :key="item")
          .timeline__row-img 
            .timeline-icon(:class="'timeline-icon_' + (idx + 1)")
          .timeline__row-text
            h4.timeline__row-text-title {{ item.title }}
            p.timeline__row-text-subtitle {{ item.subtitle }}
            span.timeline__row-text-desc {{ item.desc }}
</template>
<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "timeline-section",
  setup() {
    const store = useStore();

    const timelineSectionAnim = () => store.dispatch("timelineSectionAnim");

    onMounted(() => {
      timelineSectionAnim();
    });

    return {
      timelineItems: computed(() => store.getters.timelineItems),
      neonTimelineTitle: computed(() => store.getters.neonTimelineTitle),
    };
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  position: relative;
  padding: 35px 0;
  overflow: hidden;
  z-index: 200;

  @media (min-width: 768px) {
    padding: 50px 0px;
  }

  @media (min-width: 1170px) {
    padding: 75px 0px;
  }

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

.timeline-wrap {
  text-align: center;
}

.timeline__title {
  margin-bottom: 120px;
  position: relative;
  display: inline-block;
  font-size: 32px;
  line-height: 36px;
  font-family: var(--fontNeon);
  color: var(--white);
  font-weight: bold;
  z-index: 5;

  &::after {
    position: absolute;
    content: "";
    clear: both;
    background: var(--redCyber);
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
    font-size: 64px;
    line-height: 68px;
    margin-bottom: 150px;
  }
}

.timeline__column {
  position: relative;
  display: grid;
  gap: 100px;
}

.timeline__column .timeline__row:last-child .timeline__row-text::after {
  content: none;
}

@media (min-width: 1170px) {
  .timeline__column .timeline__row:nth-child(odd) {
    justify-content: flex-start;
  }

  .timeline__column .timeline__row:nth-child(even) {
    justify-content: flex-end;
  }
}

.timeline__row {
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 1170px) {
    background: transparent;
    border-radius: 0px;
    justify-content: center;
    padding-left: 0;

    &::before {
      position: absolute;
      content: "";
      background: var(--white);
      width: 4px;
      height: 100px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 6px;
    }
  }
}

.timeline__row:first-child::after {
  @media (min-width: 1170px) {
    position: absolute;
    content: "";
    background: var(--white);
    width: 4px;
    height: 60px;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 6px;
  }
}

.timeline__row:last-child::before {
  display: none;
}

.timeline__row:nth-child(even) .timeline__row-text-title {
  @media (min-width: 1170px) {
    animation: border-bottom 3s linear 0s infinite alternate;
  }
}

.timeline__row:nth-child(odd) .timeline__row-text-title {
  @media (min-width: 1170px) {
    animation: border-bottom1 3s linear 0s infinite alternate;
  }
}

.timeline__row-text {
  position: relative;
  display: grid;
  gap: 10px;
  padding: 10px;
  width: 100%;
  background: var(--white);
  border-radius: 10px;
  z-index: 3;

  @media (min-width: 768px) {
    max-width: 600px;
  }

  @media (min-width: 1170px) {
    border-radius: 5px;
    max-width: 450px;
    height: 170px;
  }

  &:before {
    position: absolute;
    content: "";
    top: -50px;
    left: 50%;
    transform: translate(-50%, 0) rotate(45deg);
    width: 100px;
    height: 100px;
    background: var(--white);
    z-index: -1;
  }

  &:after {
    position: absolute;
    content: "";
    bottom: -50px;
    left: 50%;
    transform: translate(-50%, 0) rotate(45deg);
    width: 100px;
    height: 100px;
    background: var(--white);
    z-index: -1;
  }

  &:hover::after {
    transition: 0.4s linear;
    transform: translate(-50%, 0) rotate(135deg);
  }
  &:hover::before {
    transition: 0.4s linear;
    transform: translate(-50%, 0) rotate(135deg);
  }
}

.timeline__row-text-title {
  display: inline-block;
  width: fit-content;
  margin: 0 auto;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  font-family: var(--fontRomanBold);
  color: var(--black);
  border-bottom: 4px solid var(--yellowcolor);

  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 30px;
  }
}

.timeline__row-text-subtitle {
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--black);
}

.timeline__row-text-desc {
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  font-family: var(--fontRomanBold);
  color: var(--black);
}

.timeline__row-img {
  position: absolute;
  top: -90px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  background: var(--white);
  width: 74px;
  height: 74px;
  z-index: 7;
  transform: translateX(-50%);
  box-shadow: 0px 0px 6px #0008;

  @media (min-width: 1170px) {
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.timeline-icon {
  display: inline-block;
  background: var(--timelineIcon);
  background-repeat: no-repeat;
}

.timeline-icon_1 {
  background-position: -15px -15px;
  width: 40px;
  height: 40px;
}

.timeline-icon_2 {
  background-position: -85px -15px;
  width: 39px;
  height: 40px;
}

.timeline-icon_3 {
  background-position: -154px -15px;
  width: 36px;
  height: 40px;
}

.timeline-icon_4 {
  background-position: -220px -15px;
  width: 42px;
  height: 35px;
}

.timeline-icon_5 {
  background-position: -292px -15px;
  width: 40px;
  height: 35px;
}

// -------------night---------------
.night .timeline {
  background: transparent;

  &::after {
    display: none;
  }
  &::before {
    display: none;
  }

  .timeline__title {
    &::after {
      background-color: var(--yellowcolor);
    }
  }

  .timeline__title,
  .timeline__row-text-title,
  .timeline__row-text-desc {
    color: var(--black);
    font-weight: 700;
    font-family: var(--fontRomanBold);
  }

  .timeline__row-text-subtitle {
    color: var(--black);
  }

  .timeline__row {
    &::before,
    &::after {
      background: var(--bgSidebarNight);
    }
  }
  .timeline__row-text {
    background: var(--bgSidebarNight);
    &::before,
    &::after {
      background: var(--bgSidebarNight);
    }
  }
}
// -------------night---------------
</style>