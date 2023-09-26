<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Imagem</th>
        <th class="text-left">Nome</th>
        <th class="text-left">Quantidade</th>
        <th class="text-left">Preço</th>
        <th class="text-left">Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in this.$store.state.produtosCarrinho" :key="item.id">
        <td><img :src="item.imagem" width="30" /></td>
        <td>{{ item.nome }}</td>
        <td>{{ item.quantidade }}</td>
        <td>{{ item.preco }}</td>
        <td>
          {{
            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              item.quantidade * item.preco
            )
          }}
        </td>
        <td>
          <v-btn @click="removeItem(item)">Excluir</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
export default {
  data() {
    return {
      cartItems: this.$store.state.produtosCarrinho
    }
  },
  methods: {
    removeItem(itemToRemove) {
      const exclusion = this.cartItems.findIndex((item) => item.id === itemToRemove.id)
      if (exclusion !== -1) {
        this.cartItems.splice(exclusion, 1)
      }
    }
  }
}
</script>
<style scoped>
.v-btn {
  background-color: red;
  color: white;
}
.v-btn:hover {
  background-color: brown;
}
</style>
