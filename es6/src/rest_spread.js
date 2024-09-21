function somar(a, b) {
    let soma = 0;

    for (let i = o; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    // arguments.map
    // console.log(arguments)
    // return a + b;
}

console.log(somar(10, 20))

function somarComRest() {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))

//spread
const numeros = [1,2,3,4]
console.log(...numeros)

const timesFutebolSP = ['santos', 'palmeiras', 'bragantino']
const timesFutebolRIO = ['vasco', 'botafogo', 'flamengo']

//const timesFutebol = timesFutebolSP.concat(timesFutebolRIO);
const timesFutebol = [...timesFutebolSP];

//timesFutebolSP.concat(timesFutebolRIO)
console.log(timesFutebol)

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia
    motor: 1.8
}

console.log(carroDaAna);


//desestruturação
//const motorCarroAna = carroDaAna.motor;

const { motor: motorCarroAna } = carroDaAna;
const { motor: motorCarroJulia } = carroDaJulia;

console.log(motorCarroAna);
console.log(motorCarroJulia);

const [item1, item2, item3, ...outrosTimes] = timesFutebol;

console.log(item1)
console.log(item2)
console.log(item3)