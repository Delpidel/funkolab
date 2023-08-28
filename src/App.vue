<template>
 <body>
  <v-layout>
    <v-app-bar color="#FFA500">
      <v-app-bar-title>Naruto Shippuuden: Narutimate FunkoLab!</v-app-bar-title>

      <v-btn icon>
        <router-link to="/carrinho">
        {{ this.$store.state.produtosCarrinho.length}}
          <v-icon color="#FFF">mdi-cart</v-icon>
        </router-link>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
 </body>
</template>

<style>
body {
  background-color: black;
}
</style>