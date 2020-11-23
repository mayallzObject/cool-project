import Vue from 'vue'
import Vuex from 'vuex'
import countryApi from '../services/CountryServices.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: []
  },
  mutations: {
    SET_COUNTRY(state, countries) {
      state.countries = countries
    }
  },
  actions: {
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
