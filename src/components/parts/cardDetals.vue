<template lang="pug">
.detals
  h4.detals-title {{ detalsTitle }}
  ol.detals-description
    li.detals-description-item(
      v-for="(detalsItem, index) in detalsDescItems",
      :key="detalsItem"
    )
      p.detals-description-item-text(
        v-for="item in detalsItem.text",
        :key="item"
      ) {{ item }}
</template>

<script>
export default {
  props: {
    detalsTitle: String,
    detalsDescItems: Array,
  },
};
</script>

<style lang="scss" scoped>
.detals-title {
  display: inline-block;
  margin-bottom: 30px;
  font-size: 26px;
  line-height: 30px;
  font-family: var(--fontRomanBold);
  color: var(--white);
  font-weight: bold;
  border-bottom: 8px solid var(--redCyber);
}

.detals-description {
  margin: 0;
  padding: 0;
}

.detals-description-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  &:last-child {
    margin-bottom: 0;
  }
}

.detals-description-item + .detals-description-item {
  margin-top: 20px;
}

.detals-description-item-text {
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--white);
  line-height: 22px;
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
}
</style>