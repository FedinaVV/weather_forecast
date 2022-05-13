<template>
  <main class="main">
    <WeatherCity/>
    <weather-forecast-city/>
    <day-light-city/>
  </main>
</template>

<script>



import WeatherCity from "@/components/WeatherCity";
import WeatherForecastCity from "@/components/WeatherForecastCity";
import DayLightCity from "@/components/DayLightCity";
export default {
  components: {
    WeatherForecastCity,
    WeatherCity,
    DayLightCity

  },


  async mounted() {
   //let res  = await this.$store.dispatch("getCoordinatesCityById");
     await this.$store.dispatch("getWeatherData", this.$store.state.coordinates);
    console.log('этии', this.$store.state.coordinates);
  }
}
</script>

<style scoped>
</style>