let meuMap = new Map();
meuMap.set('nome', 'gian');
meuMap.set('stack', 'html, css, js');

console.log(meuMap)

const nome = meuMap.get('nome');

console.log(nome)

console.log(meuMap.size)

console.log(meuMap.has('sobrenome'))

meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.valor()) {
    console.log(chave);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}; ${valor}`);
}

meuMap.delete('stack');

console.log(meuMap)

// [nome => gian]
// [stack => html, css, js]

const cpfs = new Set();

cpfs.add('000000000012')
cpfs.add('123456789123')
cpfs.add('123456789123')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.value())

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Gian', 'José', 'Maria', 'Laura', 'Luana', 'Laura', 'Luana']

const arraycomoSet = new Set([...array])

const arraySemItensDuplicados = [...arraycomoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)