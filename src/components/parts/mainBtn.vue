<template lang="pug">
button.button(
  :type="btnType",
  :class="btnClass",
  :id="btnId",
  @click="$emit('clickAction', $event)"
)
  span {{ btnText }}
</template>
<script>
export default {
  props: {
    btnText: String,
    btnClass: String,
    btnType: {
      required: false,
      type: String,
      default: "button",
    },
    btnId: String,
  },
  emits: ["clickAction"],
};
</script>
<style scoped lang="scss">
.button {
  position: relative;
  display: inline-block;
  padding: 15px 15px;
  min-width: 200px;
  background-color: var(--redCyber50);
  border-radius: 40px;
  border: 4px solid var(--redCyber);
  font-size: 18px;
  line-height: 22px;
  font-family: var(--fontNeon);
  color: var(--blueLinkHover);
  font-weight: bold;
  text-decoration: none;
  transition: 0.5s;
  outline: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    transition-delay: 1.5s;
    box-shadow: 0 0 10px var(--redCyber50), 0 0 20px var(--redCyber50),
      0 0 40px var(--redCyber50), 0 0 80px var(--redCyber50),
      0 0 160px var(--redCyber50);
  }

  @media (min-width: 1170px) {
    padding: 20px;
    font-size: 22px;
    line-height: 26px;
  }

  span {
    z-index: 25;
  }

  &::before {
    position: absolute;
    top: 50%;
    left: -20px;
    content: "";
    transform: translate(0%, -50%);
    height: 4px;
    width: 20px;
    border-radius: 40px;
    background: var(--redCyber);
    box-shadow: 8px -8px 0px var(--redCyber), 8px 8px 0px var(--redCyber);
    z-index: -1;
    transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
    transition-delay: 1s, 0.5s, 0s, 0s;
  }

  &:hover::before {
    width: 70%;
    height: 100%;
    left: -4px;
    box-shadow: 100% 0 0 var(--redCyber), 100% 0 0 var(--redCyber);
    transition-delay: 0s, 0.5s, 1s, 1s;
  }

  &::after {
    position: absolute;
    top: 50%;
    right: -20px;
    content: "";
    transform: translate(0%, -50%);
    height: 4px;
    width: 20px;
    border-radius: 40px;
    background: var(--redCyber);
    box-shadow: -8px -8px 0px var(--redCyber), -8px 8px 0px var(--redCyber);
    z-index: -1;
    transition: width 0.5s, right 0.5s, height 0.5s, box-shadow 0.5s;
    transition-delay: 1s, 0.5s, 0s, 0s;
  }

  &:hover::after {
    width: 70%;
    height: 100%;
    right: -4px;
    box-shadow: 100% 0 0 var(--redCyber), 100% 0 0 var(--redCyber);
    transition-delay: 0s, 0.5s, 1s, 1s;
  }
}

.button--inner {
  filter: hue-rotate(240deg);
}

// -------------mainBtn---------------
.night .page {
  .button {
    font-weight: 700;
    font-family: var(--fontRomanBold);
    background-color: var(--yellowcolor);
    border: 4px solid var(--yellowcolor);
    transition: all 0.4s;
    color: var(--white);

    &:hover,
    &:active {
      opacity: 0.8;
      box-shadow: none;
      transition: all 0.4s;
    }

    &::after,
    &::before {
      content: none;
      opacity: 0;
      transition: all 0.4s;
    }
  }

  .button--inner {
    font-weight: 700;
    font-family: var(--fontRomanBold);
    color: var(--black);
    border: 4px solid var(--black);
    transition: all 0.4s;
    &::after,
    &::before {
      content: none;
      opacity: 0;
      transition: all 0.4s;
    }
  }
}
// -------------mainBtn---------------
</style>