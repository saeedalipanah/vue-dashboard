<template>
  <v-card class="px-3" elevation="1">
    <v-row class="card-header mb-4" no-gutters>
      <v-col cols="12" sm="2">
        <v-card-title
          class="rounded elevation-4 icon-title mt-n4"
          :class="item.color"
        >
          <v-icon large color="white">{{ item.hI }}</v-icon>
        </v-card-title>
      </v-col>
      <v-col cols="12" sm="10">
        <div class="ml-auto text-end py-2">
          <div class="body-3 grey--text font-weight-light">
            {{ item.hSubtitle }}
          </div>
          <div class="headline font-weight-light text--primary">
            {{ item.hTitle }}
          </div>
        </div>
      </v-col>
    </v-row>

    <v-divider class="mx-2"></v-divider>

    <v-card-actions>
      <v-icon :color="item.fColor" small>{{ item.fI }}</v-icon>
      <span class="mx-2 caption grey--text font-weight-light">
        {{ item.fText }}
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ["item"]
};
</script>

<style scoped>

.icon-title {
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>