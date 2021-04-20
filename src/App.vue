<template>
  <v-app>
    <app-header></app-header>
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {

  data: () => ({
    //
  }),

  components: {
    appHeader: Header
  }
};
</script>

<style lang="scss">
#app {
  background-color: #eeeeee;
}
</style>
