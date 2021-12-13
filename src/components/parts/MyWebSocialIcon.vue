<template lang="pug">
.social
  a.social-vk(href="https://vk.com/id65683827", target="_blank")
    i.fa.fa-vk.fa-2x(aria-hidden="true")
  a.social-facebook(href="https://wa.me/+79253215539", target="_blank")
    i.fa.fa-whatsapp.fa-2x(aria-hidden="true")
  a.social-email(href="mailto:sasha89253215539@yandex.ru", target="_blank")
    i.fa.fa-envelope.fa-2x(aria-hidden="true")
  a.social-telegram(href="https://telegram.im/@Voojaxx", target="_blank")
    i.fa.fa-telegram.fa-2x(aria-hidden="true")
  a.social-github(href="https://github.com/AleksandrVorobyov", target="_blank")
    i.fa.fa-github.fa-2x(aria-hidden="true")
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.social {
  display: flex;
  align-items: center;
  transition: 0.5s ease-in-out;
  z-index: 5;

  a {
    position: relative;
    margin-right: 20px;
    color: var(--white);
    transition: 0.5s ease-in-out;

    &:last-child {
      margin-right: 0;
    }
  }
}

.social .fa-2x {
  font-size: 34px;
  text-shadow: 0 0 5px var(--redCyber), 0 0 10px var(--redCyber),
    0 0 20px var(--redCyber), 0 0 40px var(--redCyber), 0 0 80px var(--redCyber);
  transition: 0.5s ease-in-out;

  @media (min-width: 400px) {
    font-size: 48px;
  }

  @media (min-width: 600px) {
    font-size: 64px;
  }

  @media (min-width: 1170px) {
    font-size: 32px;
  }

  &:hover {
    color: #73ebeb;
  }
}
</style>