<template>
  <table>
    <thead>
    <tr >
      <th v-for="(atributo,key) in lista[0]">
        {{ key }}</th>

    </tr>
    </thead>
    <tbody>
    <tr v-for="item in lista">
      <td v-for="(atributo,key) in item">
        {{ atributo }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TabelaMarota',
  props:['lista']
}
</script>
