<template lang="pug">
#nightSun.night-sun(
  @click="nightModeCheck",
  data-night,
  :data-title="nightMode ? nightModeOff : nightModeOn"
)
  i.fa.fa-3x.fa-moon-o(aria-hidden="true")
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "my-night-mode",
  setup() {
    const store = useStore();

    return {
      nightMode: computed(() => store.getters.nightMode),
      nightModeOn: computed(() => store.getters.nightModeOn),
      nightModeOff: computed(() => store.getters.nightModeOff),
      nightModeCheck: () => store.commit("nightModeCheck"),
    };
  },
};
</script>

<style lang="scss" scoped>
.night-sun {
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 15;
  right: 60px;
  top: 60px;
  width: 60px;
  height: 60px;
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 35%;
  transition: 0.5s ease-in-out;
  animation-name: spin1;
  animation-timing-function: linear;
  animation-duration: 1.5s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  &:hover {
    animation: none;
    background-color: #e6dddd;
  }

  i:hover {
    display: inline-block;
    color: var(--blue);
    transition: 0.5s ease-in-out;
  }

  @media (min-width: 1170px) {
    top: auto;
    bottom: 100px;
    right: 150px;
  }
}

.night-sun:hover::after {
  content: attr(data-title);
  position: absolute;
  left: -35px;
  right: 0;
  bottom: -70px;
  z-index: 2;
  background: var(--black);
  color: var(--white);
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  width: 150px;
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 10px;
  transition: 0.5s ease-in-out;

  @media (min-width: 1170px) {
    font-size: 12px;
    bottom: -50px;
    width: 100px;
  }
}

.night-sun:hover::before {
  content: "";
  position: absolute;
  left: 30px;
  right: 0;
  bottom: -30px;
  z-index: 1;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 30px solid var(--black);
  transition: 0.5s ease-in-out;

  @media (min-width: 1170px) {
    left: 10px;
  }
}

.night {
  background: var(--white);

  .night-sun {
    color: var(--white);
  }
}
</style>