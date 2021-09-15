<template>
  <div class="col-12">
    <label :for="nome"  class="form-label">{{ nome }}</label>
    <select
      class="form-control"
      :id="nome"
      :placeholder="nome"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)">
      <option v-for="item in itens" :key="item" :value="item">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CampoDropDown',
  emits: ['update:modelValue'],
  props: ['nome', 'modelValue', 'itens'],
  methods: {
    atualizar() {
      this.$emit('bombom')
    }
  }
}
</script>

<style scoped>

</style>
