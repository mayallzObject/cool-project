<template>
  <!-- Change background according to temperature ranges -->
  <div
    id="app"
    :class="
      getAvrg > -41 && getAvrg < -30
        ? 'minus-fourty'
        : getAvrg >= -30 && getAvrg < -20
        ? 'minus-thirty'
        : getAvrg >= -20 && getAvrg < -10
        ? 'minus-twenty'
        : getAvrg >= -10 && getAvrg < 0
        ? 'minus-ten'
        : getAvrg == 0
        ? 'zero'
        : getAvrg > 0 && getAvrg <= 10
        ? 'ten'
        : getAvrg > 10 && getAvrg <= 20
        ? 'twenty'
        : getAvrg > 20 && getAvrg <= 30
        ? 'thirty'
        : getAvrg > 30 && getAvrg <= 41
        ? 'fourty'
        : ''
    "
  >
    <div class="container">
      <SearchBar />
      <AvrgTemperatureCard
        v-for="avrg in forecast.slice(0, 1)"
        :key="avrg.id"
        :avrg="avrg"
      />
      <div class="week-container">
        <WeekForecastCard
          v-for="day in forecast.slice(0, 7)"
          :key="day.id"
          :day="day"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SearchBar from '@/components/SearchBar.vue'
import AvrgTemperatureCard from '@/components/AvrgTemperatureCard.vue'
import WeekForecastCard from '@/components/WeekForecastCard.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    WeekForecastCard,
    AvrgTemperatureCard
  },
  computed: {
    // Average temperature getter
    getAvrg() {
      return Math.round(this.$store.getters.getAvrg)
    },
    ...mapState(['forecast']),
    ...mapGetters(['getForecastState'])
  },
  methods: {}
}
</script>
