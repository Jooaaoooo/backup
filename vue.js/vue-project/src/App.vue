<script setup>
import { reactive } from 'vue';

const nome = 'gian souza'
const meuObj = {
  nome: 'gian',
  filmeFavorito: 'Rocky'
}

function dizOla(nome) {
  return `${nome} diz oi`;
}

const imagemBatman = 'https://static.wikia.nocookie.net/dccomics/images/0/08/Batman_Vol_3_131_Textless_Fabok_Variant.jpg/revision/latest?cb=20240221225901&path-prefix=pt';

const imagemSuperman = 'https://static.wikia.nocookie.net/dccomics/images/0/08/Batman_Vol_3_131_Textless_Fabok_Variant.jpg/revision/latest?cb=20240221225901&path-prefix=pt';

const botaoEstaDesabilitado = false

const gostaDoBatman = false 

const gostaDoSuperman = false

const estaAutorizado = true

//let contador = 0
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  const nomes = ['gian', 'paulo', 'luisa', 'monica'],
  const nomeInserir = '',
})

function incrementar() {
  contador++;
}

function decrementar() {
  contador--;
}

function alteraEmail(evento) {
  estaAutorizado.email = evento.target.value;
}

function novoSaldo() {
  const {saldo, transferindo} = estado;
  return saldo - transferindo;
}

function validaValorTransiferido() {
  const {saldo, transferindo} = estado;
  return saldo >= transferindo;
}

function cadastrarNome() {
  if (estado.nomeInserir.length >= 3) {
    estado.nomes.push(estado.nomeInserir)
  } else {
    alert("digite mais caracteres")
  }
  console.log(estado);
}

</script>

<template>
  <h1>{{ dizOla('paula') }}</h1>
  <!-- <img v-bind:src="" alt=""> -->
  <!-- <img v-show="gostaDoBatman" :src="enderecoImagem" alt=""> -->
  <img v-if="gostaDoBatman" :src="imagemBatman" alt=""> 
  <img v-else-if="gostaDoSuperman" :src="imagemSuperman" alt=""> 
  <h2 v-else>Não curto heróis da DC</h2>

  <h1 v-if="estaAutorizado">Bem-vindo</h1>
  <h1 v-else>Não Possui acesso</h1>

  <button :disabled="botaoEstaDesabilitado">enviar mensagem</button>

  <br>
  <hr>

  {{ estado.contador }}

  <button @onclick="incrementar" type="button">+</button>
  <button @onclick="decrementar" type="button">-</button>

  <br>
  <hr>

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">

  <br>
  <hr>

  Saldo: {{ estado.saldo }} <br>
  Transferir: {{ estado.transferindo }} <br>
  Novo saldo: {{ novoSaldo() }}
  <input :class="{ invalido: !validaValorTransiferido() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir">
  <button v-if="validaValorTransiferido()">Transferir</button>
  <span v-else>Valor maior que o saldo</span>

  <br>
  <hr>

  <ul>
    <li v-for="nome in estado.nomes">
    {{ nome }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeInserir = evento.target.nome" type="text" placeholder="Digite um nome">
  <button @click="cadastrarNome" type="button">Cadastrar nome</button>

  <h3 v-for="nome in estado.nomes"{{ nome }}></h3>

</template>

<style scoped>

.invalido {
  outline-color: red;
  border-color: red;
}
</style>
