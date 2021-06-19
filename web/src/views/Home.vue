<template>
<v-app id="inspire">
    <v-app-bar
      app
      color="black"
      dark
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

    <v-main class="main">
      <v-container>
        <v-row
          :class="tab === 0 ? 'aluno-row' : 'professor-row'"
        >
          <v-col
            cols="8"
            sm="6"
          >
            <v-sheet
              dark
              rounded="lg"
              >
              <aluno-simple-table v-if="tab === 0"/>
              <professor-simple-table v-if="tab === 1"/>
              <v-btn 
                rounded
                dark 
                small
                color="yellow" 
                class="vbtn black--text"
                :to="linkInserir"
              >
                Adicionar
                <v-icon color="black">mdi-plus</v-icon>
              </v-btn>
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
    components: {
      AlunoSimpleTable: () => import('../components/AlunoSimpleTable.vue'),
      ProfessorSimpleTable: () => import('../components/ProfessorSimpleTable.vue')
    },
    computed: {
      linkInserir() {
        return this.tab === 0 ? '/inserir/aluno' : '/inserir/professor'
      }
    }
  }
</script>

<style llang="scss" scoped>
  .aluno-row {
    justify-content: center !important;
  }

  .professor-row {
    justify-content: center !important;
  }

  .main {
    background-color: #1e1e1e;
  }

  .vbtn {
    margin-left: 103%;
    margin-bottom: 0.5rem;
    position: sticky;
    bottom: 0;
    margin-top: 1rem;
  }

</style>
