import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            teste: 'Ola mundo',
            produtosCarrinho: []
        }
    },
    mutations: {
        alterarTeste(state, value){
            state.teste = value

        },
        adicionarProdutoAoCarrinho(state, value) {
            state.produtosCarrinho = [...state.produtosCarrinho, value]

        }

    },
    actions: {
        alterarNome(context, value) {
            console.log(value.nome)
            console.log("Entrei no alterar nome")
            context.commit("alterarTeste", value.nome)
        },
        adicionarProduto(context, value) {
            console.log("Entrei dentro do adicionarProduto")
            console.log(value.product)
            context.commit("adicionarProdutoAoCarrinho", value.product)
        }
    }
})

export default store