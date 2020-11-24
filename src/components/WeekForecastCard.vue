<template>
  <div class="week-card">
    <div class="day-box">
      <div class="day-name">{{ timestamp }}</div>
      <div class="day-temp">
        {{ Math.round(day.temp) + '°c' }}
      </div>
    </div>
  </div>
</template>

<script>
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
.week-card {
  margin-top: 48px;
  max-width: 642px;
  height: 52px;
  display: flex;
}
.day-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 129px;
  height: 59px;
}
.day-name {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 120px;
  height: 25px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
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
  height: 32px;
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
