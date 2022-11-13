<template lang="pug">
.header__bg-wrap
  .header__bg-item
    .header__bg-title.neon(v-html="headerBg.neonHeaderTitleBgFirst")
    .header__bg-skills
      ul
        li(v-for="item in headerBg.mySkills") {{ item }}
    .header__bg-button
      my-btn(
        :btnInfo="headerBg.headerBgBtn",
        @clickAction="$emit('clickToPage', headerBg.headerBgBtn.link)"
      )
  .header__bg-item
    .header__bg-title.neon(v-html="headerBg.neonHeaderTitleBgSecond")
    .header__bg-social
      my-social-icon
    a.header__bg-email(:href="'mailto:' + myEmail") {{ myEmail }}
</template>
<script>
export default {
  name: "my-header-bg",
  props: {
    headerBg: {
      type: Object,
      required: true,
    },
    myEmail: {
      type: String,
      required: true,
    },
  },
  emits: ["clickToPage"],
};
</script>
<style scoped lang="scss">
.header__bg-wrap {
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 1170px) {
    justify-content: space-between;
    flex-direction: row;
  }
}

.header__bg-item {
  background-color: rgba(23, 115, 141, 0.25);
  border-radius: 10px;
  padding: 15px;

  @media (min-width: 1170px) {
    background: transparent;
    border-radius: 5px;
    padding: 10px;
  }
}

.header__bg-item:last-child {
  margin-bottom: 30px;

  @media (min-width: 1170px) {
    margin-bottom: 0;
  }
}

.header__bg-title {
  margin-bottom: 30px;
  font-size: 32px;
  line-height: 36px;
  font-family: var(--fontNeon);
  color: var(--white);
  font-weight: 700;

  @media (min-width: 1170px) {
    margin-bottom: 50px;
    font-size: 40px;
    line-height: 44px;
  }
}

.header__bg-skills ul {
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  list-style-type: none;

  li {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    font-family: var(--fontRomanReg);
    color: var(--white);
    text-shadow: 0px 3px 10px rgba(255, 255, 255, 0.4);

    @media (min-width: 1170px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
}

.header__bg-button {
  display: flex;

  @media (min-width: 480px) {
    margin-left: 20px;
  }

  @media (min-width: 1170px) {
    margin-left: 0;
  }
}

.header__bg-social {
  margin-bottom: 30px;
}

.header__bg-email {
  font-size: 24px;
  line-height: 28px;
  font-family: var(--fontRomanReg);
  font-weight: 400;
  color: var(--white);
  text-decoration: underline;
  transition: 0.5s ease-in-out;

  &:hover {
    color: var(--yellowcolor);
  }

  &:focus,
  &:active {
    color: var(--redcolor);
  }
}

// -------------night---------------
.night {
  .header__bg-title,
  .header__bg-title {
    font-weight: 700;
    font-family: var(--fontRomanBold);
    color: var(--black);
  }

  .header__bg-skills li {
    color: var(--black);
  }

  .header__bg-email {
    color: var(--black);

    &:hover {
      color: var(--blue);
    }

    &:active {
      color: var(--redcolor);
    }
  }

  .header__bg-img {
    border: 5px solid var(--yellowcolor);
    box-shadow: none;

    &::after {
      background: transparent;
    }
    &::before {
      background: transparent;
    }
  }

  .header__bg-item {
    background-color: var(--bgSidebarNight);
    border-radius: 5px;
    padding: 10px;

    @media (min-width: 1170px) {
      background: transparent;
    }
  }
}
// -------------night---------------
</style>