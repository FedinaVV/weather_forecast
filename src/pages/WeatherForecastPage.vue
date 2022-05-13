<template>
  <div>
      <main class="main">
        <geolocationCity/>
        <weatherForecast/>
      </main>
    </div>
</template>

<script>


import GeolocationCity from '../components/GeolocationCity.vue'
import WeatherForecast from '../components/WeatherForecast.vue'

export default {
  components: {
    GeolocationCity,
    WeatherForecast
  },
  async mounted() {
    await this.$store.dispatch("getCoordinates");
    await this.$store.dispatch("getWeatherData", this.$store.state.coordinates);
  }
}
</script>

<style scoped>
</style>