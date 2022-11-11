<template lang="pug">
section.contact
  canvas#pretty-bg
  .container
    .contact-wrap
      h3.contact-title.neon(v-html="contact.neonContactTitle")
      .contact-body
        .contact__info
          p.contact__info-desc {{ contact.contactInfoDesc }}
          .contact__info-table
            ol.contact__info-table-list
              li.contact__info-table-list-item(
                v-for="item in contact.contactTableList",
                :key="item"
              ) 
                p.contact__info-table-list-text {{ item.text }}
                a.contact__info-table-list-link(
                  :href="item.linkTipy + item.link"
                ) {{ item.title }}
          .contact__info-social.header__bg-social
            social-icon
        .contact__form-wrap
          contact-form
</template>

<script>
import { mapGetters } from "vuex";
import contactForm from "./parts/MyContactForm.vue";

export default {
  components: {
    contactForm,
  },
  computed: {
    ...mapGetters(["contact"]),
  },
  methods: {
    createContact() {
      this.$store.commit("createContact");
    },
    contactSectionAnim() {
      this.$store.dispatch("contactSectionAnim");
    },
  },
  mounted() {
    this.createContact();
    this.contactSectionAnim();
  },
};
</script>

<style lang="scss" scoped>
.contact {
  position: relative;
  padding: 35px 0;
  background: linear-gradient(#f4f8f980, #f4f8f998),
    var(--contactBg) top left / cover no-repeat;
  background-blend-mode: hue;
  overflow-x: hidden;
  z-index: 200;
  min-height: 80vh;

  @media (min-width: 768px) {
    padding: 50px 0px;
  }

  @media (min-width: 1170px) {
    padding: 75px 0px;
  }
}

.contact > .container > .contact-wrap > * {
  z-index: 5;
}

#pretty-bg {
  width: 0;
  height: 0;

  @media (min-width: 1170px) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}

.contact-title {
  position: relative;
  display: inline-block;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 35px;
  font-size: 32px;
  line-height: 36px;
  font-family: var(--fontNeon);
  color: var(--white);
  font-weight: bold;
  z-index: 5;

  @media (min-width: 480px) {
    font-size: 44px;
    line-height: 48px;
  }

  @media (min-width: 1170px) {
    margin-bottom: 70px;
    font-size: 64px;
    line-height: 68px;
  }

  &::after {
    position: absolute;
    content: "";
    clear: both;
    background-color: var(--redCyber);
    width: 100%;
    height: 10px;
    bottom: -7px;
    left: -3px;
    z-index: -1;
    transition: 0.5s ease-in-out;
  }
}

.contact-wrap {
  display: grid;
}

.contact-body {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  @media (min-width: 1170px) {
    flex-direction: row;
  }
}

.contact__info {
  position: relative;
  display: grid;
  gap: 20px;
  z-index: 10;
  max-width: 800px;

  @media (min-width: 1170px) {
    max-width: auto;
  }
}

.contact__info-desc {
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--white);
  line-height: 26px;
  text-align: left;
  text-shadow: 0 0 5px rgb(26, 26, 26);

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 26px;
  }

  @media (min-width: 1170px) {
    font-size: 20px;
    line-height: 24px;
  }
}

.contact__info-table {
  z-index: 10;
}

.contact__info-table-list {
  position: relative;
  display: grid;
  gap: 20px;
  counter-reset: li;
  list-style: none;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  margin: 0 auto;

  @media (min-width: 480px) {
    max-width: 450px;
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }

  @media (min-width: 1170px) {
    max-width: auto;
    margin: 0;
  }
}

.contact__info-table-list-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 20px 15px 15px;
  background: var(--white);
  color: var(--grayBg);
  text-decoration: none;
  border-radius: 12px;
  transition: 0.3s ease-out;
  z-index: 10;

  @media (min-width: 480px) {
    padding: 20px 30px;
  }

  @media (min-width: 768px) {
    gap: 0px;
    flex-direction: row;
  }
}

.contact__info-table-list .contact__info-table-list-item:hover {
  background: var(--lightGrayBg);
}

.contact__info-table-list .contact__info-table-list-item:before {
  content: counter(li);
  counter-increment: li;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  margin-top: -1.3em;
  background: var(--redCyber);
  color: var(--black);
  height: 2em;
  width: 2em;
  line-height: 2em;
  border: 0.3em solid var(--white);
  text-align: center;
  font-weight: bold;
  border-radius: 2em;
  transition: all 0.3s ease-out;

  @media (min-width: 768px) {
    left: -1.3em;
    top: 50%;
    transform: translateX(0%);
  }
}

.contact__info-table-list-text {
  font-size: 20px;
  line-height: 24px;
  font-family: var(--fontRomanBold);
  color: var(--black);
  font-weight: bold;

  @media (min-width: 480px) {
    font-size: 22px;
    line-height: 26px;
  }

  @media (min-width: 1170px) {
    font-size: 20px;
    line-height: 24px;
  }
}

.contact__info-table-list-link {
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  font-family: var(--fontRomanBold);
  color: var(--redCyber);
  text-decoration: none;
  transition: all 0.3s ease-out;

  @media (min-width: 480px) {
    font-size: 22px;
    line-height: 26px;
  }

  @media (min-width: 1170px) {
    font-size: 20px;
    line-height: 24px;
  }

  &:hover {
    color: var(--yellowcolor);
  }
}

.contact__info-social {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 5;

  @media (min-width: 1170px) {
    justify-content: flex-start;
  }
}

// -------------night---------------
.night .contact {
  background: linear-gradient(#50505080, #50505080),
    var(--contactBg) top left / cover no-repeat;

  .contact-title {
    font-weight: 700;
    font-family: var(--fontRomanBold);

    &::after {
      background-color: var(--yellowcolor);
    }
  }

  .contact__form::before {
    background: var(--bgContactFormWhite);
  }

  .contact__form::after {
    background: var(--yellowcolor);
    filter: blur(0px);
  }

  .contact-title {
    color: var(--white);
  }

  .contact__info-table-list-link {
    color: var(--blueLinkHover);
  }

  .contact__info-desc {
    color: var(--white);
  }

  .contact__info::after {
    content: none;
  }

  .contact__info-table-list .contact__info-table-list-item:before {
    background: var(--yellowcolor);
  }

  .contact__form-wrap .contact__form {
    box-shadow: none;
  }
}
// -------------night---------------
</style>