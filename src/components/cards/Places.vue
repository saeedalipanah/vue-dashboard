<template>
  <v-card
    class="mx-auto my-12 px-3"
    elevation="1"
    @mouseover="animateCard(index)"
    @mouseleave="endCard(index)"
  >
    <v-img
      :src="`https://picsum.photos/500/300?image=${index * 5 + 10}`"
      :lazy-src="`https://picsum.photos/10/6?image=${index * 5 + 10}`"
      class="grey lighten-2 card elevation-4"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-col class="text-center py-0 mt-n12 hide" cols="12">
      <v-tooltip
        bottom
        v-for="(btn, i) in $t('dashboard.lastCards.buttons')"
        :key="i"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon :color="btn.color" class="mx-2" v-bind="attrs" v-on="on">
            <v-icon>{{ btn.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ btn.tooltip }}</span>
      </v-tooltip>
    </v-col>

    <div class="d-flex grow flex-wrap justify-center">
      <v-card-title class="font-weight-light justify-center">
        {{ place.title }}
      </v-card-title>
      <v-card-text class="body-1 text-center mb-3 font-weight-light grey--text">
        {{ place.text }}
      </v-card-text>
    </div>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="mb-2">
      <div class="display-2 font-weight-light grey--text body-2">
        {{ place.price }}/{{ place.time }}
      </div>
      <v-spacer></v-spacer>
      <span class="caption grey--text font-weight-light">
        <v-icon>mdi-map-marker</v-icon>{{ place.location }}</span
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ["place", "index"],
    methods: {
        animateCard(value) {
        const cards = document.getElementsByClassName('card')[value];

        cards.classList.add('end');
        },
        endCard(value) {
        const charts = document.getElementsByClassName('card')[value];

        charts.classList.remove('end');
        },
    }
};
</script>

<style scoped>
.card {
  top: -15px;
  z-index: 1;
  transition: all 0.4s ease;
}

.end {
  transform: translateY(-35px);
}
</style>