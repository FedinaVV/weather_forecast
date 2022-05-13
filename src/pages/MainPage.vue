<template>
    <main class="main">
      <geolocationCity/>
      <currentWeather/>
      <weatherForecast/>
      <DayLight/>
    </main>
</template>

<script>

import GeolocationCity from '../components/GeolocationCity.vue'
import CurrentWeather from '../components/CurrentWeather.vue'
import WeatherForecast from '../components/WeatherForecast.vue'
import DayLight from '../components/DayLight.vue'

export default {
  components: {
    GeolocationCity,
    CurrentWeather,
    WeatherForecast,
    DayLight
  },

 async mounted() {
    await this.$store.dispatch("getCoordinates");
    await this.$store.dispatch("getWeatherData", this.$store.state.coordinates);
  }
}
</script>

<style scoped>
</style>