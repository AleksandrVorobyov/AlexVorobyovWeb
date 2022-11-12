<template lang="pug">
button.btn-menu(
  :type="btnInfo.type",
  :id="btnInfo.id",
  :class="btnInfo.class",
  @click="$emit('clickAction', $event)"
) {{ btnInfo.text }}
</template>
<script>
export default {
  name: "my-btn-menu",
  props: {
    btnInfo: {
      type: Object,
      required: true
    }
  },
  emits: ["clickAction"],
};
</script>
<style scoped lang="scss">
.btn-menu {
  display: inline-block;
  position: relative;
  padding: 15px 30px;
  font-size: 20px;
  line-height: 24px;
  font-family: var(--fontNeon);
  color: var(--white);
  font-weight: bold;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  background: var(--redCyber);
  border: none;
  outline: none;
  border-radius: 10px;
  z-index: 5;
  overflow: hidden;
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    bottom: 0px;
    left: 0px;
    width: 0;
    height: 7px;
    background: var(--blueCyber);
    transition: 0.5s linear;
  }

  &:hover {
    color: var(--blueCyber);
  }

  &:hover:after {
    width: 100%;
  }

  &:active:after {
    width: 100%;
  }
}

.btn-menu--active {
  color: var(--blueCyber);

  &::after {
    width: 100%;
  }
}
</style>