/**1. Manipulando um Array
Crie um array chamado numeros contendo os números: 10, 20, 30, 40, 50.
Depois, faça o seguinte:

Adicione o número 60 ao final do array.
Remova o primeiro número do array.
Exiba o array atualizado no console. */

const numeros = [10,20,30,40,50]
numeros.push(60)
console.log(numeros);
const removerPrimeiroDigito = numeros.shift();
console.log(numeros);

/** 2. Somando Valores de um Array
Crie uma função chamada somarArray que receba um array de números e retorne a soma de todos os elementos.*/

let somarArray = [5,5,5];
let result = 0;

for (let i = 0; i < somarArray.length; i++) {
    result += somarArray[i];
}

console.log(result);

/** 3. Criando e Acessando um Objeto
Crie um objeto chamado pessoa com as seguintes propriedades:

nome: seu nome
idade: sua idade
cidade: sua cidade
Depois, exiba no console a seguinte frase usando as propriedades do objeto:
"Meu nome é [nome], tenho [idade] anos e moro em [cidade]."*/

const person = {
    name: "Gabriel",
    age: 20,
    job: "Programador",
    city: "Sorocaba"
  };

console.log(`Meu nome é ${person.name}, tenho ${person.age} anos e moro em ${person.city}. Estou em busca de uma vaga de emprego para ${person.job} Júnior`);

/** 4. Array de Objetos
Crie um array chamado alunos, onde cada elemento do array seja um objeto representando um aluno, com as propriedades:

nome
idade
nota
Adicione pelo menos três alunos no array e exiba no console o nome do aluno com a maior nota.*/

const alunos = [
    { nome: "Ana", idade: 20, nota: 8.5 },
    { nome: "Carlos", idade: 22, nota: 9.2 },
    { nome: "Bruna", idade: 21, nota: 7.8 }
];

let maiorNota = 0;
let alunoMaiorNota = "";

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota > maiorNota) {
        maiorNota = alunos[i].nota;
        alunoMaiorNota = alunos[i].nome;
    }
}

console.log("O aluno com a maior nota é " + alunoMaiorNota + ", com nota " + maiorNota + ".");

/**5. Filtrando um Array de Objetos
Crie um array de objetos chamado produtos, onde cada produto tenha:

nome
preco
Agora, crie uma função chamada filtrarProdutosCaros que recebe esse array e retorna apenas os produtos com preço acima de 100. */

const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 300 }
];

const filtrarProdutosCaros = (listaDeProdutos) => {
    let produtosCaros = [];

    for (let i = 0; i < listaDeProdutos.length; i++) {
        if (listaDeProdutos[i].preco > 100) {
            produtosCaros.push(listaDeProdutos[i]);
        }
    }

    return produtosCaros;
};

console.log(filtrarProdutosCaros(produtos));


