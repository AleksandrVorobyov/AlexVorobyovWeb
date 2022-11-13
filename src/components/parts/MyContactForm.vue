<template lang="pug">
form#form-contact.contact__form(
  data-card="1",
  @submit.prevent="submitMessageForm()"
)
  h3.contact__form-title {{ contact.title }}
  #email-form-wrap.contact__form-item
    input#email-form.form-input-email(
      type="email",
      placeholder="Ваш Email:",
      form="form-contact",
      name="email-contact",
      v-model="formAnswers.email"
    )
  #theme-form-wrap.contact__form-item
    input#theme-form.form-input-theme(
      type="text",
      placeholder="Тема письма:",
      form="form-contact",
      name="theme-contact",
      v-model="formAnswers.theme"
    )
  #text-form-wrap.contact__form-item
    textarea#text-form.form-textarea-text(
      name="comment-contact",
      cols="30",
      rows="5",
      placeholder="Сообщение:",
      form="form-contact",
      v-model="formAnswers.text"
    )
  .contact__form-button
    my-btn(:btnInfo="contact.btnSubmit")
</template>

<script>
import { watch, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "my-form-contact",
  setup() {
    const store = useStore();
    const watchEmail = computed(() => store.getters.watchEmail);
    const watchTheme = computed(() => store.getters.watchTheme);
    const watchText = computed(() => store.getters.watchText);
    const validInput = (type) => store.dispatch("validInput", type);

    watch(watchEmail, () => validInput("email"));
    watch(watchTheme, () => validInput("theme"));
    watch(watchText, () => validInput("text"));

    return {
      contact: computed(() => store.getters.contact),
      formAnswers: computed(() => store.getters.formAnswers),
      watchEmail,
      watchTheme,
      watchText,
      valideForm: computed(() => store.getters.valideForm),
      valideTheme: computed(() => store.getters.valideTheme),
      validText: computed(() => store.getters.validText),
      validateEmail: computed(() => store.getters.validateEmail),
      submitMessageForm: async () => await store.dispatch("submitMessageForm"),
      validInput,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact__form {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  max-width: 550px;
  border: 5px solid var(--white);
  box-shadow: 0px 0px 20px 0px var(--redCyber);
  border-radius: 10px;
  z-index: 15;
  overflow: hidden;

  @media (min-width: 480px) {
    padding: 30px;
  }

  @media (min-width: 768px) {
    min-width: 500px;
    box-shadow: 0px 10px 50px 0px var(--redCyber);
  }
}

.contact__form::before,
.contact__form::after {
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  content: "";
  pointer-events: none;
  user-select: none;
  overflow: hidden;
}

.contact__form::before {
  background: var(--bgContactForm);
  z-index: 5;
  clip-path: circle(75% at 15% 45%);
}

.contact__form::after {
  background: var(--contactBgForm) top left / cover no-repeat;
  z-index: 1;
  filter: blur(2px);
}

.contact__form-title {
  margin-bottom: 30px;
  text-align: center;
  font-size: 28px;
  color: var(--white);
  text-transform: uppercase;
  z-index: 10;
}

.contact__form-item {
  position: relative;
  display: flex;
}

.contact__form-item + .contact__form-item {
  margin-top: 20px;
}

.contact__form .contact__form-item:first-child {
  margin-bottom: 20px;
}

.form-input-email,
.form-input-theme,
.form-textarea-text {
  position: relative;
  width: 100%;
  padding: 15px;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--borderContactForm);
  font-size: 20px;
  line-height: 24px;
  font-family: var(--fontRomanBold);
  color: var(--black);
  font-weight: bold;
  transition: ease-in 0.5s;
  z-index: 10;
  border-radius: 6px;

  &:hover,
  &:focus {
    border-bottom: 1px solid var(--yellowcolor);
  }

  &::placeholder {
    color: var(--black);
  }

  @media (min-width: 480px) {
    font-size: 22px;
    line-height: 26px;
  }

  @media (min-width: 1170px) {
    font-size: 20px;
    line-height: 24px;
  }
}

.contact__form-item::before {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  content: "";
  pointer-events: none;
  user-select: none;
  z-index: 20;
  border: 3px solid transparent;
}

.contact__form-item.active::before {
  border: 3px solid var(--greenCyber);
}

.contact__form-item.danger::before {
  border: 3px solid var(--redCyber);
}

.contact__form-button {
  display: flex;
  justify-content: center;
  z-index: 10;
  margin-top: 20px;

  @media (min-width: 480px) {
    justify-content: start;
  }
}

.contact__form input:focus::placeholder {
  color: var(--yellowcolor);
  transition: 0.5s ease-in-out;
  transform: translateY(-60px);

  @media (min-width: 1170px) {
    transform: translateY(-60px);
  }
}

.contact__form textarea:focus::placeholder {
  color: var(--yellowcolor);
  transition: 0.5s ease-in-out;
  transform: translateY(-60px);

  @media (min-width: 1170px) {
    transform: translateY(-60px);
  }
}
</style>