type aluno = {
    nome:string;
    cursos?: string[];
    idade: number;
}

const alunos = [
    {
        nome: 'Carlos',
        cursos: ['front-end', 'UX/UI'],
        idade: 27,
    },
    {
        nome: 'Ana',
        cursos: ['front-end', 'python'],
        idade: 23,
    }
]

alunos.push({
    nome: 'Julia',
    cursos: ['arquitetura'],
    idade: 29
})

const novoAluno: aluno = {
    nome: 'Lucas',
    idade: 32
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}