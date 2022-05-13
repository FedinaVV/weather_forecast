<template>
      <div class="main__geolocationCity geolocationCity-main">
        <div class="geolocationCity-main__container">
          <div class="geolocationCity-main__block">
            <div class="headerCity">
              Погода в <span id="status">{{ this.$store.state.weather.cityName }}</span>
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

