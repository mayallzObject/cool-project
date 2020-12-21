<template>
  <div class="week-card">
    <div class="day-box">
      <div class="day-name">{{ timestamp }}</div>
      <img
        class="weather-icon"
        :src="require(`@/assets/${day.weather.icon}.png`)"
        alt="dynamic-img"
      />
      <div class="day-temp">
        {{ Math.round(day.temp) + '°c' }}
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
  height: 6.5rem;
  width: 6.5rem;
}

.week-card {
  display: flex;
  margin: 2.5rem 0 5rem 0;
}
.day-box {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 10rem;
  height: 15rem;
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
  font-size: 1.2rem;
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
  margin-bottom: 1.5rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
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

  margin-bottom: 1rem;
  /* font-family: 'Poppins', sans-serif; */
  font-style: normal;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.4rem;
  color: #ffffff;
  text-shadow: 0px 2px 10px rgba(8, 21, 62, 0.15);
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
</style>
