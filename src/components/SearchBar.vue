<template>
  <div class="search-bar">
    <!-- If getIcon is undefined, show default icon -->
    <div v-if="!getIcon || !getIcon.length">
      <img class="weather-icon" src="../assets/c02d.png" />
    </div>
    <!-- Else require the correct icon -->
    <div v-else>
      <img class="weather-icon" :src="require(`@/assets/${getIcon}.png`)" />
    </div>
    <!-- Country / country_code selector / not working with the flags :(-->
    <select class="select-box" v-model="code">
      <option
        class="country-code"
        v-for="country in getCountry"
        :key="country.id"
      >
        {{ country }}
      </option>
    </select>
    <!-- City input -->
    <div class="search-box">
      <input
        class="search-city"
        type="text"
        placeholder="Please eneter your location..."
        v-model="city"
        @keypress="enterSearch"
      />
      <!-- Search_button / loading_icon -->
      <!-- ERROR / when res == undefined  loading stays true -->
      <button class="search" @click.prevent="pressSearch">
        <v-icon v-if="loading != false">fas fa-circle-notch fa-spin</v-icon>
        <v-icon v-else class="union">fas fa-search</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'SearchBar',
  data() {
    return {
      city: '', //city_name
      code: 'NL' //country_code
    }
  },
  created() {
    this.$store.dispatch('fetchCountries')
  },
  computed: {
    // Get country_code
    getCountry() {
      return this.$store.getters.getCountry
    },
    ...mapState(['countries', 'loading', 'forcast']),
    ...mapGetters(['getCountry', 'getIcon'])
  },
  methods: {
    // Fetch forcast by pressing enter
    enterSearch(e) {
      if (e.key == 'Enter' && this.city != '' && this.code != '') {
        this.$store.dispatch('fetchForcast', {
          city: this.city,
          code: this.code
        })
      }
    },
    // Fetch forcast by pressing search_icon
    pressSearch() {
      if (this.c != '' && this.cc != '') {
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
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
  font-family: Poppins;
  width: 100%;
  height: 48px;
  top: 22px;
  left: 185px;
  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}
.country-code {
  width: 17px;
  height: 30px;
  padding-left: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  color: #08153e;
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
.search-city:hover {
  background-color: #b5c7ff;
}
.search {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 382px;
}
</style>
