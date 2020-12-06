<template>
  <div class="search-bar">
    <!-- If getIcon is undefined, show default icon -->
    <div v-if="!getIcon || !getIcon.length">
      <img class="weather-icon" src="../assets/c02d.png" alt="static-img" />
    </div>

    <!-- Else require the correct icon -->
    <div v-else>
      <img
        class="weather-icon"
        :src="require(`@/assets/${getIcon}.png`)"
        alt="dynamic-img"
      />
    </div>
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
        placeholder="Please enter your location..."
        v-model="city"
        @keypress="enterSearch"
      />

      <button aria-label="search" class="search" @click.prevent="pressSearch">
        <!-- Set loading_icon -->
        <v-icon v-if="loading != false && city != ''">
          fas fa-circle-notch fa-spin
        </v-icon>
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

<style scoped>
.search-bar {
  align-items: center;
  display: flex;
  max-width: 632px;
  width: 100%;
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
  display: flex;
  width: 95px;
  height: 48px;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
  background: #ffffff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* Positions background arrow image */
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-position: 75px center;
}

.select-box:hover {
  border: 1px solid #b5c7ff;
}
.select-box:focus {
  border: 2px solid #b5c7ff;
  background-color: transparent;
  resize: none;
  outline: none;
}
.weather-icon {
  height: 40px;
  width: 40px;
  margin-left: 22px;
  margin-right: 14px;
}
.search-box {
  align-items: center;
  margin-left: 8px;
  display: flex;
  max-width: 425px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}
.country-code {
  width: 17px;
  height: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #08153e;
}
.search-city {
  margin-left: 17px;
  max-width: 299px;
  width: 100%;
  height: 30px;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #08153e;
  opacity: 0.5;
}
.search-city:hover {
  border: 1px solid #b5c7ff;
}
.search-city:focus {
  border: 2px solid #b5c7ff;
  background-color: transparent;
  resize: none;
  outline: none;
}
.search {
  margin-left: 70px;
  width: 24px;
  height: 24px;
  transition: all 0.2s linear;
}
.search:hover {
  opacity: 0.5;
  background-color: transparent;
  resize: none;
  outline: none;
  transform: scale(1.11);
}
.search:focus {
  background-color: transparent;
  resize: none;
  outline: none;
}
</style>
