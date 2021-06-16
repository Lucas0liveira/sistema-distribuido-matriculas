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
        <v-row
          :class="tab === 0 ? 'aluno-row' : 'professor-row'"
        >
          <v-col
            cols="16"
            sm="10"
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
import api from '../services/api.js'

  export default {
    data: () => ({
      cursos: [],
      tab: '',
      linkatual: '',
      links: [
        'Aluno',
        'Professor',
      ],
    }),
  }
</script>

<style llang="scss" scoped>
  .aluno-row {
    justify-content: center !important;
  }

  .professor-row {
    justify-content: center !important;
  }
</style>
