<template>
  <div class="main__listCities listCities-main">
    <div class="listCities-main__container">
      <div class="listCities-main__block-cities block-cities">
        <h1 class="block-cities__heading">Список городов</h1>
        <div class="block-cities__cities" v-for="city in cities" :key="city.id">
          <router-link to="/weatherCity">
            <div class="block-cities__city" @click="this.$store.dispatch('getCoordinatesCityById', city.api_city_id)">
              {{ city.name }}
            </div>
          </router-link>
          <button v-on:click="addCities(city.id)" class="block-cities__city-btnAdd">Добавить</button>
          <button v-on:click="deleteCities(city.id)" class="block-cities__city-btnDel">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cities: [],
    }
  },
  methods: {
    getCities() {
      this.axios
          .get(this.$store.state.addressBack + `City/get`,
              {
                headers: {
                  'Authorization': "Bearer " + this.$store.state.token,
                }
              })
          .then(response => {
                let listCities = response.data.data;
                listCities.forEach((city) => {
                  this.cities.push(city);
                 });

                console.log(response);
              }
          )
          .catch(err => {
            alert("Не удалось получить список городов!");
            console.error(err);
          })
    },

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
    },

    deleteCities(id) {
      let addressAddCity = this.$store.state.addressBack + `City/remove/` + id;
      this.axios
          .delete(addressAddCity,
              {
                headers: {
                  'Authorization': "Bearer " + this.$store.state.token,
                },
              })
          .then(response => {
                console.log(response);
                alert("Город был удален из Избранного!")
              }
          )
          .catch(err => {
            alert("Не удалось удалить город!");
            console.error(err);
          })
    }

  },
  mounted() {
    this.getCities();
  }
}

</script>

<style scoped>
</style>