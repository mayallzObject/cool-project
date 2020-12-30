<template>
  <!-- <div class="1-of-7">
    <div class="day-box">
      <div class="day-box__day">{{ timestamp }}</div>
      <img
        class="day-box__icon"
        :src="require(`@/assets/${day.weather.icon}.png`)"
        alt="dynamic-img"
      />
      <div class="day-box__temp">
        {{ Math.round(day.temp) + '°c' }}
      </div>
    </div>
  </div> -->

  <div class="col-1-of-7">
    <div class="card">
      <div class="card__side card__side--front">
        <div class="card__icon">
          <img
            class="card__icon--size"
            :src="require(`@/assets/${day.weather.icon}.png`)"
            alt="dynamic-img"
          />
        </div>
        <h6 class="card__heading">
          {{ timestamp }}
        </h6>
        <div class="card__temperature">
          {{ Math.round(day.temp) + '°c' }}
        </div>
      </div>
      <div class="card__side card__side--back ">
        <div class="card__cta">
          <ul class="card__details">
            <li>Min: {{ day.min_temp + '°c' }}</li>
            <li>Max: {{ day.max_temp + '°c' }}</li>
            <li>Wind: {{ Math.round(day.wind_spd) + ' m/s' }}</li>
            <li>Clouds: {{ day.clouds + '%' }}</li>
            <li>Rh: {{ day.rh + '%' }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WeekForcastCard',
  props: {
    day: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timestamp: '' // week_days_by_name
    }
  },
  created() {
    setInterval(this.getDays, 100)
  },
  computed: {
    // Country_code

    getCountry() {
      return this.$store.getters.getCountry
    },
    getIcons() {
      return this.$store.getters.getIcons
    },
    ...mapGetters(['getCountry', 'getIcons'])
  },
  methods: {
    // Get week_days by name

    getDays: function() {
      const options = { weekday: 'long', timeZone: 'Europe/Amsterdam' }
      const today = new Date(this.day.datetime)
      const date = today.toLocaleString('default', options)
      this.timestamp = date
    }
  }
}
</script>
