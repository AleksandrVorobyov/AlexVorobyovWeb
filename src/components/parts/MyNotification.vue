<template lang="pug">
#notification.notification(:class="notification.main.class")
  .notification__icon
    i.fa(aria-hidden="true", :class="notification.main.icon")
  h4.notification-title {{ notification.main.title }}
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "my-notification",
  setup() {
    const store = useStore();
    return {
      notification: computed(() => store.getters.notification),
    };
  },
};
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  display: inline;
  padding: 9px 6px 6px;
  top: 0;
  right: 0;
  border-radius: 0px 0px 0px 12px;
  z-index: 1000;
  width: 340px;
}

.notification--error {
  background: var(--notificationError);
}

.notification--success {
  background: var(--notificationSuccess);
}

.notification::before {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 4px;
  content: "";
  background: rgba(252, 252, 252, 0.85);
  animation: notif 3s linear alternate;
}

.notification__icon {
  position: relative;
  display: inline-block;
  margin-right: 10px;

  &::before {
    position: absolute;
    top: 50%;
    right: -5px;
    height: 60%;
    width: 2px;
    content: "";
    background: var(--white);
    transform: translateY(-50%);
  }

  .fa {
    font-size: 28px;
    line-height: 32px;
    color: var(--white);
  }
}

.notification-title {
  display: inline;
  color: var(--white);
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
  letter-spacing: 0.5px;
  font-family: var(--fontRomanBold);
}
</style>