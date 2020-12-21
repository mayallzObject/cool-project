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

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}
@media only screen and (max-width: 75em) {
  html {
    font-size: 56.25%;
  }
}
@media only screen and (max-width: 56.25em) {
  html {
    font-size: 50%;
  }
}
@media only screen and (min-width: 112.5em) {
  html {
    font-size: 75%;
  }
}

body {
  box-sizing: border-box;
  padding: 1rem;
}
@media only screen and (max-width: 56.25em) {
  body {
    padding: 0;
  }
}

::selection {
  background-color: #55c57a;
  color: #fff;
}

body {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  /*font-size: 16px;*/
  line-height: 1.7;
  /* color: #777; */
}
#app {
  padding-top: 5rem;
  display: flex;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 95vh;
  align-items: center;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    linear-gradient(
      119.25deg,
      #102f7e -11.47%,
      #0c8dd6 3.95%,
      #1aa0ec 19.37%,
      #60c6ff 34.78%,
      #9bdbff 50.19%,
      #b4deda 65.61%,
      #ffd66b 81.02%,
      #ffc178 96.44%,
      #fe9255 111.85%
    );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
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
.container {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
.week-container {
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
