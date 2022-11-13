<template lang="pug">
.portfolio__dropdown.checked(
  :class="dropPort.labelClass",
  v-if="!portfolioNavHidden"
)
  .portfolio__dropdown-active(@click="$emit('dropdown', $event)") {{ dropPort.text }}
  .portfolio__dropdown-list(v-if="!dropHidden")
    .portfolio__dropdown-item(@click="$emit('dropdownOption', $event)")(
      v-for="item in menu",
      :key="item.id",
      :class="item.labelClass",
      :data-menu="item.dataMenu"
    ) {{ item.text }}
</template>
<script>
export default {
  props: {
    dropPort: {
      type: Object,
      required: true,
    },
    menu: {
      type: Array,
      required: true,
    },
    dropHidden: {
      type: Boolean,
      required: true,
    },
    portfolioNavHidden: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["dropdown", "dropdownOption"],
};
</script>
<style scoped lang="scss">
.portfolio__dropdown {
  position: relative;
  display: inline-block;
  min-width: 300px;
  min-height: 60px;
}

.portfolio__dropdown-active {
  padding: 15px 15px;
  font-size: 28px;
  line-height: 1;
  letter-spacing: 5px;
  font-weight: 700;
  font-family: var(--fontNeon);
  color: var(--redCyber);
  background: var(--white);
  cursor: pointer;
  border-radius: 10px;
  text-align: left;
  transition: color 0.4s linear, border 0.4s linear;
  border-bottom: 5px solid var(--redCyber);
}

.portfolio__dropdown-active:hover {
  color: var(--blueCyber);
  border-bottom: 5px solid var(--blueCyber);

  &::before {
    color: var(--blueCyber);
  }
}

.portfolio__dropdown-active::before {
  content: "\261F";
  position: absolute;
  top: 50%;
  right: 20px;
  color: var(--redCyber);
  font-size: 28px;
  transition: color 0.4s linear;
  transform: translateY(-50%);
}

.portfolio__dropdown-list {
  position: absolute;
  display: grid;
  top: 100%;
  left: 0;
  width: 100%;
}

.portfolio__dropdown-item {
  display: inline-block;
  width: 100%;
  padding: 15px 15px;
  font-size: 28px;
  letter-spacing: 5px;
  font-weight: 700;
  font-family: var(--fontNeon);
  cursor: pointer;
  border: 5px solid var(--redCyber);
  background: var(--white);
  z-index: 500;
  transition: background 0.4s linear;
}

.portfolio__dropdown-item + .portfolio__dropdown-item {
  border-top: 0px solid #000;
}

.portfolio__dropdown-item:hover {
  background: var(--blueCyber);
}
</style>