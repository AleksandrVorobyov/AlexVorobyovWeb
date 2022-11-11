<template lang="pug">
.preloader
  .preloader-spin
    div 
      div 
        div 
          div 
            div 
              div 
                div 
                  div 
                    div
</template>

<script>
export default {
  setup() {
    window.onload = function () {
      document.querySelector(".preloader").classList.add("preloader-remove");
    };
  }
};
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--grayText);
  transition: all 0.5s;
  opacity: 1;
}

.preloader-remove {
  opacity: 0;
  z-index: -10;
}

.preloader-spin div {
  border: 4px inset var(--redCyber);
  border-radius: 100%;
  padding: 4px;
  animation: preloader-spin 15s linear infinite;
  box-shadow: 2px 0px 5px var(--white), 2px 0px 10px var(--lightGrayText),
    2px 0px 20px var(--redCyber);
}

@keyframes preloader-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>