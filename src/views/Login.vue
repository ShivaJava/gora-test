<template>
  <div class="login d-flex justify-content-center align-items-center px-2">
    <b-card 
      no-body
      tag="form"
      bg-variant="light"
      class="login__card shadow-lg"
      @submit.prevent="login">
      <b-card-header class="text-center">
        <h1 class="h4">Вход</h1>
      </b-card-header>
      <b-card-body>
        <b-alert 
          show
          v-if="error"
          variant="danger">
          {{ error }}
        </b-alert>
        <b-form-group
          label="Адрес почты"
          label-for="email">
          <b-form-input
            id="email"
            type="email"
            autocomplete="username"
            v-model.trim="$v.form.email.$model" />
          <small 
            v-if="$v.form.email.$dirty && !$v.form.email.required"
            class="text-danger">
            Обязательное поле
          </small>
          <small 
            v-if="$v.form.email.$dirty && !$v.form.email.email"
            class="text-danger">
            Некорректный адрес
          </small>
        </b-form-group>
        <b-form-group
          label="Пароль"
          label-for="password">
          <b-form-input
            id="password"
            type="password"
            autocomplete="current-password"
            v-model.trim="$v.form.password.$model" />
            <small 
            v-if="$v.form.password.$dirty && !$v.form.password.required"
            class="text-danger">
            Обязательное поле
          </small>
        </b-form-group>
      </b-card-body>
      <b-card-footer>
        <b-button
          block
          type="submit"
          variant="outline-info">
          Войти
          </b-button>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Home',
  data: () => ({
    form: {
      email : '',
      password : ''
    }
  }),
  validations: {
    form: {
      email: {
        email,
        required
      },
      password: {
        required
      }
    }
  },
  computed: {
    error() {
      return this.$store.getters.GET_ERROR
    }
  },
  methods: {
    login: function () {
      this.$v.$touch()
      if (this.$v.$invalid) return
      this.$store.dispatch('LOGIN', this.form )
      .then(() => this.$router.push('/secure'))
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    min-height: 100vh;

    &__card {
      width: 100%;
      max-width: 320px;
    }
  }
</style>
