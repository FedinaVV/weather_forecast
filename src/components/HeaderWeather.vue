<template>
        <header class="header">
             <div class="header__container">
                <div class="header__menu menu">
                    <nav class="menu__body" v-bind:class="{active: isActive}">
                        <ul class="menu__list">
                          <li class="menu__item"><router-link class="menu__link" to="/" active-class="menu__link-active">Погода в Вашем городе</router-link></li>
                          <li class="menu__item"><router-link class="menu__link" to="/weatherForecastSevenDays" active-class="menu__link-active">Прогноз на 7 дней</router-link></li>
                          <li v-if="this.$store.state.token !== '' " class="menu__item"><router-link class="menu__link" to="/favoriteCities">Избранное</router-link></li>
                          <li v-if="this.$store.state.token !== '' " class="menu__item"><router-link to="/listCities" class="menu__link">Список городов</router-link></li>
                          <li class="menu__login" v-if="this.$store.state.token == '' "><router-link class="menu__link dark" to="/authorization" active-class="menu__link-active">Войти</router-link></li>
                          <li class="menu__login" v-if="this.$store.state.token !== '' "><router-link v-on:click="this.$store.commit('updateToken', '')" class="menu__link dark" to="/authorization" active-class="menu__link-active">Выйти</router-link></li>
                          <li class="menu__reg"><router-link class="menu__link dark" to="/registration" active-class="menu__link-active">Зарегистрироваться</router-link></li>
                        </ul>
                    </nav>
                </div>
                <div class="icon-menu" v-bind:class="{active: isActive}" v-on:click="isActive=!isActive"><span></span></div>
             </div>
        </header>
</template>

<script>
export default {
  data(){
      return {isActive: false}
  },
  }

</script>

<style scoped>
</style>

