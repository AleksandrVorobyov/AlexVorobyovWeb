<template lang="pug">
.header__info
  h2.header__info-title.neon(v-html="info.neonHeaderTitleFirst")
  h2.header__info-title.neon(v-html="info.neonHeaderTitleSecond")
  p.header__info-subtitle {{ info.mySkillsSub }}
  .header__info-button
    my-btn(
      :btnInfo="info.headerTextBtn.btnTimeline",
      @clickAction="$emit('clickToTimeline')"
    )
    my-btn(
      :btnInfo="info.headerTextBtn.btnContact",
      @clickAction="$emit('clickToPage', info.headerTextBtn.btnContact.link)"
    )
</template>
<script>
export default {
  name: "my-header-info",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  emits: ["clickToTimeline", "clickToPage"],
};
</script>
<style scoped lang="scss">
.header__info {
  display: grid;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;

  @media (min-width: 1170px) {
    margin-top: 0;
    text-align: left;
    max-width: 530px;
  }
}

.header__info-title {
  position: relative;
  display: block;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-bottom: 5px;
  font-size: 48px;
  line-height: 54px;
  font-family: var(--fontNeon);
  font-weight: 400;
  color: var(--white);
  line-height: 1.2;
  z-index: 3;
  overflow: hidden;

  &::after {
    position: absolute;
    content: "";
    clear: both;
    background: var(--redCyber);
    width: 10%;
    height: 10px;
    bottom: 0px;
    left: 0;
    z-index: -1;
    transition: 0.5s ease-in-out;
    animation: nameLogo 6s ease-in-out 0s infinite;
    border-radius: 10px 0;
  }

  @media (min-width: 768px) {
    font-size: 64px;
    line-height: 68px;
  }

  @media (min-width: 1170px) {
    font-size: 90px;
    line-height: 98px;
    margin: 0 0 20px;
  }
}

.header__info-subtitle {
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--white);

  @media (min-width: 1170px) {
    margin-bottom: 30px;
    font-size: 24px;
    line-height: 28px;
  }
}

.header__info-button {
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 250px 250px;
    gap: 60px;
  }

  @media (min-width: 1170px) {
    justify-content: flex-start;
  }
}

// -------------night---------------
.night {
  .header__info-subtitle {
    color: var(--black);
  }

  .header__info-title {
    font-weight: 700;
    font-family: var(--fontRomanBold);
    color: var(--black);

    &::after {
      background-color: var(--yellowcolor);
    }
  }
}
// -------------night---------------
</style>