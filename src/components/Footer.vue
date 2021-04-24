<template>
  <v-footer class="px-7 py-5 grey lighten-5">
    <v-row class="align-center" no-gutters>
      <v-col class="text-center mb-sm-0 mb-5" cols="auto">
        <a
          :href="link.href"
          class="mr-0 px-3 grey--text text--darken-3 text-decoration-none text-uppercase caption font-weight-bold"
          v-for="(link, i) in $t('footer.links')"
          :key="i"
          >{{ link.text }}</a
        >
      </v-col>

      <v-spacer class="hidden-sm-and-down"></v-spacer>

      <v-col cols="12" md="auto">
          <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
              {{ $t('footer.first') }}
              <v-icon>mdi-heart</v-icon>
              {{ $t('footer.second') }}
              <a href="#" class="pink--text text--darken-4 text-decoration-none">{{ $t('footer.link.text') }}</a>
              {{ $t('footer.last') }}
          </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
</style>