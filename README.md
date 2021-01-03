# :rocket: Computer Science Quiz Front :satellite:

[Link](https://simple-weather-forecast.netlify.app)
 
![ezgif com-video-to-gif (13)](https://user-images.githubusercontent.com/66206483/94065912-0834ab00-fdec-11ea-909d-abc7ba45d04e.gif)
![ezgif com-video-to-gif (15)](https://user-images.githubusercontent.com/66206483/94067843-b6d9eb00-fdee-11ea-8d55-4ddd19dfd931.gif)
   
   
## :pushpin: Table of content

- [Introduction](#Introduction)

- [Technologies](#Technologies)
- [Setup](#Setup)
- [Dependencies ](#Dependencies )


## Introduction

  The weather forcast app is my second Vue 2 application. 
  The user can select country code and type the city name to get the current forecast. Country codes and flags are fetched from Rest countries API 
  url( https://restcountries.eu ). The app fetches 10 days weather forecast url( https://api.weatherbit.io/v2.0 ), and dislpays the average tempreture for the 
  next 10 days. The dates are converted with moment.js and the build in Date method. The weekly forcast is made out of 7 rotating week-day cards for each of the 
  next 7 days. The front of the week-day card displays the day name, avrg. temperature and weather icon, the back shows details (wind-speed, min/max temp, 
  humidity, and cloud coverage. 
  The backgound is binded to the avarege temperature and changes accordingly. 
    


## Technologies

- JavaScript
- Vue 2, Vuex, Vuitify
- Sass- block element model architecture. 
- Axios



## Setup
 
- clone 
- npm install 
 
## Dependencies 
 
- axios
- core-js
- moment
- node-sass
- sass-loader
- vue
- vuetify
- vuex
 

