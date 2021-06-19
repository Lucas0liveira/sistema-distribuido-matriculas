<template>
  <v-simple-table class="table">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            Registro
          </th>
          <th class="text-left">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in professores"
          :key="item.nome"
          @click="$router.push('/detalhes/professor/'+ item.id)"
        >
          <td>{{ item.nome }}</td>
          <td>{{ getId(item.id) }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  import api from '../services/api.js'

  export default {

    name: 'ProfessorSimpleTable',
    data () {
      return {
        professores: []
      }
    },
    computed: {
      },
    methods: {
      async getprofessores () {
        const response = await api.get('/professor')
        console.log(response.data);

        this.professores = response.data
      },
      getId(id) {
        return Math.floor(Math.random(0,1)*100000) + id
      }
    },
    mounted() {
      this.getprofessores()
      console.log('Mounted');
    }
  }
</script>

<style lang="scss" scoped>

.table {
  padding: 1rem;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);}

</style>