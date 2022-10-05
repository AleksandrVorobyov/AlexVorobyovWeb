<template lang="pug">
.about-project
  h4.about-project__title {{ cardAboutTitle }}
  p {{ cardAboutText }}
</template>

<script>
export default {
  props: {
    cardAboutTitle: String,
    cardAboutText: String,
  },
};
</script>

<style lang="scss" scoped>
.about-project {
  margin-bottom: 50px;
}

.about-project__title {
  display: inline-block;
  margin-bottom: 30px;
  font-size: 26px;
  line-height: 30px;
  font-family: var(--fontRomanBold);
  color: var(--white);
  font-weight: bold;
  border-bottom: 8px solid var(--redCyber);
}

.about-project p {
  margin: 0;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--white);
}
</style>