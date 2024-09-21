const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos2)

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula' //true or false
})

console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paulo' //true or false
})

console.log(indiceDaPaula)

alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosSaoFront = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})

console.log(todosAlunosSaoFront);

const existeAlunoBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlunoBackend);

function filtraAlunoBackend(alunos) {
    return alunos.curso === 'Backend';
}

const alunoDeBackend = alunos2.filter(filtraAlunoBackend)

console.log(alunoDeBackend)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

const alunoDeBackend = alunos2.filter(function(item) {
    return item.curso == 'Backend';
})

console.log(alunoDeBackend)

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')
console.log(nomeDosAlunos)

//const numeros = [1, 2, 3, 4, 5]
//const dobroDosNumeros = numeros.map(function(numeroAtual) {
//    return numeroAtual * 2;
//})
//
//console.log(dobroDosNumeros)

