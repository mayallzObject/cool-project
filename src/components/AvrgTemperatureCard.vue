<template>
  <div class="avrg-card">
    <div class="avrg-card__text-box">
      <div class="avrg-card__heading">{{ timestamp }}</div>
      <span>
        <div class="avrg-card__temperature">
          {{ Math.round(getAvrg) + '°c' }}
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

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
        moment()
          .add(6, 'days')
          .format('ll')
      this.timestamp = date
    }
  }
}
</script>
