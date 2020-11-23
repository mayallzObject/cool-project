import Vue from 'vue'
import Vuex from 'vuex'
import countryApi from '../services/CountryServices.js'
import weatherApi from '../services/WeatherServices.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    forcast: []
  },
  mutations: {
    SET_COUNTRY(state, countries) {
      state.countries = countries
    },
    SET_FORCAST(state, forcast) {
      state.forcast = forcast
    }
  },
  actions: {
    fetchForcast({ commit }, { city, code }) {
      console.log({ city, code })
      weatherApi
        .getWeather(city, code)
        .then(response => {
          commit('SET_FORCAST', response.data.data)
          console.log(response.data.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchCountries({ commit }) {
      countryApi
        .getCountries()
        .then(response => {
          commit('SET_COUNTRY', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },
  getters: {
    getCountry: state => {
      return state.countries.map(c => c.alpha2Code)
    }
  },
  modules: {}
})
