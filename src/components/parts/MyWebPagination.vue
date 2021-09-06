<template lang="pug">
button.pagination(
  @click=" prevProject(), $emit('clickAction')"
)
  span {{ paginationPrev }}
button.pagination(
  @click="nextProject(), $emit('clickAction')"
)
  span {{ paginationNext }}
</template>

<script>
export default {
  props: {
    paginationPrev: String,
    paginationNext: String,
  },
  emits:[
    "clickAction"
  ],
  methods: {
    prevProject() {
      this.$store.commit("prevProject");
    },
    nextProject() {
      this.$store.commit("nextProject");
    },
  },
  mounted() {
  }
};
</script>

<style lang="scss">
.pagination {
  position: relative;
  width: 100%;
  height: 60px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: var(--white);
  background: rgba(0, 0, 0, 0.4);
  text-decoration: none;
  outline: none;
  text-transform: uppercase;
  line-height: 60px;
  text-align: center;
  letter-spacing: 2px;
  border: none;

  transition: all 0.5s ease-in-out 0.6s, box-shadow 0.4s ease-out 0.6s;
  z-index: 50;
  overflow: hidden;
  cursor: pointer;
  -webkit-box-reflect: below 10px linear-gradient(transparent, #0002);
}

.pagination:hover {
  background: #ec0b36 url("../../assets/img/btn/pixel.png");
  transition-delay: 0.8s;
  animation: pixelBtn 0.8s steps(8) forwards;
  background-size: 180px;
  box-shadow: 0px 0px 10px #ec0b36, 0px 0px 20px #ec0b36, 0px 0px 40px #ec0b36;
}

.pagination::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 20px;
  height: 20px;
  border-top: 2px solid #00ffff;
  border-left: 2px solid #00ffff;
  transition: all 0.4s linear 0.2s;
}

.pagination::after {
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  width: 20px;
  height: 20px;
  border-bottom: 2px solid aqua;
  border-right: 2px solid aqua;
  transition: all 0.4s linear 0.2s;
}

.pagination:hover::before {
  width: 100%;
  height: 100%;
}

.pagination:hover::after {
  width: 100%;
  height: 100%;
}
</style>