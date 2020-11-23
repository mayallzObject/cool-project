<template>
  <div class="week-card">
    <div class="day-name">{{ timestamp }}</div>
    <div class="day-temp">
      {{ parseInt(day.temp) + '°c' }}
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
      timestamp: ''
    }
  },
  created() {
    setInterval(this.getNow, 100)
  },
  methods: {
    getNow: function() {
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
  width: 52px;
  height: 50px;
  margin-right: 25px;
  margin-left: 25px;
  top: 150px;
  display: block;
  justify-content: center;
}
.day-name {
  position: relative;
  width: 58px;
  height: 30px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  /* identical to box height, or 200% */
  text-align: center;
  align-items: center;
  letter-spacing: 0.06em;
  display: flex;
  justify-content: center;
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
  display: flex;
}
</style>
