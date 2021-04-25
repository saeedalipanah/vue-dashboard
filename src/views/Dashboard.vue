<template>
  <v-container fluid class="dashboard">
    <v-row>
      <v-col cols="12" v-for="(fCard, i) in $t('dashboard.firstCards')" :key="i">
        <app-first-card :card="fCard"></app-first-card>
      </v-col>

      <v-col cols="12" lg="4" sm="12" md="12">
        <v-card 
          class="mx-auto my-12 px-3" 
          elevation="1"
          @mouseover="animateChart(0)"
          @mouseleave="endChart(0)"
        >
          <v-img
            class="chart elevation-4 rounded"
            src="../assets/charts/chart1.png"
          >
          </v-img>

          <v-col class="text-center py-0 mt-n12 hide" cols="12">
            <v-tooltip bottom v-for="(btn, i) in $t('dashboard.secondCards.buttons')" :key="i">
              <template v-slot:activator="{ on, attrs }">
                <v-btn 
                  icon
                  :color="btn.color"
                  v-bind="attrs"
                  v-on="on"
                  class="mx-2"
                >
                  <v-icon>{{ btn.icon }}</v-icon>
                </v-btn>
              </template>
              <span>{{ btn.tooltip }}</span>
            </v-tooltip>
          </v-col>

          <v-card-text>
            <v-card-title class="font-weight-light">
              {{ $t('dashboard.secondCards.charts[0].title') }}
            </v-card-title>
            <v-card-subtitle class="font-weight-light">
              {{ $t('dashboard.secondCards.charts[0].text') }}
            </v-card-subtitle>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-icon small>mdi-clock-outline</v-icon>
            <span class="mx-1 body-2 grey--text font-weight-light">{{
              $t('dashboard.secondCards.charts[0].subtitle')
            }}</span>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4" sm="12" md="12">
        <v-card 
          class="mx-auto my-12 px-3"
          elevation="1"
          @mouseover="animateChart(1)"
          @mouseleave="endChart(1)"
        >
          <v-img
            class="chart elevation-4 rounded"
            src="../assets/charts/chart2.png"
          >
          </v-img>

          <v-col class="text-center py-0 mt-n12 hide" cols="12">
            <v-tooltip bottom v-for="(btn, i) in $t('dashboard.secondCards.buttons')" :key="i">
              <template v-slot:activator="{ on, attrs }">
                <v-btn 
                  icon
                  :color="btn.color"
                  v-bind="attrs"
                  v-on="on"
                  class="mx-2"
                >
                  <v-icon>{{ btn.icon }}</v-icon>
                </v-btn>
              </template>
              <span>{{ btn.tooltip }}</span>
            </v-tooltip>
          </v-col>

          <v-card-text>
            <v-card-title class="font-weight-light">
              {{ $t('dashboard.secondCards.charts[1].title') }}
            </v-card-title>
            <v-card-subtitle class="font-weight-light">
              {{ $t('dashboard.secondCards.charts[1].text') }}
            </v-card-subtitle>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-icon small>mdi-clock-outline</v-icon>
            <span class="mx-1 body-2 grey--text font-weight-light">{{
              $t('dashboard.secondCards.charts[1].subtitle')
            }}</span>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4" sm="12" md="12">
        <v-card 
          class="mx-auto my-12 px-3" 
          elevation="1"
          @mouseover="animateChart(2)"
          @mouseleave="endChart(2)"
        >
          <v-img
            class="chart elevation-4 rounded"
            src="../assets/charts/chart3.png"
          >
          </v-img>

          <v-col class="text-center py-0 mt-n12 hide" cols="12">
            <v-tooltip bottom v-for="(btn, i) in $t('dashboard.secondCards.buttons')" :key="i">
              <template v-slot:activator="{ on, attrs }">
                <v-btn 
                  icon
                  :color="btn.color"
                  v-bind="attrs"
                  v-on="on"
                  class="mx-2"
                >
                  <v-icon>{{ btn.icon }}</v-icon>
                </v-btn>
              </template>
              <span>{{ btn.tooltip }}</span>
            </v-tooltip>
          </v-col>

          <v-card-text>
            <v-card-title class="font-weight-light">
              {{ $t('dashboard.secondCards.charts[2].title') }}
            </v-card-title>
            <v-card-subtitle class="font-weight-light">
              {{ $t('dashboard.secondCards.charts[2].text') }}
            </v-card-subtitle>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-icon small>mdi-clock-outline</v-icon>
            <span class="mx-1 body-2 grey--text font-weight-light">{{
              $t('dashboard.secondCards.charts[2].subtitle')
            }}</span>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" lg="3" v-for="(item, i) in $t('dashboard.items')" :key="i" class="mb-6">
        <app-item :item="item"></app-item>
      </v-col>


      <v-col cols="12" sm="12" class="font-weight-light mt-1" style="font-size: 25px;">
        {{ $t('dashboard.row.content') }}
      </v-col>

      <v-col sm="12" md="4" cols="12" v-for="(card ,i) in $t('dashboard.lastCards.cards')" :key="i">
       <app-places :place="card" :index="i"></app-places>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import FirstCardVue from '../components/cards/FirstCard.vue';
import ItemVue from '../components/cards/Item.vue';
import PlacesVue from '../components/cards/Places.vue';
export default {
  data() {
    return {
      src: '../assets/charts/chart1.png'
    };
  },
  methods: {
    animateChart(value) {
      const charts = document.getElementsByClassName('chart')[value];

      charts.classList.add('end');
    },
    endChart(value) {
      const charts = document.getElementsByClassName('chart')[value];

      charts.classList.remove('end');
    },
    animateCard(value) {
      const cards = document.getElementsByClassName('card')[value];

      cards.classList.add('end');
    },
    endCard(value) {
      const charts = document.getElementsByClassName('card')[value];

      charts.classList.remove('end');
    },
  },
  components: {
    appFirstCard: FirstCardVue,
    appItem: ItemVue,
    appPlaces: PlacesVue,
  }
};
</script>

<style>
.icon-title {
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart {
  top: -15px;
  z-index: 1;
  transition: all 0.4s ease;
}

.end {
  transform: translateY(-35px);
}

</style>


