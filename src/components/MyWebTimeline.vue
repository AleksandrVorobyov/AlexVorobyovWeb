<template lang="pug">
section#timeline.timeline
  .container
    .timeline-wrap
      transition(name="fade", mode="out-in", appear)
        h3.timeline__title.neon(v-html="neonTimelineTitle") 
      .timeline__column
        transition(
          v-for="(item, idx) in timelineItems",
          :key="item",
          :name="item.animSide",
          appear,
          mode="out-in"
        )
          .timeline__column-item
            .timeline__column-item-img 
              .timeline-icon(:class="'timeline-icon_' + (idx + 1)")
            .timeline__column-item-text
              h4.timeline__column-title {{ item.title }}
              p.timeline__column-subtitle {{ item.subtitle }}
              span.timeline__column-desc {{ item.desc }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["timelineItems", "neonTimelineTitle"]),
  },
};
</script>

<style lang="scss">
.timeline {
  position: relative;
  padding: 120px 15px 150px;
  overflow-x: hidden;
  z-index: 200;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
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
    height: 50px;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      var(--redCyber) 100%
    );
  }
}

.timeline-wrap {
  text-align: center;
}

.timeline__title {
  margin-bottom: 150px;
  position: relative;
  display: inline-block;
  font-size: 32px;
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

  @media (min-width: 400px) {
    font-size: 40px;
  }

  @media (min-width: 480px) {
    font-size: 50px;
  }

  @media (min-width: 600px) {
    font-size: 72px;
  }

  @media (min-width: 1170px) {
    font-size: 64px;
  }
}

.timeline__column-item {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
  border-radius: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 1170px) {
    background: transparent;
    border-radius: 0px;
    height: 122px;
  }

  @media (min-width: 1260px) {
    justify-content: center;
    padding-left: 0;
    margin-bottom: 100px;

    &::before {
      position: absolute;
      content: "";
      background: var(--white);
      width: 4px;
      height: 109px;
      top: 95px;
    }
    &:last-child::before {
      display: none;
    }

    &:first-child:after {
      position: absolute;
      content: "";
      background: var(--white);
      width: 4px;
      height: 57px;
      top: -75px;
    }
  }
}

.timeline__column-item:nth-child(even) .timeline__column-item-img {
  @media (min-width: 1170px) {
    animation: shadow 3s linear 0s infinite alternate;
  }
}

.timeline__column-item:nth-child(odd) .timeline__column-item-img {
  @media (min-width: 1170px) {
    animation: shadow1 3s linear 0s infinite alternate;
  }
}

.timeline__column-item:nth-child(even) .timeline__column-title {
  @media (min-width: 1170px) {
    animation: border-bottom 3s linear 0s infinite alternate;
  }
}

.timeline__column-item:nth-child(odd) .timeline__column-title {
  @media (min-width: 1170px) {
    animation: border-bottom1 3s linear 0s infinite alternate;
  }
}

.timeline__column
  .timeline__column-item:nth-child(even)
  .timeline__column-item-text {
  right: 0;

  @media (min-width: 1260px) {
    right: -50px;
  }
}

.timeline__column
  .timeline__column-item:nth-child(odd)
  .timeline__column-item-text {
  right: 0;

  @media (min-width: 1260px) {
    left: -50px;
  }
}

.timeline__column-item-text {
  background: var(--white);
  padding: 10px;
  z-index: 3;
  transition: transform 0.4s linear;
  width: 100%;
  border-radius: 10px;

  @media (min-width: 1170px) {
    border-radius: 5px;
    max-width: 550px;
    transform: translate(-50%);
    position: absolute;
    top: 0;
    left: 50%;
    width: auto;
  }

  @media (min-width: 1260px) {
    max-width: 508px;
    left: auto;
    transform: translate(0);
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

.timeline__column-title {
  display: inline;
  font-size: 24px;
  font-family: var(--fontRomanBold);
  color: var(--black);
  font-weight: bold;
  border-bottom: 4px solid var(--yellowcolor);

  @media (min-width: 480px) {
    font-size: 28px;
  }

  @media (min-width: 600px) {
    font-size: 36px;
  }

  @media (min-width: 1170px) {
    font-size: 26px;
  }
}

.timeline__column-subtitle {
  font-size: 18px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--black);
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: 22px;
  }

  @media (min-width: 600px) {
    font-size: 26px;
  }

  @media (min-width: 1170px) {
    font-size: 18px;
  }
}

.timeline__column-desc {
  font-size: 22px;
  font-weight: 700;
  font-family: var(--fontRomanBold);
  color: var(--black);

  @media (min-width: 480px) {
    font-size: 26px;
  }

  @media (min-width: 1170px) {
    font-size: 20px;
  }
}

.timeline__column-item-img {
  position: absolute;
  top: -120px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  background: linear-gradient(var(--white), var(--white));
  width: 74px;
  height: 74px;
  z-index: 7;
  transform: translate(-50%);
  box-shadow: 0px 0px 6px #0008;

  @media (min-width: 1170px) {
    top: -95px;
    box-shadow: 0px 0px 0px #0008;
  }

  @media (min-width: 1260px) {
    top: 0;
  }

  img {
    height: 60px;

    @media (min-width: 1170px) {
      height: auto;
    }
  }
}

.timeline-icon {
  display: inline-block;
  background: url("~@/assets/img/sprite/timeline.png");
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
</style>