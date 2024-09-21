function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + "diz olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    //this.salario = salario;
    let salario = 0;

    this.getSalario = function () {
        return `O salário de ${this.nome} é ${_salario}`;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario =novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiário", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

//const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
//const pessoa = new Pessoa("Gian");
//
//funcionario1.dizOi();
//funcionario1.dizCargo();
//
//funcionario1.setSalario('mil');
//
//console.log(funcionario1.getSalario());

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const funcionario2 = new Estagiario("Pedro");
const funcionario3 = new Gerente("Paula");

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3.getSalario())

