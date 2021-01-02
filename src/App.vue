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
    <section class="section-search">
      <div class="container">
        <SearchBar />
        <NotificationContainer />
      </div>
    </section>
    <AvrgTemperatureCard
      v-for="avrg in forecast.slice(0, 1)"
      :key="avrg.id"
      :avrg="avrg"
    />
    <section class="section-week">
      <div class="row">
        <WeekForecastCard
          v-for="day in forecast.slice(0, 7)"
          :key="day.id"
          :day="day"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AvrgTemperatureCard from '@/components/AvrgTemperatureCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import WeekForecastCard from '@/components/WeekForecastCard.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    WeekForecastCard,
    AvrgTemperatureCard,
    NotificationContainer
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
