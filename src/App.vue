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
      <SearchBar v-if="!getForecastState || !getForecastState.length" />
      <SearchBar v-else class="up" />

      <AvrgTemperatureCard
        v-for="avrg in forecast.slice(0, 1)"
        :key="avrg.id"
        :avrg="avrg"
      />
      <WeekForecastCard
        v-for="day in forecast.slice(0, 7)"
        :key="day.id"
        :day="day"
      />
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

<style>
.container {
  display: inline-flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
/* app.css global styles can be found in "@/assets/global-styles-css/app.css" */
#app.minus-fourty {
  background: linear-gradient(
    130.54deg,
    /* -40 */ #102f7e 0%,
    #0c8dd6 85%,
    #1aa0ec 170%
  );
}
#app.minus-thirty {
  background: linear-gradient(
    130.54deg,
    /* -30°c */ #102f7e -33%,
    #0c8dd6 52%,
    #1aa0ec 137%
  );
}
#app.minus-twenty {
  background: linear-gradient(
    130.54deg,
    /* -20°c */ #0c8dd6 -33%,
    #1aa0ec 52%,
    #60c6ff 137%
  );
}
#app.minus-ten {
  background: linear-gradient(
    130.54deg,
    /* -10°c */ #1aa0ec -33%,
    #60c6ff 52%,
    #9bdbff 137%
  );
}
#app.zero {
  background: linear-gradient(
    130.54deg,
    /* 0°c */ #60c6ff -33%,
    #9bdbff 52%,
    #b4deda 137%
  );
}
#app.ten {
  background: linear-gradient(
    130.54deg,
    /* 10°c */ #9bdbff -33%,
    #b4deda 52%,
    #ffd66b 137%
  );
}
/* This range can be improved */
#app.twenty {
  background: linear-gradient(
    130.54deg,
    /* 20°c */ #b4deda -33%,
    #ffd66b 52%,
    #ffc178 137%
  );
}
#app.thirty {
  background: linear-gradient(
    130.54deg,
    /* 30°c */ #ffd66b -33%,
    #ffc178 52%,
    #fe9255 137%
  );
}
#app.fourty {
  background: linear-gradient(
    130.54deg,
    /* 40°c */ #ffd66b -66%,
    #ffc178 19%,
    #fe9255 104%
  );
}
.up {
  top: 20%;
}
</style>
