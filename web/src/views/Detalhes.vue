<template>
  <div>
    <v-main class="main">
      <v-container v-if="isAluno && item !== null">
         <v-row class="vrow">
           <v-btn 
            rounded
            dark
            small
            color="yellow" 
            class="vbtn black--text"
            to="/"
          >
            <v-icon color="black">mdi-chevron-left</v-icon>
            Voltar
          </v-btn>
          <v-col
            cols="8"
            sm="6"
          >
             
            <v-sheet
              class="sheet"
              dark
              rounded="lg"
              min-height="80vh"
            >
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="item.nome"
                    label="Nome"
                    outlined
                    dense
                    dark
                    @change="changed = true"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="item.rga"
                    label="RGA"
                    outlined
                    dense
                    dark
                    @change="changed = true"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    v-model="item.email"
                    label="E-mail"
                    outlined
                    dense
                    dark
                    @change="changed = true"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="item.curso_do_aluno.nome_curso"
                    label="Curso"
                    outlined
                    dense
                    dark
                    @change="changed = true"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    v-model="item.createdAt"
                    label="Criado em"
                    outlined
                    dense
                    dark
                    @change="changed = true"
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="item.updatedAt"
                    label="Atualizado em"
                    outlined
                    dense
                    dark
                    @change="changed = true"
                    disabled
                  />
                </v-col>
              </v-row>

              <v-row justify="end" class="mr-4">
                <v-btn 
                  rounded
                  dark
                  small
                  color="red" 
                  class="white-text"
                  @click="deletarAluno"
                >
                  <v-icon color="white">mdi-delete</v-icon>
                  Apagar
                </v-btn>
              </v-row>

              <v-row justify="space-around" class="mr-4 mt-10" v-show="changed">
                <v-btn 
                  rounded
                  dark
                  small
                  color="yellow" 
                  class="black--text"
                  @click="salvarAluno"
                >
                  <v-icon color="black">mdi-check</v-icon>
                  Salvar
                </v-btn>

                <v-btn 
                  rounded
                  dark
                  small
                  outlined
                  color="yellow" 
                  class="white-text"
                  @click="$router.push('/')"
                >
                  <v-icon color="yellow">mdi-cancel</v-icon>
                  Cancelar
                </v-btn>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-if="!isAluno">
       <v-row class="vrow">
        <v-btn 
            rounded
            dark
            small
            color="yellow" 
            class="vbtn black--text"
            to="/"
          >
            <v-icon color="black">mdi-chevron-left</v-icon>
            Voltar
          </v-btn>
          <v-col
            cols="8"
            sm="6"
          >
            <v-sheet
              class="sheet"
              dark
              rounded="lg"
              min-height="80vh"
            >
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="item.nome"
                    label="Nome"
                    outlined
                    dense
                    dark
                    @change="changed = true"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    v-model="item.email"
                    label="E-mail"
                    outlined
                    dense
                    dark
                    @change="changed = true"
                  />
                </v-col>
              </v-row>

              <v-row>
                 <v-chip
                  v-for="disciplina in item.disciplinas"
                  :key="disciplina.id"
                  class="ma-2"
                  text-color="white"
                  @click:close="false"
                >
                  {{ disciplina.nome_disciplina }}
                </v-chip>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    v-model="item.createdAt"
                    label="Criado em"
                    outlined
                    dense
                    dark
                    @change="changed = true"
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="item.updatedAt"
                    label="Atualizado em"
                    outlined
                    dense
                    dark
                    @change="changed = true"
                    disabled
                  />
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import api from '../services/api.js'

export default {

  data () {
    return {
      item: null,
      changed: false
    }
  },
  methods: {
    async getItem () {
      const { id, item } = this.$route.params
      const response = await api.get(`/${ item }/${ id }`)
      
      this.item = response.data
    },
    async deletarAluno () {
      try {
        const response = await api.delete('/aluno/' + this.item.id)
      } catch (error) {
        console.error("ERRO", error)
      } finally {
        this.$router.push('/')
      }
    },
    async salvarAluno () {
      try {
        await api.put(`/aluno/${this.item.id}`, this.item)
      } catch (error) {
        console.error(error)
      } finally {
        this.$router.push('/')
      }
    },
    reset () {
      this.item = null;
    }
  },
  computed: {
    isAluno () {
      return Boolean(this.$route.params.item === 'aluno')
    },
    alunoAlterado() {
      const keys = Object.values(this.aluno)
      return keys.some(key => key === '')
    },
  },

  mounted () {
    this.reset()
    this.getItem()
  },

}
</script>

<style lang="scss" scoped>

  .main {
    background-color: #1e1e1e;
    height: 100vh;
  }

  .vrow {
    justify-content: center;
  }

  .sheet {
    margin-top: 5rem;
    padding: 1rem;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);
  }

  .vbtn {
    margin-left: -5rem;
    position: sticky;
    top: 10.5%;
    margin-top: 1rem;
  }

</style>