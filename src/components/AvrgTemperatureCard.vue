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
  position: absolute;
  display: block;
  justify-content: center;
  width: 147px;
  height: 171px;
}
.header {
  width: 180px;
  height: 24px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  /* identical to box height, or 200% */
  align-items: center;
  letter-spacing: 0.07em;

  color: #08153e;

  opacity: 0.6;
}
.avrg-temperature {
  position: absolute;
  width: 116px;
  height: 120px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 120px;
  line-height: 120px;
  /* identical to box height, or 100% */
  display: flex;
  align-items: center;

  color: #ffffff;
}
</style>
