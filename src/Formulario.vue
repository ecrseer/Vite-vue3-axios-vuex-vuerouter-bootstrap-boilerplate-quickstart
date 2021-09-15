<template>
  <div>

    <Campo nome="nome" v-model="time.nome"></Campo>
    <CampoDropDown nome="estado" v-model="time.estado" :itens="ESTADOS"></CampoDropDown>
    <Campo nome="tecnico" v-model="time.tecnico"></Campo>
    <Campo nome="torcida" tipo="number" v-model="time.torcida"></Campo>
    <Campo nome="fundacao" tipo="number" v-model="time.fundacao_ano"></Campo>
    <CampoText tipo="texto" nome="info" v-model="time.info"></CampoText>
<button type="button" class="btn btn-default navbar-btn">Sign in</button>

    <span v-if="carregando">carregando...</span>
    <button v-else @click="salvar">salvar</button>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Campo from './components/Campo.vue'
import CampoDropDown from './components/CampoDropDown.vue'
import CampoText from './components/CampoText.vue'
import {ESTADOS} from './const.js'

export default {
  name: 'Formulario',
  components: {Campo, CampoDropDown, CampoText},
  data() {
    return {
      editando: false,
      ESTADOS,
      time: {}
    }
  },

  computed: {
    ...mapState(['carregando'])
  },
  methods: {
    async salvar() {
      if (this.editando) {
        await this.$store.dispatch('editar', {
          original: this.editando,
          editado: this.time
        })
        this.editando = false
        this.time = {}
      } else {
        await this.$store.dispatch('criar', this.time)
        this.time = {}
      }
    }
  },
  created() {
    this.$bus.on('editar', (time) => {
      this.editando = time
      this.time = {...time}
    })
  },
  unmounted() {
    this.$bus.off('editar')
  }
}
</script>
