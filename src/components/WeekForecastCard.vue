<template>
  <div class="week-card">
    <div class="day-name">{{ timestamp }}</div>
    <div class="day-temp">
      {{ Math.round(day.temp) + '°c' }}
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
      timestamp: '' // week_day_string
    }
  },
  created() {
    setInterval(this.getDay, 100)
  },
  methods: {
    getDay: function() {
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
  position: relative;
  width: 62px;
  height: 60px;
  margin-left: 20px;
  margin-right: 10px;
  top: 150px;
  display: block;
}
.day-name {
  width: 58px;
  height: 30px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  /* identical to box height, or 200% */

  letter-spacing: 0.06em;

  color: #08153e;

  opacity: 0.6;
}
.day-temp {
  position: absolute;
  width: 24px;
  height: 32px;
  font-family: Poppins;
  font-style: normal;
  font-size: 26px;
  font-weight: 600;
  line-height: 32px;
  /* identical to box height, or 133% */
  /* display: flex; */
  color: #ffffff;
  justify-self: right;
  align-items: right;
  text-align: right;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
</style>
