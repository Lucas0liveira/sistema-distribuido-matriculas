<template>
    <v-main class="main">
      <v-container>
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
          <p>Inserir Aluno</p>
        </div>
        <v-sheet
          class="sheet"
          dark
          rounded="lg"
          min-height="40vh"
          title="Inserir Aluno"
        >
          <v-row>
            <v-col md="4">
              <v-text-field
                v-model="aluno.rga"
                label="RGA"
                outlined
                dense
                dark
              />
            </v-col>
            <v-col md="8">
              <v-text-field
                v-model="aluno.nome"
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
                v-model="aluno.email"
                label="Email"
                outlined
                dense
                dark
              />                         
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-select
                :items="cursos"
                v-model="aluno.curso"
                label="Curso"
                outlined
                dense
                @change="getDisciplinas()"
              ></v-select>                 
            </v-col>
            <v-col>
              <v-select
                :items="disciplinas"
                v-model="aluno.disciplina"
                multiple
                label="Disciplina"
                outlined
                dense
                :disabled="!aluno.curso"
              ></v-select>                 
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
      aluno: {
        rga: '',
        nome: '',
        email: '',
        curso: '',
        disciplina: [],
      },
      cursos: [],
      disciplinas: []
    }
  },
  methods: {
    async getCursos () {
      const response = await api.get(`/curso`)
      
      this.cursos = response.data
      this.cursos = this.cursos.map(curso => {
        const text = curso.nome_curso
        const value = curso.id
        return { text, value }
      })
    },

    async getDisciplinas () {
      const id = this.aluno.curso
      const response = await api.get(`/curso/${id}/disciplina`)
      
      this.disciplinas = response.data

      this.disciplinas = this.disciplinas.map(disciplina => {
        const value = disciplina.id
        const text = disciplina.nome_disciplina
        return { text, value }
      })
    },

    async addAluno () {
      try {
        await api.post('/aluno', {
          rga: this.aluno.rga,
          nome: this.aluno.nome,
          email: this.aluno.email,
          curso: this.aluno.curso,
          id_disciplinas: this.aluno.disciplina
        })
        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted () {
    this.getCursos()
  }
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