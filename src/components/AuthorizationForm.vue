<template>
  <div class="main__authorizationForm authorizationForm-main">
    <div class="authorizationForm-main__container">
      <h1 class="authorizationForm-main__heading">Авторизация</h1>
      <form class="authorizationForm-main__login" @submit="login">
        <label class="authorizationForm-main__label">Имя пользователя</label>
        <input class="authorizationForm-main__input" v-model="username" type="text" required placeholder="Введите ваше имя">
        <label class="authorizationForm-main__label">Пароль</label>
        <input class="authorizationForm-main__input" v-model="password" type="password" required placeholder="Введите пароль">
        <button class="authorizationForm-main__btnSubmit" type="submit">Войти</button>
        <p>Еще не зарегистрированы? <router-link to="/registration" class="regLink">Регистрация</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {

    login: function () {
      this.$router.push('/');
      let loginAndPassword = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch("getToken", loginAndPassword);

    },

  }
}

</script>

<style scoped>
</style>