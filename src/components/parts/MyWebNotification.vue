<template lang="pug">
#page-notification.page__notification
  h4.notification(v-html="notification ? formSuccessNotif : formDangerNotif") 
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["notification", "formDangerNotif", "formSuccessNotif"]),
  },
};
</script>

<style lang="scss">
.page__notification {
  display: none;
}

.page__notification-active,
.page__notification-danger {
  position: fixed;
  display: block;
  top: 0;
  right: 0;
  border-radius: 0px 0px 0px 12px;
  z-index: 1000;
}

.page__notification-active {
  background: rgba(104, 255, 104, 0.9);
}

.page__notification-danger {
  background: rgba(255, 67, 67, 0.9);
}

.page__notification-active::before,
.page__notification-danger::before {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 4px;
  content: "";
  background: rgba(252, 252, 252, 0.85);
  animation: notif 3s linear alternate;
}

.notification {
  padding: 20px 40px;
  text-align: center;
  color: var(--white);
  font-size: 28px;
  letter-spacing: 1px;
  font-family: var(--fontRomanBold);
}
</style>