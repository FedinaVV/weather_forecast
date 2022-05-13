<template>
  <div class="main__weatherForecast weatherForecast-main">
    <div class="weatherForecast-main__block block-weatherForecast">
      <h2 class="block-weatherForecast__header">Прогноз на 7 дней</h2>
      <div class="block-weatherForecast__wrapperDays">
        <div class="block-weatherForecast__arrayDays" v-for="day of this.$store.state.weatherOnWeek" :key="day.date">
          <div class="wrapperDays-day"> {{ day.date }}</div>
          <div class="wrapperDays-day"> {{ day.tempOnDays }}</div>
          <div class="wrapperDays-day"><img :src="day.iconWeatherOfDay" alt="iconWeather"></div>
          <div class="wrapperDays-day"> {{ day.cloudinessOnDays }}</div>
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