<template>
  <div class="main__weatherCity">
      <div class="weatherCity__container">
        <h2 class="weatherCity-header">Погода в {{ this.$store.state.WeatherCity.cityName }}</h2>
         <div class="wrapper-btnAddFav" v-if="this.$store.state.token !== '' ">
            <button v-on:click="addCities(city.id)" class="btnAddFav">Добавить в избранное</button>
          </div>
        <div class="currentWeather-main__forecast">
          <h2>Погода сейчас</h2> <br>
          <div class="currentWeather-main__fullInfoDate">
            <p class="currentWeather-main__dateTimeWeek">{{ this.$store.state.WeatherCity.dateTimeWeek }}</p>
          </div>
          <p class="currentTemp">{{ this.$store.state.WeatherCity.temperature }}</p>
          <div class="weather-icon"><img :src="this.$store.state.WeatherCity.weatherIcon" alt="iconWeather"></div>
          <p class="currentСloudiness">{{ this.$store.state.WeatherCity.cloudiness }}</p> <br>
          <div class="currentWeather-main__wrapperPressureHumidity">
            <p class="currentWeather-main__pressure"> Давление: <span
                class="currentPressure">{{ this.$store.state.WeatherCity.pressure }}</span></p>
            <p class="currentWeather-main__humidity">Влажность: <span
                class="currentHumidity">{{ this.$store.state.WeatherCity.humidity }}</span></p>
          </div>
          <div class="currentWeather-main__wrapperWind">
            <p class="currentWeather-main__wind-speed">Скорость ветра: <span
                class="currentWindSpeed">{{ this.$store.state.WeatherCity.windSpeed }}</span></p>
            <p class="currentWeather-main__wind-direction">Направление ветра: <span
                class="currentWindDirection">{{ this.$store.state.WeatherCity.windDirection }}</span>
            </p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {

  methods: {
    addCities(id) {
      let addressAddCity = this.$store.state.addressBack + `City/add/` + id;
      this.axios
          .post(addressAddCity,
              {}, {
                headers: {
                  'Authorization': "Bearer " + this.$store.state.token
                },
              })
          .then(response => {
                console.log(response);
                alert("Город был добавлен в Избранное!")
              }
          )
          .catch(err => {
            alert("Не удалось добавить город!");
            console.error(err);
          })
    }
  }
}
</script>

<style scoped>

</style>