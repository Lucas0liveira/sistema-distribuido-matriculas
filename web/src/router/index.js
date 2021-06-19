import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detalhes from '../views/Detalhes.vue'
import InserirAluno from '../views/InserirAluno.vue'
import InserirProfessor from '../views/InserirProfessor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detalhes/:item/:id',
    name: 'detalhes',
    component: Detalhes
  },
  {
    path: '/inserir/aluno',
    name: 'inserirAluno',
    component: InserirAluno
  },
  {
    path: '/inserir/professor',
    name: 'inserirProfessor',
    component: InserirProfessor
  },
]

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});
