<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col lg="4" md="4" sm="6" cols="9">
            <div @click="$router.push({path: '/',})" class="d-flex align-center">
              <v-img src="./assets/Pics/profile_pic.png" max-width="42px" style="border-radius: 50%"></v-img>
              <h1 class="ml-2 text-lg-h4 text-xl-h4 text-md-h4 text-sm-h4 text-h6">Dhaval Pandya</h1>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col lg="4" md="4" sm="6" cols="3" class="d-flex justify-end align-center">
              <v-icon @click="changeTheme" v-if="this.$vuetify.theme.dark">mdi-lightbulb-on-outline</v-icon>
              <v-icon @click="changeTheme" v-else>mdi-lightbulb-off-outline</v-icon>
            <v-menu offset-y>
              <template v-slot:activator="{on, attrs}">
                <v-app-bar-nav-icon
                  v-bind="attrs"
                  v-on="on">
                </v-app-bar-nav-icon>
              </template>
              <v-card>
                <v-list>
                  <v-list-item v-if="this.$route.name !== 'Home'" @click="$router.push({path: '/',})">
                    <v-icon class="mr-2">mdi-home</v-icon>
                    <v-list-item-title>Home</v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="this.$route.name !=='Co-op Experience'" @click="$router.push({path: '/co-op_experience',})">
                    <v-icon class="mr-2">mdi-office-building</v-icon>
                    <v-list-item-title>Co-op Experience</v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="this.$route.name !=='Projects'" @click="$router.push({path: '/projects',})">
                    <v-icon class="mr-2">mdi-pencil</v-icon>
                    <v-list-item-title>Projects</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main class="mb-6">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer fixed color="primary" class="d-flex align-center justify-center" max-height="24px">
      <a href="https://www.linkedin.com/in/pandyad/" rel="noopener noreferrer" target="_blank" class="d-flex">
        <v-icon class="mr-5"  small>mdi-linkedin</v-icon>
      </a>
      <a href="https://github.com/pandyasdhaval" rel="noopener noreferrer" target="_blank" class="d-flex">
        <v-icon class="mr-4"  small>mdi-github</v-icon>
      </a>
      <a href="mailto:pandyasdhaval@gmail.com" rel="noopener noreferrer" target="_blank" class="d-flex">
        <v-icon class="ml-1" small>mdi-email-outline</v-icon>
      </a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    changeTheme: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
};
</script>
