<template>
<div class="currentWeather-main__container">
  <div class="currentWeather-main__wrapperDayLight wrapperDayLight">
    <h2 class="wrapperDayLight__header">Световой день</h2>
  <div class="wrapperDayLight__timeDayLight">Время восхода солнца: {{this.$store.state.weather.sunriseOfDay}}</div>
  <div class="wrapperDayLight__timeDayLight">Время заката солнца: {{this.$store.state.weather.sunsetOfDay}}</div>
  <div class="wrapperDayLight__timeDayLight">Продолжительность светового дня: {{this.$store.state.weather.duration}}</div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>