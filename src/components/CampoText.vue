<template>
  <div class="col-12">
    <label :for="nome" class="form-label">{{ nome }}</label>
    <textarea
      class="form-control"
      :id="nome"
      :placeholder="nome"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)">
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'CampoText',
  emits: ['update:modelValue'],
  props: ['nome', 'modelValue'],
  methods: {
    atualizar() {
      this.$emit('bombom')
    }
  }
}
</script>

<style scoped>

</style>
