<template lang="pug">
#nightSun.night-sun(
  @click="nightModeCheck",
  data-night,
  :data-title="nightMode ? nightModeOff : nightModeOn"
)
  i.fa.fa-3x.fa-moon-o(aria-hidden="true")
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["nightMode", "nightModeOn", "nightModeOff"]),
  },
  methods: {
    nightModeCheck() {
      this.$store.commit("nightModeCheck");
    },
  },
};
</script>

<style lang="scss">
.night-sun {
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 15;
  height: 70px;
  width: 70px;
  right: 60px;
  top: 150px;
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

  @media (min-width: 480px) {
    height: 100px;
    width: 100px;
  }

  @media (min-width: 1170px) {
    right: 150px;
    height: 50px;
    width: 50px;
  }
}

.night-sun i {
  font-size: 4em;
}

@media (min-width: 480px) {
  .night-sun i {
    font-size: 6em;
  }
}

@media (min-width: 1120px) {
  .night-sun i {
    font-size: 3em;
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

.night .navigation .navigation__burger {
  &::before {
    background: var(--black);
  }

  &::after {
    background: var(--black);
  }

  span::before {
    background: var(--black);
  }
}

.night {
  .page__background {
    display: none;
  }

  .navigation {
    background: transparent;

    &::after,
    &::before {
      content: none;
    }
  }

  .logo {
    text-shadow: none;
    font-weight: 700;
    font-family: var(--fontRomanBold);
    color: var(--black);

    &:hover {
      text-shadow: none;
    }

    &::after {
      border-bottom: 7px solid var(--yellowcolor);
    }
  }

  .nav {
    text-shadow: none;
    font-weight: 700;
    font-family: var(--fontRomanBold);
    color: var(--black);
    background: var(--bgSidebarNight);

    &:after {
      border-bottom: 7px solid var(--yellowcolor);
    }

    &:hover {
      color: var(--blueLinkHover);
    }

    &--active {
      color: var(--blueLinkHover);
      border-bottom: 7px solid var(--yellowcolor);
    }
  }

  .navigation__social {
    @media (min-width: 1170px) {
      border-bottom: 5px solid var(--yellowcolor);
    }
  }

  .navigation__social .fa-2x,
  .header__bg-social .fa-2x {
    color: var(--black);
    text-shadow: 0 0 5px var(--white), 0 0 10px var(--white),
      0 0 20px var(--white), 0 0 40px var(--white);
  }
}

.night {
  .button-01 {
    font-weight: 700;
    font-family: var(--fontRomanBold);
    background-color: var(--yellowcolor);
    border: 4px solid var(--yellowcolor);
    transition: all 0.4s;
    color: var(--white);

    &:hover,
    &:active {
      opacity: 0.8;
      box-shadow: none;
      transition: all 0.4s;
    }

    &::after,
    &::before {
      content: none;
      opacity: 0;
      transition: all 0.4s;
    }
  }

  .button-02 {
    font-weight: 700;
    font-family: var(--fontRomanBold);
    color: var(--black);
    border: 4px solid var(--black);
    transition: all 0.4s;
    &::after,
    &::before {
      content: none;
      opacity: 0;
      transition: all 0.4s;
    }
  }

  .card {
    border: 4px solid var(--yellowcolor);
  }

  .card .card__text {
    border-top: 4px solid var(--yellowcolor);
  }

  .card__img {
    border-bottom: 2px solid var(--yellowcolor);
  }

  .neon span {
    animation: none;
  }

  .router-link-active.nav {
    border-bottom: 0px solid var(--black);
  }
}

.night {
  .header {
    background: transparent;

    &::before,
    &::after {
      display: none;
    }
  }

  .header__text-subtitle p {
    color: var(--black);
  }

  .header__text-title {
    font-weight: 700;
    font-family: var(--fontRomanBold);
    color: var(--black);

    &::after {
      background-color: var(--yellowcolor);
    }
  }

  .header__slide {
    background: var(--yellowcolor);
    box-shadow: 0px 14px 50px 0px var(--grayBg);
  }

  .header__slide::before {
    background: linear-gradient(140deg, #8ebbff 30%, #48ecb5);
  }
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

  .header__avatar {
    background-color: var(--yellowcolor);
    border: 10px double var(--bgSidebarNight);
  }

  .header__avatar_css:hover .avatar__title,
  .header__avatar_js:hover .avatar__title,
  .header__avatar_html:hover .avatar__title {
    color: var(--yellowcolor);
  }

  .avatar__title {
    color: var(--black);
    font-weight: 400;
  }
}

.night .portfolio {
  &::after {
    height: 0;
  }
  &::before {
    height: 0;
  }

  .portfolio__title {
    &::after {
      background-color: var(--yellowcolor);
    }
  }

  .portfolio__title,
  .portfolio__nav-item {
    color: var(--black);
    font-weight: 700;
    font-family: var(--fontRomanBold);
    transition: 0.5s ease-in-out;
  }

  .portfolio__nav-item:hover {
    color: var(--redcolor);
  }
}

.night .portfolio__nav {
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    color: var(--black);
    font-weight: 700;
    font-family: var(--fontRomanBold);

    &:hover {
      color: var(--blueLinkHover);
      border-bottom-color: var(--yellowcolor);
    }
  }

  .portfolio__dropdown-active {
    color: var(--yellowcolor);
    border-bottom: 5px solid var(--yellowcolor);

    &::before {
      color: var(--yellowcolor);
    }
  }

  .portfolio__dropdown-item {
    border: 5px solid var(--yellowcolor);
  }

  .portfolio__dropdown-item + .portfolio__dropdown-item {
    border-top: 0px solid #000;
  }

  .checkbox-all:checked + label,
  .checkbox-html:checked + label,
  .checkbox-less:checked + label,
  .checkbox-scss:checked + label,
  .checkbox-pug:checked + label,
  .checkbox-js:checked + label {
    color: var(--blueLinkHover);
    border-bottom-color: var(--yellowcolor);
  }

  label > [type="radio"]:checked + span,
  label > [type="radio"]:not(:checked) + span {
    color: var(--black);
    font-family: var(--fontRomanBold);
    letter-spacing: 1px;

    &:hover {
      color: var(--blueLinkHover);
      border-bottom-color: var(--yellowcolor);
      text-shadow: 0px 0px 5px #313131;
    }
  }

  label.checked > [type="radio"] + span {
    color: var(--blueLinkHover);
    border-bottom-color: var(--yellowcolor);
    text-shadow: 0px 0px 5px #313131;
  }
}

.night .timeline {
  background: transparent;

  &::after {
    display: none;
  }
  &::before {
    display: none;
  }

  .timeline__title {
    &::after {
      background-color: var(--yellowcolor);
    }
  }

  .timeline__title,
  .timeline__column-title,
  .timeline__column-desc {
    color: var(--black);
    font-weight: 700;
    font-family: var(--fontRomanBold);
  }

  .timeline__column-subtitle {
    color: var(--black);
  }

  .timeline__column-item {
    &::before,
    &::after {
      background-color: var(--bgSidebarNight);
    }
  }

  .timeline__column-item-img {
    background-color: var(--bgSidebarNight);
  }
}

.night .contact {
  background: linear-gradient(#50505080, #50505080),
    url("../../assets/img/contact/01.webp") top left / cover no-repeat;

  .contact-title {
    font-weight: 700;
    font-family: var(--fontRomanBold);

    &::after {
      background-color: var(--yellowcolor);
    }
  }

  .contact__form::before {
    background: linear-gradient(140deg, #8ebbff 30%, #48ecb5);
  }

  .contact__form::after {
    background: var(--yellowcolor);
    filter: blur(0px);
  }

  .contact-title {
    color: var(--white);
  }

  .timeline__column-title,
  .timeline__column-desc {
    color: var(--black);
  }

  .contact__info-desc {
    color: var(--white);
  }

  .contact__info::after {
    content: none;
  }

  .contact__info-table-rounded .contact__info-table-rounded-row:before {
    background-color: var(--yellowcolor);
  }

  .contact__form {
    box-shadow: 0px 28px 100px 0px #5a5a5a;
  }
}

.night .footer {
  background: var(--bgSidebarNight);

  &::after {
    display: none;
  }
  &::before {
    display: none;
  }
}

.night .footer-inner {
  background: var(--bgSidebarNight);
  height: 300px;
  &::after {
    display: none;
  }
  &::before {
    display: none;
  }

  .footer-inner-column {
    height: 300px;
  }

  .footer-inner__title,
  p {
    color: var(--black);
  }
}

.night .card-post {
  &::after {
    display: none;
  }
  &::before {
    display: none;
  }

  p,
  h2,
  h3,
  h4,
  svg {
    color: var(--black);
    fill: var(--black);
    border-bottom-color: var(--yellowcolor);
  }

  a {
    color: var(--yellowcolor);
  }

  input {
    background-color: rgb(37, 37, 37);
    color: var(--white);
    border: none;
  }

  .card-post__nav-title,
  .card-post__nav-desc {
    font-weight: 700;
    font-family: var(--fontRomanBold);

    &::after {
      background-color: var(--yellowcolor);
    }
  }

  .card-post__content-carousel {
    background-color: var(--yellowcolor);
    border: 10px double var(--bgSidebarNight);
  }

  .carousel-project__btn-next,
  .carousel-project__btn-prev {
    border: 5px solid var(--bgSidebarNight);
    transition: 0.4s linear;
  }

  .carousel-project__btn-next svg,
  .carousel-project__btn-prev svg {
    fill: var(--bgSidebarNight);
    transition: 0.4s linear;
  }

  .carousel-project__btn-next:hover svg,
  .carousel-project__btn-prev:hover svg {
    fill: var(--yellowcolor);
  }

  .carousel-project__btn-next:hover,
  .carousel-project__btn-prev:hover {
    border: 5px solid var(--yellowcolor);
  }
}

.night .header::after {
  content: none;
}

.night .link-project-item i {
  color: var(--yellowcolor);
}

.night label {
  color: var(--white);
}

.night .timeline__column-item-text {
  background: var(--bgSidebarNight);

  &::after {
    background: var(--bgSidebarNight);
  }
  &::before {
    background: var(--bgSidebarNight);
  }
}

.night .full-page {
  .full-page-wrap {
    background-color: var(--yellowcolor);
  }

  .full-page__title h2 span {
    color: var(--yellowcolor);
  }

  .full-page__desc {
    border-bottom-color: var(--yellowcolor);
  }

  .full-page__img + .full-page__img {
    border-top-color: var(--yellowcolor);
  }
}

.night .sidebar {
  .sidebar-wrap {
    background: var(--bgSidebarNight);
  }

  .sidebar-wrap-bg {
    opacity: 0;
    visibility: hidden;
  }

  .sidebar__title {
    font-weight: 700;
    font-family: var(--fontRomanBold);
  }

  .sidebar__links-item-link {
    background: var(--black);
    font-family: var(--fontRomanBold);
  }

  .sidebar__links-item {
    box-shadow: 0px 0px 10px var(--yellowcolor), 0px 0px 20px var(--yellowcolor),
      0px 0px 40px var(--yellowcolor);
  }

  .sidebar__social .fa {
    text-shadow: 0px 0px 10px var(--yellowcolor),
      0px 0px 20px var(--yellowcolor), 0px 0px 40px var(--yellowcolor);
  }
}

.night .navigation__burger {
  background: var(--bgSidebarNight);
}
</style>