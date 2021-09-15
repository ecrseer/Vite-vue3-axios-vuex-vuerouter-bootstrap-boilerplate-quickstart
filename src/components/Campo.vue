<template>
  <div class="col-12">
    <label :for="nome" class="form-label colorido" >{{ nome }}</label>
    <input :type="tipo"
     class="form-control"
     :id="nome"
     :placeholder="nome"
     :value="modelValue"
     @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'Campo',
  emits: ['update:modelValue'],
  props: ['nome', 'modelValue', 'tipo'],
  methods: {
    atualizar() {
      this.$emit('bombom')
    }
  }
}
</script>

<style scoped>

.colorido {
  background-color: #0dcaf0;
}

</style>
