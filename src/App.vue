<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <router-view class="mb-4 pt-14 px-7"></router-view>
      <app-footer></app-footer>
    </v-main>
  </v-app>
</template>

<script>
import FooterVue from './components/Footer.vue';
import Header from './components/Header'

export default {

  data: () => ({
    //
  }),

  components: {
    appHeader: Header,
    appFooter: FooterVue
  }
};
</script>

<style lang="scss">
#app {
  background-color: #eeeeee;
}
</style>
