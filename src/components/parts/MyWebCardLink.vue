<template lang="pug">
.link-project
  h4.link-project-title {{ linkProjectTitle }}
  .link-project-item(v-for="item in linkProjectItem", :key="item")
    i.fa.fa-2x(aria-hidden="true", :class="item.class")
    a(:href="item.link", target="_blank") {{ item.text }}
</template>

<script>
export default {
  name: "",
  props: {
    linkProjectTitle: String,
    linkProjectItem: Array,
  },
};
</script>

<style lang="scss">
.link-project {
  margin-bottom: 50px;
}

.link-project-title {
  display: inline-block;
  margin-bottom: 30px;
  font-size: 26px;
  font-weight: 700;
  font-family: var(--fontRomanBold);
  color: var(--white);
  line-height: 1.2;
  border-bottom: 8px solid var(--redCyber);

  @media (min-width: 480px) {
    font-size: 32px;
  }

  @media (min-width: 600px) {
    font-size: 44px;
  }

  @media (min-width: 1170px) {
    font-size: 26px;
  }
}

.link-project-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
    margin-left: 4px;
  }

  i {
    color: var(--yellowcolor);
    margin-right: 15px;
    transition: all 0.4s linear;
  }

  &:hover a {
    color: var(--blueCyber);
  }

  &:hover i {
    transition: 0.5s ease-in-out;
    color: var(--blueCyber);
  }
}

.link-project-item a {
  font-size: 20px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--yellowcolor);
  text-decoration: underline;
  line-height: 1.2;
  transition: 0.3s ease-in-out;

  @media (min-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 600px) {
    font-size: 28px;
  }

  @media (min-width: 1170px) {
    font-size: 18px;
  }
}

.link-project-item .fa-2x {
  font-size: 3em;

  @media (min-width: 1170px) {
    font-size: 2em;
  }
}

.link-project-item svg {
  margin-right: 10px;
}
</style>