<template>
  <nav>
    <!-- toolbar -->
    <v-toolbar flat class="grey lighten-3 pl-1">
      <v-app-bar-nav-icon
        class="gret--text white mt-2"
        elevation="1"
        @click="open"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <!-- account and notification menu / dashboard button -->
      <v-text-field
        :label="`${$t('header.search.label')}`"
        class="mt-6 mx-10"
        style="max-width: 165px"
        color="pink darken-4"
        :append-outer-icon="`${$t('header.search.icon')}`"
      >
      </v-text-field>

      <v-menu
        offset-y
        :nudge-left="btn.nudge"
        nudge-bottom="3"
        v-for="(btn, i) in $t('header.buttons')" 
        :key="i"
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            text 
            v-bind="attrs"
            v-on="on"
            class="mt-2"
          >
            <v-icon dense>{{ btn.icon }}</v-icon>
            <v-badge
              v-if="btn.badge"
              :content="btn.content"
              :color="btn.color"
              :class="btn.class"
              bordered>
            </v-badge>
          </v-btn>
        </template>

        <v-list
          v-if="btn.hasList"
          dense
          class="costume-list"
        >
            <v-list-item 
              v-for="(item, i) in btn.list" 
              :key="i" 
              link>
              <v-list-item-content>
                <v-list-item-title class="font-weight-regular">
                  {{ item }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-list>

      </v-menu>

      <!-- end account and notification menu / dashboard button -->


      <!-- language menu -->
      <v-menu 
        offset-y
        :nudge-left="`${$t('header.lanMenu.nudge')}`"
        nudge-bottom="3"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            elevation="0" 
            color="grey lighten-3 mt-2" 
            v-bind="attrs" 
            v-on="on"
          >
            <v-icon>mdi-chevron-down</v-icon>
            <span>{{ $t('header.lanMenu.content') }}</span>
          </v-btn>
        </template>

        <v-list
          dense
          class="costume-list"
        >
          <v-list-item
            v-for="(lan, i) in $t('header.lanMenu.lists')" 
            :key="i"  
            @click="setLang(lan.key)"
            >
            <v-list-item-content>
              <v-list-item-title class="grey-text">
                {{ lan.content }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- end language menu -->

      <!-- end toolbar buttons -->
    </v-toolbar>
    <!-- end toolbar -->

    <!-- navigation menu -->
    <v-navigation-drawer
      v-model="drawer"
      expand-on-hover
      mini-variant-width="90"
      mini-variant
      app
      dark
      mobile-breakpoint="850"
      :right="right()"
    >
      <v-img
        style="position: absolute; z-index: -1"
        height="100%"
        src="../assets/nav.jpg"
        gradient="to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.55)"
      ></v-img>
      <v-list-item-content  dark class="ma-2 py-4">
          <v-list-item-title 
            class="white--text font-weight-regular subtitle-2-1 text-uppercase"
          >
            <span class="mx-8">{{ $t('header.logo.short') }}</span>
            <span class="">{{ $t('header.logo.long') }}</span>
          </v-list-item-title>
      </v-list-item-content>

      <v-divider class="mx-7 mb-3 grey lighten--3"></v-divider>

      <v-list class="ma-2">
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/85.jpg"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-title class="body-2 font-weight-light">{{ $t('header.name') }}</v-list-item-title>
          </template>

          <v-list-item v-for="(item, i) in $t('header.user')" :key="i" link class="px-6">
            <v-list-item-icon class="caption font-weight-light">{{ item.icon }}</v-list-item-icon>
            <v-list-item-title class="caption font-weight-regular mx-n2">{{
              item.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>

      <v-divider class="mx-7 my-3 grey lighten--3"></v-divider>

      <v-list nav class="mx-2" v-for="(link, i) in $t('header.links')" :key="i">
        <v-list-item id="router" :to="link.route" :exact="link.exact" color="myColor">
          <v-list-item-icon class="white--text">
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">
            <v-list-item-title class="font-weight-light">{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- end navigation menu -->
  </nav>
</template>

<script>
import i18n from '../i18n';

export default {
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    open() {
      this.drawer = !this.drawer;
    },
    right() {
      if(i18n.locale == "pr") {
        this.$vuetify.rtl = true;
        return true;
      } else {
        this.$vuetify.rtl = false;
        return false;
      }
    },
    setLang(value) {
      i18n.locale = value;
      this.$router.push({
        params: { lang: value }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.costume-list {
  padding: 4px;
  min-width: 145px;
}

.costume-list .v-list-item {
  border-radius: 1px;
}

.costume-list .v-list-item:hover {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  background-color: #D500F9;

}

#router.v-list-item--active {
  background-color: #e91e63;
}

</style>
