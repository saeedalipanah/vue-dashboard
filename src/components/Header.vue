<template>
  <nav>
    <!-- toolbar -->
    <v-toolbar flat class="grey lighten-3 pl-1">
      <v-app-bar-nav-icon
        class="gret--text white"
        elevation="1"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <!-- toolbar buttons -->
      <v-text-field
        label="Search"
        class="mt-6 mr-2"
        style="max-width: 165px"
        color="indigo"
        prepend-icon="mdi-magnify d-none d-sm-flex"
      >
      </v-text-field>

      <v-btn text>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>

      <v-btn text>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-account</v-icon>
      </v-btn>

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
      mobile-breakpoint="800"
    >
      <v-img
        style="position: absolute; z-index: -1"
        height="100%"
        src="../assets/nav.jpg"
        gradient="to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.55)"
      ></v-img>
      <v-list-item dark two-line class="ma-2">
        <v-list-item-content>
          <v-list-item-title class="title text-uppercase title">
            <span class="logo-mini">CT</span>
            <span class="logo-normal ml-6">Creative tim</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="mx-7 my-3 grey lighten--3"></v-divider>

      <v-list class="ma-2">
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/85.jpg"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-title>John Andrew</v-list-item-title>
          </template>

          <v-list-item v-for="(item, i) in john" :key="i" link class="px-6">
            <v-list-item-icon class="caption">{{ item.icon }}</v-list-item-icon>
            <v-list-item-title class="caption">{{
              item.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>

      <v-divider class="mx-7 my-3 grey lighten--3"></v-divider>

      <v-list nav class="mx-2" v-for="(link, i) in links" :key="i">
        <v-list-item :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- end navigation menu -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      john: [
        {
          icon: "MP",
          text: "My Profile",
        },
        {
          icon: "EP",
          text: "Edit Profile",
        },
        {
          icon: "S",
          text: "Setting",
        },
      ],
      links: [
        { icon: "mdi-view-dashboard", title: "Dashboard", route: "/" },
        { icon: "mdi-folder", title: "My projects", route: "/projects" },
      ],
      drawer: true,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
