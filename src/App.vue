<template>
  <div id="app">
    <div class="wrapper">
      <headerWeather/>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import HeaderWeather from './components/HeaderWeather.vue';
export default {
  components: {
    HeaderWeather
  }
}
</script>

<style>
</style>
