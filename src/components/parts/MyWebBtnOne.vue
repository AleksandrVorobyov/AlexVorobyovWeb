<template lang="pug">
router-link.button-01(:to="link") 
  span {{ text }}
</template>

<script>
export default {
  props: {
    link: String,
    text: String,
  },
};
</script>

<style lang="scss">
.button-01, .button-02 {
  position: relative;
  display: inline-block;
  padding: 20px 40px;
  background-color: var(--redCyber50);
  border-radius: 40px;
  border: 4px solid var(--redCyber);
  font-size: 18px;
  font-family: var(--fontNeon);
  color: var(--blueLinkHover);
  font-weight: bold;
  text-decoration: none;
  transition: 0.5s;
  outline: none;
  cursor: pointer;

  &:hover {
    transition-delay: 1.5s;
    box-shadow: 0 0 10px var(--redCyber50), 0 0 20px var(--redCyber50),
      0 0 40px var(--redCyber50), 0 0 80px var(--redCyber50),
      0 0 160px var(--redCyber50);
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

  @media (min-width: 400px) {
    font-size: 24px;
  }

  @media (min-width: 600px) {
    font-size: 34px;
  }

  @media (min-width: 1170px) {
    font-size: 22px;
  }
}
</style>