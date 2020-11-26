import axios from 'axios'
export const API_KEY = '453e65d889a640079f4c83dcba930985'

export const weatherApi = axios.create({
  baseURL: `https://api.weatherbit.io/v2.0`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  // Weatherforecast for 10 days
  getWeather(city, code) {
    return weatherApi.get(
      `/forecast/daily?city=${city}&country=${code}&key=${API_KEY}&days=10`
    )
  }
}
