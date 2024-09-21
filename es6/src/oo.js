function PoKemon(nomePokemon, tipoPokemon) {
    this.nome = nomePokemon;
    this.tipo = tipoPokemon;
}

const pikachu = new PoKemon('Pikachu', 'elétrico')

class Pokemon {
    hp = 100;

    constructor(nomePokemon, tipoPokemon) {
        this.nome = nomePokemon;
        this.tipo = tipoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHP() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

//const pikachu = new Pokemon();
//pikachu.nome = 'pikachu';
//pikachu.tipo = 'elétrico';

const pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuAtaque();

console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar()

pikachuDoAsh.exibeHP()

const pikachu = new Pokemon('pikachu', 'elétrico');

//pikachu.atacar('choque do trovão')

console.log(pikachu)
console.log(pikachuDoAsh)

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);