import Vue from 'vue'
import Vuex from 'vuex'
import countryApi from '../services/CountryServices.js'
import weatherApi from '../services/WeatherServices.js'
import * as notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notification
  },
  state: {
    countries: [],
    forecast: [],
    loading: false
  },
  mutations: {
    SET_COUNTRY(state, countries) {
      state.countries = countries
    },
    SET_FORECAST(state, forecast) {
      state.forecast = forecast
    },
    SET_LOAD(state, loading) {
      state.loading = loading
    }
  },
  actions: {
    fetchForecast({ commit, dispatch }, { city, code }) {
      console.log({ city, code })
      commit('SET_LOAD', true)
      weatherApi
        .getWeather(city, code)
        .then(response => {
          if (!response.data.data) {
            const notification = {
              type: 'error',
              message: 'Incorrect city or country!'
            }
            dispatch('notification/add', notification, { root: true })
            console.log(notification)
            commit('SET_LOAD', false)
          } else {
            commit('SET_LOAD', true)
            commit('SET_FORECAST', response.data.data)
            commit('SET_LOAD', false)
          }
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
    // Get forecast
    getForecastState: state => {
      return state.forecast
    },
    // Get country_code
    getCountry: state => {
      return state.countries.map(c => c.alpha2Code)
    },
    // Get country_flag
    getFlag: state => {
      return state.countries.map(f => f.flag)
    },
    // Get weather_icon_code
    getIcon: state => {
      return state.forecast.map(ff => ff.weather.icon).slice(0, 1)
    },
    getIcons: state => {
      return state.forecast.map(ff => ff.weather.icon)
    },
    // Get temperature average for x number of days
    getAvrg: state => {
      return (
        state.forecast.reduce((a, { temp }) => a + temp, 0) /
        state.forecast.length
      )
    }
  }
})
