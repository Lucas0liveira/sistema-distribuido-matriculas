<template>
  <v-simple-table class="table">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            RGA
          </th>
          <th class="text-left">
            Curso
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in alunos"
          :key="item.nome"
          @click="$router.push('/detalhes/aluno/'+item.id)"
        >
          <td>{{ item.nome }}</td>
          <td>{{ item.rga }}</td>
          <td>{{ item.curso_do_aluno.nome_curso }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  import api from '../services/api.js'

  export default {

    name: 'AlunoSimpleTable',
    data () {
      return {
        alunos: []
      }
    },
    methods: {
      async getAlunos () {
        const response = await api.get('/aluno')

        this.alunos = response.data
      }
    },
    mounted() {
      this.getAlunos()
    }
  }
</script>

<style lang="scss" scoped>

.table {
  padding: 1rem;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);
}

</style>