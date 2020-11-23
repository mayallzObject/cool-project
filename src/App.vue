<template>
  <div id="app">
    <SearchBar />
    <WeekForcastCard
      v-for="day in forcast.slice(0, 7)"
      :key="day.id"
      :day="day"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchBar from '@/components/SearchBar.vue'
import WeekForcastCard from '@/components/WeekForcastCard.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    WeekForcastCard
  },
  computed: mapState(['forcast'])
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100vh;
  justify-content: center;
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
</style>
