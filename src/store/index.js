import Vue from 'vue'
import Vuex from 'vuex'
import countryApi from '../services/CountryServices.js'
import weatherApi from '../services/WeatherServices.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    forcast: [],
    loading: false
  },
  mutations: {
    SET_COUNTRY(state, countries) {
      state.countries = countries
    },
    SET_FORCAST(state, forcast) {
      state.forcast = forcast
    },
    SET_LOAD(state, loading) {
      state.loading = loading
    }
  },
  actions: {
    fetchForcast({ commit }, { city, code }) {
      commit('SET_LOAD', true)
      console.log({ city, code })
      weatherApi
        .getWeather(city, code)
        .then(response => {
          commit('SET_FORCAST', response.data.data)
          console.log(response.data.data)
          commit('SET_LOAD', false)
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
    },
    getFlag: state => {
      return state.countries.map(f => f.flag)
    },
    getIcon: state => {
      return state.forcast.map(ff => ff.weather.icon).slice(0, 1)
    }
  },
  modules: {}
})
