<template>
  <div class="notification-container">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue'
import { mapState } from 'vuex'
export default {
  components: {
    NotificationBar
  },
  computed: mapState('notification', ['notifications'])
}
</script>

<style scoped>
.notification-container {
  /* position: relative; */
  margin-top: 1rem;
  color: orangered;
  font-size: 1.6rem;
  font-weight: bold;
  top: 0;
  right: 0;
  background-color: transparent;
  z-index: 2000;
}
</style>
