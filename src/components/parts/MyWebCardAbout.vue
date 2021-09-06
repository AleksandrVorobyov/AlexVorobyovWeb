<template lang="pug">
.about-project
  h4.about-project__title {{ cardAboutTitle }}
  p {{ cardAboutText }}
</template>

<script>
export default {
  name: "",
  props: {
    cardAboutTitle: String,
    cardAboutText: String,
  },
};
</script>

<style lang="scss">
.about-project {
  margin-bottom: 50px;
}

.about-project__title {
  display: inline-block;
  margin-bottom: 30px;
  font-size: 26px;
  font-family: var(--fontRomanBold);
  color: var(--white);
  font-weight: bold;
  line-height: 1.2;
  border-bottom: 8px solid var(--redCyber);

  @media (min-width: 480px) {
    font-size: 32px;
  }

  @media (min-width: 600px) {
    font-size: 44px;
  }

  @media (min-width: 1170px) {
    font-size: 26px;
  }
}

.about-project p {
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--white);
  line-height: 1.5;

  @media (min-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 600px) {
    font-size: 28px;
  }

  @media (min-width: 1170px) {
    font-size: 16px;
  }
}
</style>