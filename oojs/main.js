const carro = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vrum");
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vrum");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroDoRaquel = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroDaRaquel);
console.log(carroDaMaria);

const nome = "Gian"
const idade = 30
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

// 1
//console.log(typeof nome); 
//console.log(typeof idade);
//console.log(typeof ehMaiorDeIdade);
//console.log(typeof conhecimentos);
//console.log(typeof pessoa);
//
//console.log(instanceof carroDaMaria Carro);
//console.log(instanceof conhecimentos Carro);

console.log(pessoa.nome)
console.log(pessoa['nome'])

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');

pessoa['sobrenome'] = undefined;

if (pessoa['sobrenome']) {
    console.log("a pessoa tem um sobrenome")
}

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome');
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

console.log(Object.keys(pessoa).length);
console.log(Object.kevalues(pessoa));