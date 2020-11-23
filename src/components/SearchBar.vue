<template>
  <div class="search-bar">
    <img class="weather-icon" src="../assets/a01d.png" />
    <select class="select-box" v-model="code">
      <option v-for="country in getCountry" :key="country.id">
        {{ country }}</option
      >
    </select>
    <div class="search-box">
      <input
        class="search-city"
        type="text"
        placeholder="Please eneter your location..."
        v-model="city"
        @keypress="enterSearch"
      />
      <button class="search">s</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'SearchBar',
  data() {
    return {
      code: 'NL',
      city: ''
    }
  },
  created() {
    this.$store.dispatch('fetchCountries')
  },
  computed: {
    getCountry() {
      return this.$store.getters.getCountry
    },
    ...mapState(['countries']),
    ...mapGetters(['getCountry'])
  },
  methods: {
    enterSearch(e) {
      if (e.key == 'Enter' && this.city != '' && this.code != '') {
        this.$store.dispatch('fetchForcast', {
          city: this.city,
          code: this.code
        })
      }
    }
  }
}
</script>

<style scoped>
.search-bar {
  position: absolute;
  width: 632px;
  height: 92px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #f8f8f8;
  box-shadow: 0px 2px 10px rgba(8, 21, 62, 0.15);
  border-radius: 16px;
}
.select-box {
  position: absolute;
  max-width: 95px;
  height: 48px;
  width: 100%;
  top: 22px;
  left: 82px;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
  background: #ffffff;
}
.weather-icon {
  position: absolute;
  height: 48px;
  width: 48px;
  top: 22px;
  left: 22px;
}
.search-box {
  position: absolute;
  max-width: 425px;
  width: 100%;
  height: 48px;
  top: 22px;
  left: 185px;
  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}
.search-city {
  position: absolute;
  max-width: 299px;
  width: 100%;
  height: 30px;
  left: 17px;
  top: 9px;
  border: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #08153e;
  opacity: 0.5;
}
.search {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 382px;
}
</style>
