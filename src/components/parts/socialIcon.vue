<template lang="pug">
.social
  a.social-link(
    v-for="item in social.list",
    :key="item",
    :href="item.link",
    :class="item.wrapClass",
    target="_blank"
  )
    i.fa(aria-hidden="true", :class="item.iconClass")
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["social"]),
  },
};
</script>

<style scoped lang="scss">
.social {
  display: flex;
  align-items: center;
  transition: 0.5s ease-in-out;
  z-index: 5;
}

.social-link {
  position: relative;
  margin-right: 20px;
  color: var(--white);
  transition: 0.5s ease-in-out;

  &:last-child {
    margin-right: 0;
  }
}

.social-link .fa {
  font-size: 38px;
  line-height: 46px;
  text-shadow: 0 0 5px var(--redCyber), 0 0 10px var(--redCyber),
    0 0 20px var(--redCyber), 0 0 40px var(--redCyber), 0 0 80px var(--redCyber);
  transition: 0.5s ease-in-out;

  @media (min-width: 1170px) {
    font-size: 32px;
    line-height: 36px;
  }

  &:hover {
    color: var(--blueLinkHover);
  }
}
</style>