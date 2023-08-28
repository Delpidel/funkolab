<template>
    Sou a Cart

    {{ this.$store.state.teste }}

    <button @click="this.$store.dispatch('alterarNome', { nome: 'devinhouse'})">Cliquei</button>
</template>