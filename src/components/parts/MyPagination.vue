<template lang="pug">
button.pagination(@click="$emit('clickActionPrev')")
  span {{ paginationPrev }}
button.pagination(@click="$emit('clickActionNext')")
  span {{ paginationNext }}
</template>

<script>
export default {
  props: {
    paginationPrev: String,
    paginationNext: String,
  },
  emits: ["clickActionPrev", "clickActionNext"],
};
</script>

<style lang="scss">
.pagination {
  position: relative;
  width: 100%;
  height: 60px;
  font-family: var(--fontPagination);
  color: var(--white);
  background: rgba(0, 0, 0, 0.4);
  text-decoration: none;
  outline: none;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  border: none;

  transition: all 0.5s ease-in-out 0.6s, box-shadow 0.4s ease-out 0.6s;
  z-index: 50;
  overflow: hidden;
  cursor: pointer;
  // -webkit-box-reflect: below 10px linear-gradient(transparent, #0002);
}

.pagination:hover {
  background: var(--redCyber) var(--paginationBtnBg);
  transition-delay: 0.8s;
  animation: pixelBtn 0.8s steps(8) forwards;
  background-size: 180px;
  box-shadow: 0px 0px 10px var(--redCyber), 0px 0px 20px var(--redCyber),
    0px 0px 40px var(--redCyber);
}

.pagination::before,
.pagination::after {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  transition: all 0.4s linear 0.2s;
}

.pagination::before {
  top: 0;
  left: 0;
  border-top: 2px solid var(--blueLinkHover);
  border-left: 2px solid var(--blueLinkHover);
}

.pagination::after {
  bottom: 0;
  right: 0;
  border-bottom: 2px solid var(--blueLinkHover);
  border-right: 2px solid var(--blueLinkHover);
}

.pagination:hover::before,
.pagination:hover::after {
  width: 100%;
  height: 100%;
}

// -------------night---------------
.night .pagination:hover {
  background: var(--yellowcolor) var(--paginationBtnBgWhite);
  transition-delay: 0.8s;
  animation: pixelBtn 0.8s steps(8) forwards;
  background-size: 180px;
  box-shadow: 0px 0px 10px var(--yellowcolor), 0px 0px 20px var(--yellowcolor),
    0px 0px 40px var(--yellowcolor);
}
// -------------night---------------
</style>