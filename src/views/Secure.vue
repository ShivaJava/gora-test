<template>
  <div class="secure">
    <b-container>
      <b-row class="text-center my-5">
        <b-col>
          <h1>Я сделал тестовое задание.</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="d-flex justify-content-center">
          <img 
            class="secure__image"
            :src="require('@/assets/images/ggwp.jpg')" 
            alt="">
        </b-col>
      </b-row>
      <b-row class="text-center my-5">
        <b-col lg="6" class="mx-auto">
          <h2>Да-да! Я это сделал изи.</h2>
          <p class="mb-5">Даже не знаю, возможно, нужно было еще компонентов наделать и показать, как я умею создавать компоненты и всякое такое, и всякие классные красивые прелоадеры, и все крутится, и верстится, ух! Но я просто запилю кнопочку "Logout"</p>
          <b-btn 
            @click="logout"
            variant="outline-danger">
            Выйти, чтобы зайти!
          </b-btn>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit('LOGOUT')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  .secure {
    &__image {
      width: 100%;
      height: auto;
    }
  }
</style>
