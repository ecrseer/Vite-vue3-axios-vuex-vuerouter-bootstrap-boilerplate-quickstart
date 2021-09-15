<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Nomes</th>
        <th>Estado</th>
        <th>Torcida</th>
        <th>Ano</th>
        <th>info</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(time, index) in times">
        <td>{{ time.nome }}</td>
        <td>{{ time.estado }}</td>
        <td>{{ time.torcida }}</td>
        <td>{{ time.fundacao_ano }}</td>
        <td>{{ time.info }}</td>
        <td>
          <button class="colorido" @click="editar(time)">editar</button>
        </td>
        <td>
          <span v-if="carregando">carregando</span>
          <button v-else @click="apagar(time)">apagar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Tabela',

  computed: {
    ...mapState(['times', 'carregando']),
  },
  methods: {
    ...mapActions(['apagar']),
    editar(time){
      this.$bus.emit('editar', time)
    }
  }
}
</script>
<style scoped>

.colorido {
  background-color: #d90df0;
}


</style>
