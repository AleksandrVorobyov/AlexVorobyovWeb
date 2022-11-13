<template lang="pug">
.header__avatar
  div(v-for="item in skillsAvatar", :key="item", :class="item.classItem")
    h4.header__avatar-title {{ item.text }}
    .header__avatar-img
      img(:src="require('@/assets/img/header/' + item.src)", :alt="item.alt")
  img(:src="require('@/assets/img/' + master.src)", :alt="master.alt")
</template>
<script>
export default {
  name: "my-header-avatar",
  props: {
    skillsAvatar: {
      type: Array,
      required: true,
    },
    master: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
.header__avatar {
  position: relative;
  box-shadow: 10px 14px 16px -3px rgba(34, 60, 80, 0.18);
  height: 280px;
  width: 280px;
  border-radius: 50%;
  z-index: 5;
  border: 10px double var(--redCyber);
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 auto;

  @media (min-width: 480px) {
    height: 320px;
    width: 320px;
  }

  @media (min-width: 768px) {
    height: 430px;
    width: 430px;
  }

  img {
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
}

.header__avatar_html,
.header__avatar_css,
.header__avatar_js {
  position: absolute;
  width: 120px;
  height: 120px;
  transition: 0.5s linear;

  @media (min-width: 480px) {
    height: 140px;
    width: 140px;
  }

  @media (min-width: 1170px) {
    &:hover {
      transform: translateY(-15px);

      .header__avatar-title {
        color: var(--redCyber);
        text-shadow: 1px 1px 2px #000000;
      }
    }
  }
}

.header__avatar_js:hover {
  @media (min-width: 1170px) {
    transform: translate(-50%, -15px);
  }
}

.header__avatar_html {
  top: -90px;
  left: -25px;

  @media (min-width: 480px) {
    top: -100px;
  }

  @media (min-width: 768px) {
    left: 0px;
  }
}

.header__avatar_css {
  top: -90px;
  right: -25px;

  @media (min-width: 480px) {
    top: -100px;
  }

  @media (min-width: 768px) {
    right: 0px;
  }
}

.header__avatar_js {
  top: -130px;
  left: 50%;
  transform: translate(-50%, 0);

  @media (min-width: 480px) {
    top: -140px;
  }
}

.header__avatar-title {
  font-family: var(--fontRomanBold);
  text-align: center;
  color: var(--white);
  font-size: 22px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 1px;
  transition: 0.5s linear;
}

.header__avatar-img {
  width: 120px;
  height: 120px;

  @media (min-width: 480px) {
    height: 140px;
    width: 140px;
  }

  img {
    border-radius: 0;
  }
}

// -------------night---------------
.night {
  .header__avatar {
    background-color: var(--yellowcolor);
    border: 10px double var(--bgSidebarNight);
  }

  .header__avatar_css:hover .header__avatar-title,
  .header__avatar_js:hover .header__avatar-title,
  .header__avatar_html:hover .header__avatar-title {
    color: var(--yellowcolor);
  }

  .header__avatar-title {
    color: var(--black);
    font-weight: 400;
  }
}
// -------------night---------------
</style>