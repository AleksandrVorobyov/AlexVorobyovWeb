<template lang="pug">
.card.white-color(:id="cardInfo.cardId" @mouseenter="randColor($event)")
  .card__img-wrap
    button.card__btn(@click="openCard($event, '/project/card')") Подробнее
    .card__img
      figure.card__img-front
        img(v-lazy="{ src: cardInfo.cardSrc }", :alt="cardInfo.cardAlt")
      figure.card__img-back
        img(v-lazy="{ src: cardInfo.cardSrc }", :alt="cardInfo.cardAlt")
  .card__text
    h4.card__title {{ cardInfo.cardTitle }}
    p.card__subtitle {{ cardInfo.cardText }}
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "my-card",
  props: {
    cardInfo: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const cardAnim = () => store.dispatch("cardAnim");
    const roadToPage = async (link) => await store.dispatch("roadToPage", link);
    const pushInServeActiveCard = async () =>
      await store.dispatch("pushInServeActiveCard");
    const findCard = (e) =>
      store.dispatch("findCard", {
        cardId: e.target.closest(".card").id,
      });

    const openCard = async (event, link) => {
      await findCard(event);
      await pushInServeActiveCard();
      await roadToPage(link);
    };

    onMounted(() => {
      cardAnim();
    });

    return {
      openCard,
      randColor: (e) =>
        store.commit("randColor", {
          item: e.target,
        }),
    };
  },
};
</script>

<style lang="scss">
.card {
  width: 360px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  box-shadow: 10px 14px 16px -3px rgba(34, 60, 80, 0.3);
  border-radius: 44px;
  border: 6px solid var(--redCyber);
  transition: border 0.5s ease-in-out;
  background: var(--white);
  z-index: 30;
  user-select: none;

  &:hover {
    .card__title {
      transition: 1s linear;
      color: var(--redCyber);
      text-decoration: underline;
      text-shadow: 1px 1px 2px var(--black), 0 0 1em var(--black);
    }
  }
}

.card__img-wrap {
  position: relative;
  height: 260px;
  width: 100%;
  perspective: 900px;
  z-index: 30;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/img/card/bg/card-bg.jpg") center center / cover no-repeat;
  border-radius: 38px 38px 0 0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  figure {
    position: absolute;
    margin: 0;
    top: -1px;
    display: block;
    height: calc(100% + 2px);
    width: calc(100% + 1px);
    backface-visibility: hidden;
    border-radius: 38px 38px 0 0;
    overflow: hidden;
  }
}

.card__img {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1.2s linear;
  transform-style: preserve-3d;
  transform-origin: left center;
  z-index: 50;
}

.card:hover .card__btn {
  z-index: 40;
}

.card:hover .card__img {
  transform: rotateY(-175deg);
}

.card__img-back {
  transform: rotateY(180deg);
}

.card__text {
  display: grid;
  padding: 10px 0;
  gap: 10px;
  text-align: center;
  border-top: 6px solid var(--redCyber);
  transition: border 0.5s ease-in-out;

  @media (min-width: 768px) {
    padding: 20px 0;
    gap: 20px;
  }
}

.card__btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 2px;
  font-family: var(--fontNeon);
  color: var(--blueCyber);
  padding: 20px 40px;
  background: var(--redCyber);
  cursor: pointer;
  z-index: 25;
  -webkit-box-reflect: below 10px
    linear-gradient(transparent, rgba(0, 0, 17, 0.288));
  transition-delay: 0.6s;
  box-shadow: 0 0 10px var(--blueLinkHover), 0 0 20px var(--blueLinkHover),
    0 0 40px var(--blueLinkHover), 0 0 60px var(--blueLinkHover);
  border: none;

  @media (min-width: 480px) {
    font-size: 34px;
    line-height: 34px;
  }
}

.card__title {
  font-size: 26px;
  line-height: 30px;
  font-family: var(--fontRomanBold);
  color: var(--black);
  font-weight: bold;
}

.card__subtitle {
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  font-family: var(--fontRomanReg);
  color: var(--black);
}

// -------------night---------------
.night {
  .card {
    border: 4px solid var(--yellowcolor);
  }

  .card:hover .card__title {
    color: var(--yellowcolor);
  }

  .card .card__text {
    border-top: 4px solid var(--yellowcolor);
  }

  .card__btn {
    background: var(--yellowcolor);
  }

  .card__img {
    border-bottom: 2px solid var(--yellowcolor);
  }

  .neon span {
    animation: none;
  }
}
// -------------night---------------
</style>