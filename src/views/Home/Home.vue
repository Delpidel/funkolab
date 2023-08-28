<template>
    <h1>Produtos</h1>
    <div class="list-products">
    <v-card width="30%" class="pa-2 mb-2" v-for="product in products" :key="product.id">
        <v-img 
            :src="product.imagem" 
            class="align-end" 
            width="100%" 
            cover
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
            <v-card-title class="text-white">{{product.nome}}</v-card-title>
        </v-img>
        <v-card-subtitle class="pt-4">10x de {{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.parcela)}} </v-card-subtitle>

        <v-card-actions>
            <v-btn color="orange" @onclick="() => adicionarAoCarrinho(product)">
                Comprar
            </v-btn>
        </v-card-actions>
    </v-card>
    {{ produtosCarrinho.length }} No carrinho
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data(){
            return {
                products: [],
                produtosCarrinho: []
            }   
        },
        mounted() {
            this.loadProducts()

        },
        methods: {
            loadProducts(){
                axios({
                    url: 'http://localhost:3000/produtos',
                    method: 'GET',
                })
                .then((response) => {
                    this.products = response.data

                })
                .catch(() => {
                    alert("Desculpe, não foi possível recuperar os produtos")
                })
            },
            adicionarAoCarrinho(produto){
                this.produtosCarrinho.push(produto)
            }
        }
    }
</script>

<style>
    .list-products {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>