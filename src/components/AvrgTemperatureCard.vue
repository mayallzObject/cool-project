<template>
  <div class="avrg-card">
    <div class="header">{{ timestamp }}</div>
    <div class="avrg-temperature">
      {{ Math.round(getAvrg) + '°c' }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AvrgTemperatureCard',
  props: {
    avrg: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timestamp: ''
    }
  },
  created() {
    setInterval(this.getPeriod, 100)
  },
  computed: {
    // Average temperature getter
    getAvrg() {
      return this.$store.state.getters.getAvrg
    },
    ...mapGetters(['getAvrg'])
  },
  methods: {
    // Get month, dates and year
    getPeriod: function() {
      const options = { month: 'long', timeZone: 'Europe/Amsterdam' }
      const today = new Date(this.avrg.datetime)
      const date =
        today.toLocaleString('default', options) +
        ' ' +
        today.getDate() +
        ' - ' +
        (today.getDate() + 6) +
        ' ' +
        today.getFullYear()
      this.timestamp = date
    }
  }
}
</script>

<style scoped>
.avrg-card {
  margin-top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 247px;
  height: 171px;
}
.header {
  height: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  /* identical to box height, or 200% */
  letter-spacing: 0.06em;
  color: #08153e;
  opacity: 0.6;
}
.avrg-temperature {
  font-style: normal;
  font-weight: 600;
  font-size: 120px;
  line-height: 120px;
  /* identical to box height, or 100% */
  text-shadow: 0px 2px 10px rgba(8, 21, 62, 0.15);
  color: #ffffff;
}
</style>
