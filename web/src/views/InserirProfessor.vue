<template>
  <v-main class="main">
      <v-container class="container">
        <div class="title">
          <v-btn 
            rounded
            dark
            small
            color="yellow" 
            class="vbtn black--text mr-4"
            to="/"
          >
            <v-icon color="black">mdi-chevron-left</v-icon>
            Voltar
          </v-btn>
          <p>Inserir Professor</p>
        </div>
        <v-sheet
          class="sheet"
          dark
          rounded="lg"
          min-width="40vw"
          min-height="30vh"
        >
          <v-row>
            <v-col>
              <v-text-field
                v-model="professor.nome"
                label="Nome"
                outlined
                dense
                dark
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model="professor.email"
                label="Email"
                outlined
                dense
                dark
              />                         
            </v-col>
          </v-row>

          <v-row justify="end">
            <v-btn 
              rounded
              dark
              small
              color="yellow"
              outlined
              class="vbtn black--text mr-3"
              to="/"
            >
              <v-icon class="mr-2" color="yellow">mdi-cancel</v-icon>
              Cancelar
            </v-btn>

             <v-btn 
              rounded
              dark
              small
              color="yellow" 
              class="vbtn black--text mr-4"
              @click="addAluno"
            >
              <v-icon class="mr-2" color="black">mdi-check</v-icon>
              Salvar
            </v-btn>
          </v-row>
        </v-sheet>
      </v-container>
    </v-main>
</template>

<script>
import api from '../services/api.js'

export default {
  data () {
    return {
      professor: {
        nome: '',
        email: ''
      }
    }
  },
  methods: {
    async addAluno () {
      try {
        await api.post('/professor', {
          nome: this.professor.nome,
          email: this.professor.email,
        })
        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  },
}
</script>

<style lang="scss" scoped>

  .main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #1e1e1e;
    height: 100vh;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .sheet {
    margin-top: 5rem;
    padding: 1.5rem;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);
  }

  .title {
    width: 54vw;
    color: white;
    display: flex;
    justify-content: flex-start;
  }

</style>