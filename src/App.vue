<template>
  <body>
    <v-layout>
      <div class="header">
        <v-app-bar color="#FFA500">
          <v-app-bar-title>Naruto Shippuuden: Narutimate FunkoLab!</v-app-bar-title>
          <v-btn icon>
            <div class="font">
              <router-link to="/carrinho">
                {{ this.$store.state.produtosCarrinho.length }}
                <v-icon color="#FFF">mdi-cart</v-icon>
              </router-link>
            </div>
          </v-btn>
        </v-app-bar>
      </div>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </body>
</template>

<style>
body {
  background-color: cornflowerblue;
}
.v-toolbar-title__placeholder {
  font-family: 'Kanit', sans-serif;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 3px black;
}
a {
  text-decoration: none;
  font-weight: bold;
}
</style>
