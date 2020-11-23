import axios from 'axios'

export const countryApi = axios.create({
  baseURL: `https://restcountries.eu`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  // Get country_codes + country_flags
  getCountries() {
    return countryApi.get(`/rest/v2/all`)
  }
}
