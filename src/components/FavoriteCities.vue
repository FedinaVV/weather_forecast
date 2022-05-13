<template>
  <div class="main__favoriteCities favoriteCities-main">
    <div class="favoriteCities-main__container">
      <div class="favoriteCities-main__block-text">
        <p class="favoriteCities-main__textEmpty" v-if="cities.length === 0">Здесь пока пусто!</p>
        <p class="favoriteCities-main__textListCities" v-if="cities.length > 0">Список городов</p>
      </div>
        <div class="favoriteCities-main__list-cities" v-for="city in cities" :key="city.id">
          <router-link to="/weatherCity"><div @click="this.$store.dispatch('getCoordinatesCityById', city.api_city_id)" class="listFavoriteCities">{{city.name}}</div></router-link>
          <button v-on:click="deleteCities(city.id)" class="block-cities__city-btnDel">Удалить</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cities: []
    }
  },
  methods: {
    getFavoriteCities() {
      this.axios
          .get(this.$store.state.addressBack + `City/getFavourite`,
              {
                headers: {
                  'Authorization': "Bearer " + this.$store.state.token,
                }
              })
          .then(response => {
                let listCities = response.data.data;
                listCities.forEach((city) => {
                  this.cities.push(city);
                })
                console.log(response);
              }
          )
          .catch(err => {
            alert("Не удалось получить список избранных городов!");
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
              }
          )
          .catch(err => {
            alert("Не удалось удалить город!");
            console.error(err);
          });
      this.cities = this.cities.filter((value) => {
        return value.id !== id;
      })
    },
  },
  mounted() {
    this.getFavoriteCities()
  }
}
</script>



<style scoped>
.favoriteCities-main__container {
  padding: 130px 0 0 0;
  text-align: center;
}

.favoriteCities-main__textEmpty {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 20px 0;
}
</style>