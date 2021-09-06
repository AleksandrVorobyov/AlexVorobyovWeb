<template lang="pug">
section.contact
  canvas#pretty-bg
  .container
    .contact-title-wrapper
      transition(name="fade", mode="out-in", appear)
        h3.contact-title.neon(v-html="neonContactTitle")
    .contact-wrap
      transition(name="fade", mode="out-in", appear)
        .contact__info
          p.contact__info-desc {{ contactInfoDesc }}
          .contact__info-table
            ol.contact__info-table-rounded
              li(v-for="item in contactTableList", :key="item") 
                .contact__info-table-rounded-row
                  p {{ item.text }}
                  a(:href="item.linkTipy + item.link") {{ item.title }}
          .contact__info-social.header__bg-social
            my-web-social-icon
      transition(name="fade", mode="out-in", appear)
        my-web-form
</template>

<script>
import MyWebSocialIcon from "./parts/MyWebSocialIcon.vue";
import MyWebForm from "./parts/MyWebForm.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    MyWebSocialIcon,
    MyWebForm,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["contactInfoDesc", "contactTableList", "neonContactTitle"]),
  },
  methods: {
    createContact() {
      this.$store.commit("createContact");
    },
  },
  mounted() {
    this.createContact();
  },
};
</script>

<style lang="scss">
.contact {
  position: relative;
  padding: 60px 15px;
  background: linear-gradient(#f4f8f980, #f4f8f998),
    url("../assets/img/contact/01.webp") top left / cover no-repeat;
  background-blend-mode: hue;
  overflow-x: hidden;
  z-index: 200;
  min-height: 80vh;

  @media (min-width: 400px) {
    padding: 60px 30px;
  }

  @media (min-width: 600px) {
    padding: 120px 30px;
  }

  @media (min-width: 1170px) {
    padding: 120px 15px;
  }
}

#pretty-bg {
  width: 0;
  height: 0;
  @media (min-width: 1260px) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
}

.contact-title-wrapper {
  text-align: center;
  margin-bottom: 70px;
}

.contact-title {
  position: relative;
  display: inline-block;
  font-size: 32px;
  font-family: var(--fontNeon);
  color: var(--white);
  font-weight: bold;
  z-index: 5;

  @media (min-width: 400px) {
    font-size: 40px;
  }

  @media (min-width: 480px) {
    font-size: 50px;
  }

  @media (min-width: 600px) {
    font-size: 72px;
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

  @media (min-width: 1170px) {
    font-size: 64px;
  }
}

.contact-wrap {
  display: flex;
  flex-direction: column;

  @media (min-width: 1170px) {
    flex-direction: row;
  }
}

.contact__info {
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: auto;

  @media (min-width: 1170px) {
    margin-right: 50px;
    max-width: auto;
  }
}

.contact__info-desc {
  margin-top: 0;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--white);
  line-height: 1.4;
  text-align: left;
  text-shadow: 0 0 5px rgb(26, 26, 26);

  @media (min-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 600px) {
    font-size: 30px;
  }

  @media (min-width: 1170px) {
    font-size: 20px;
  }
}

.contact__info-table {
  z-index: 10;

  @media (min-width: 600px) {
    margin-left: 15px;
  }

  @media (min-width: 900px) {
    margin-left: 0;
  }
}

.contact__info-table-rounded {
  counter-reset: li;
  list-style: none;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  font-size: 24px;
  padding: 0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);

  @media (min-width: 1170px) {
    font-size: 14px;
  }
}

.contact__info-table-rounded .contact__info-table-rounded-row {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 6px 6px 6px 6px;
  margin: 40px 0;
  background: var(--white);
  color: var(--grayBg);
  text-decoration: none;
  border-radius: 12px;
  transition: 0.3s ease-out;
  z-index: 10;

  @media (min-width: 400px) {
    padding: 6px 32px 6px 32px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    margin: 20px 0;
  }
}

.contact__info-table-rounded .contact__info-table-rounded-row:hover {
  background: var(--lightGrayBg);
}

.contact__info-table-rounded .contact__info-table-rounded-row:before {
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

  @media (min-width: 600px) {
    left: -1.3em;
    top: 50%;
    transform: translateX(0%);
  }
}

.contact__info-table-rounded-row p {
  font-size: 20px;
  font-family: var(--fontRomanBold);
  color: var(--black);
  font-weight: bold;
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 600px) {
    font-size: 28px;
  }

  @media (min-width: 1170px) {
    font-size: 20px;
  }
}

.contact__info-table-rounded-row span {
  font-size: 20px;
  font-family: var(--fontRomanBold);
  font-weight: bold;
  line-height: 1.2;
  color: var(--black);

  @media (min-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 600px) {
    font-size: 28px;
  }

  @media (min-width: 1170px) {
    font-size: 20px;
  }
}

.contact__info-table-rounded-row a {
  font-size: 20px;
  font-weight: bold;
  font-family: var(--fontRomanBold);
  color: var(--blueCyber);
  line-height: 1.2;
  text-decoration: none;
  transition: all .3s ease-out;

  @media (min-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 600px) {
    font-size: 28px;
  }

  &:hover {
    color: var(--redcolor);
  }

  @media (min-width: 1170px) {
    font-size: 20px;
  }
}

.contact__info-social {
  justify-content: center;
  margin-bottom: 30px;
  z-index: 5;

  @media (min-width: 1170px) {
    float: right;
  }
}

.contact__info-social a {
  position: relative;
}
</style>