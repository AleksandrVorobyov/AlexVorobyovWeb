<template lang="pug">
.detals
  h4.detals-title {{ detalsTitle }}
  ol.detals-description
    li.detals-description-item(
      v-for="detalsItem in detalsDescItems",
      :key="detalsItem"
    )
      p(v-for="item in detalsItem.text", :key="item") {{ item }}
</template>

<script>
export default {
  name: "",
  props: {
    detalsTitle: String,
    detalsDescItems: Array,
  },
};
</script>

<style lang="scss">
.detals-title {
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

.detals-description {
  margin: 0;
  padding: 0;
}

.detals-description-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.detals-description-item p {
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--white);
  line-height: 1.5;
  text-align: left;
  flex: 1;

  &:last-child {
    max-width: 350px;
    width: 100%;

    @media (min-width: 1170px) {
      max-width: 293px;
      width: 100%;
    }
  }

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

.detals-description-item a {
  display: inline-block;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--yellowcolor);
  text-decoration: underline;
  line-height: 1.5;
  text-align: left;
  max-width: 293px;
  width: 100%;
  transition: 0.3s ease-in-out;
  flex: 1;

  &:hover {
    color: var(--blueCyber);
  }

  @media (min-width: 480px) {
    font-size: 28px;
  }

  @media (min-width: 1170px) {
    font-size: 16px;
  }
}
</style>