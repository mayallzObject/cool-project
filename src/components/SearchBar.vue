<template>
  <div class="search-bar">
    <!-- If getIcon is undefined, show default icon -->
    <div v-if="!getIcon || !getIcon.length">
      <img class="search-bar__icon" src="../assets/c02d.png" alt="static-img" />
    </div>

    <!-- Else require the correct icon -->
    <div v-else>
      <img
        class="search-bar__icon"
        :src="require(`@/assets/${getIcon}.png`)"
        alt="dynamic-img"
      />
    </div>
    <select class="search-bar__select-box" v-model="code">
      <option
        class="country-code"
        v-for="country in getCountry"
        :key="country.id"
      >
        {{ country }}
      </option>
    </select>

    <!-- City input -->
    <div class="search-bar__search-box">
      <input
        class="search-bar__search-city"
        type="text"
        placeholder="Please enter your location..."
        v-model="city"
        @keypress="enterSearch"
      />

      <button
        aria-label="search-bar__search"
        class="search"
        @click.prevent="pressSearch"
      >
        <!-- Set loading_icon -->
        <v-icon class="search" v-if="loading != false && city != ''">
          fas fa-circle-notch fa-spin
        </v-icon>
        <v-icon v-else class="search">fas fa-search</v-icon>
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
    // Get countries for select
    this.$store.dispatch('fetchCountries')
  },
  computed: {
    // Country_code
    getCountry() {
      return this.$store.getters.getCountry
    },
    ...mapState(['loading', 'forecast']),
    ...mapGetters(['getCountry', 'getIcon'])
  },
  methods: {
    // Fetch forecast by pressing enter
    enterSearch(e) {
      if (e.key == 'Enter' && this.city != '' && this.code != '') {
        this.$store.dispatch('fetchForecast', {
          city: this.city,
          code: this.code
        })
      }
    },
    // Fetch forecast by pressing search_icon
    pressSearch() {
      if (this.c != '' && this.cc != '') {
        this.$store.dispatch('fetchForecast', {
          city: this.city,
          code: this.code
        })
      }
    }
  }
}
</script>
