<template>
  <div class="main__currentWeather currentWeather-main">
    <div class="currentWeather-main__container">
      <div class="currentWeather-main__forecast">
        <h2>Погода сейчас</h2> <br>
        <div class="currentWeather-main__fullInfoDate">
          <p class="currentWeather-main__dateTimeWeek">{{ this.$store.state.weather.dateTimeWeek }}</p>
        </div>
        <p class="currentTemp">{{this.$store.state.weather.temperature}}</p>
        <div class="weather-icon"><img :src="this.$store.state.weather.weatherIcon" alt="iconWeather"></div>
        <p class="currentСloudiness">{{this.$store.state.weather.cloudiness}}</p> <br>
        <div class="currentWeather-main__wrapperPressureHumidity">
          <p class="currentWeather-main__pressure"> Давление: <span class="currentPressure">{{this.$store.state.weather.pressure}}</span></p>
          <p class="currentWeather-main__humidity">Влажность: <span class="currentHumidity">{{this.$store.state.weather.humidity}}</span></p>
        </div>
        <div class="currentWeather-main__wrapperWind">
          <p class="currentWeather-main__wind-speed">Скорость ветра: <span class="currentWindSpeed">{{this.$store.state.weather.windSpeed}}</span></p>
          <p class="currentWeather-main__wind-direction">Направление ветра: <span class="currentWindDirection">{{this.$store.state.weather.windDirection}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}

</script>

<style scoped>
</style>

