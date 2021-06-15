<template>
<v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-tabs
        centered
        v-model="tab"
        class="ml-n9"
        color="grey darken-1"
        @change="log(tab)"
      >
      <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            align="center"
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="80vh"
              rounded="lg"
              >
             
            </v-sheet>
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    data: () => ({
      links: [
        'Aluno',
        'Professor',
      ],
      linkatual: '',
      tab: ''
    }),
    methods: {
      log (tab) {
        console.log("TAB", tab)
      }
    }
  }
</script>
