  <template>
    <div class="main__registrationForm registrationForm-main">
      <div class="registrationForm-main__container">
        <h1 class="registrationForm-main__heading">Регистрация</h1>
        <form class="registrationForm-main__regForm" @submit.prevent>
          <label class="registrationForm-main__label">Имя пользователя</label>
          <input class="registrationForm-main__input" v-model="username" type="text" required placeholder="Введите ваше имя">
          <label class="registrationForm-main__label">Адрес электронной почты</label>
          <input class="registrationForm-main__input" v-model="email" type="text" required placeholder="Введите адрес электронной почты">
          <label class="registrationForm-main__label">Пароль</label>
          <input class="registrationForm-main__input" v-model="password" type="password" required placeholder="Введите пароль">
          <!--<label class="registrationForm-main__label">Подтверждение пароля</label>
          <input class="registrationForm-main__input" v-model="repeatPassword" type="password" required placeholder="Повторите пароль">-->
          <button class="registrationForm-main__btnSubmit" v-on:click="register">Зарегистрироваться</button>
          <p>Уже есть аккаунт? <router-link to="/authorization" class="authLink">Вход</router-link></p>
        </form>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          username: '',
          password: '',
          email: '',
          //repeatPassword: ''
        }
      },
      methods: {
        register() {
          let addressReq = this.$store.state.addressBack + `api/register`;
          this.axios
          .post(addressReq, { headers:
                {'Cache-Control' :  'no-cache',
                  'Postman-Token' : '<calculated when request is sent>',
                  'Content-type': 'application/json',
                  'Content-Length' : "<calculated when request is sent>",
                  "Host" : "<calculated when request is sent>"},
            'name': this.username, 'email': this.email, 'password': this.password})
          .then(response => {
            console.log(response);
           this.$router.push('/authorization')
            alert('Вы успешно зарегистрированы')
           })
          .catch(err => { console.error(err);
            alert('Не удалось зарегистрироваться')
          })
        }
      }
    }
  </script>

  <style scoped>
  </style>
