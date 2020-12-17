<template>
  <div class="week-card">
    <div class="day-box">
      <img
        class="weather-icon"
        :src="require(`@/assets/${day.weather.icon}.png`)"
        alt="dynamic-img"
      />
      <div class="day-name">{{ timestamp }}</div>
      <div class="day-temp">
        {{ Math.round(day.temp) + '°c' }}
      </div>
      <div class="day-date">{{ day.datetime }}</div>
      <div class="day-temp"></div>
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

<style scoped>
.weather-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 4rem;
  width: 4rem;
}

.week-card {
  max-width: 642px;
  display: flex;
  margin-top: 6rem;
}
.day-box {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 129px;
  height: 159px;
}
.day-name {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 12rem;
  /* height: 1rem; */
  font-style: normal;
  font-weight: 600;
  font-size: 0.9rem;
  /* identical to box height, or 200% */
  letter-spacing: 0.05em;
  color: #08153e;
  opacity: 0.6;
}
.day-date {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 12rem;

  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  /* identical to box height, or 200% */
  letter-spacing: 0.05em;
  color: #08153e;
  opacity: 0.6;
}
.day-temp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 110px;

  /* font-family: 'Poppins', sans-serif; */
  font-style: normal;
  font-size: 26px;
  font-weight: 600;
  line-height: 32px;
  color: #ffffff;
  text-shadow: 0px 2px 10px rgba(8, 21, 62, 0.15);
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
</style>
