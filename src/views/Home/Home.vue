<template>
  <h2 class="ml-4 mt-2">Produtos: {{ this.$store.state.produtosCarrinho.length }}</h2>
  <div class="list-products">
    <v-card
      width="260px"
      class="pa-2 mb-6 ml-6 mr-6"
      v-for="product in produtosRestantes"
      :key="product.id"
    >
      <v-img
        :src="product.imagem"
        class="align-end"
        width="300px"
        height="300px"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
      >
        <v-card-title class="text-white">{{ product.nome }} </v-card-title>
      </v-img>
      <v-card-subtitle class="pt-4">
        10x de
        {{
          new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            product.parcela
          )
        }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="white" @click="() => this.$store.dispatch('adicionarProduto', { product })">
          Comprar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: []
    }
  },
  computed: {
    produtosRestantes() {
      return this.products.filter((product) => {
        const itemExiste = this.$store.state.produtosCarrinho.find((item) => item.id === product.id)
        if (itemExiste) return false
        return true
      })
    }
  },
  mounted() {
    this.loadProducts()
  },
  methods: {
    loadProducts() {
      axios({
        url: 'http://localhost:3000/produtos',
        method: 'GET'
      })
        .then((response) => {
          this.products = response.data
        })
        .catch(() => {
          alert('Desculpe, não foi possivel recuperar os produtos')
        })
    }
  }
}
</script>

<style scoped>
.list-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 18px;
}
h2 {
  color: white;
  text-shadow: 2px 2px 3px black;
}
.v-btn {
  background-color: rgb(68, 179, 68);
}
.v-btn:hover {
  background-color: green;
}
</style>
