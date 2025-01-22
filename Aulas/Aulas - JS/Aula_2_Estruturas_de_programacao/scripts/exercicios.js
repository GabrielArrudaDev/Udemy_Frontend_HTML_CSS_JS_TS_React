/*
Verificação de Par ou Ímpar
Escreva um programa que peça ao usuário para inserir um número.
O programa deve verificar se o número é par ou ímpar e exibir uma mensagem correspondente no console.
 */

// const numero = prompt('Digite um numero: ');
// if (numero % 2 === 0) {
//   console.log(`numero par ${numero}`);
// } else {
//   console.log(`numero impar ${numero}`);
// }

/*
Calculadora Simples com switch
Crie um programa que peça dois números e uma operação matemática (+, -, *, /) ao usuário.
Use a estrutura switch para realizar a operação e exibir o resultado no console.
 */

// const numero1 = prompt('Digite o primeiro numero');
// const numero2 = prompt('Digite o primeiro numero');
// const operador = prompt('Digite o operador');

// switch (operador) {
//   case '-':
//     console.log(numero1 - numero2);
//     break;
//   case '+':
//     let soma = parseInt(numero1, numero2);
//     console.log(soma);
//     break;
//   case '*':
//     console.log(numero1 * numero2);
//     break;
//   case '/':
//     console.log(numero1 / numero2);
//     break;

//   default:
//     console.log('numero ou operador nao encontrado');
//     break;
// }

/*
 Imprimir Números de 1 a 10 com for
Escreva um programa que use um laço for para imprimir os números de 1 a 10 no console.
 */

// for (let number = 0; number <= 10; number++) {
//   console.log(number);
// }

/*
Soma de Números com while
Peça ao usuário para inserir números um por vez. Continue pedindo até que o usuário insira "0".
Depois, exiba a soma de todos os números digitados no console.
 */

// let obterNumero = 10;
// while (obterNumero > 0) {
//   obterNumero = prompt(`digite o numero`);
//   console.log(`Seu numero é ${obterNumero}`);
// }

/*
Tabuada com do-while
Peça ao usuário para inserir um número.
Use a estrutura do-while para exibir a tabuada desse número (de 1 a 10) no console.
*/

let obterNumero = prompt('Digite seu numero');
let tabuada = 1;
let soma;
do {
  soma = obterNumero * tabuada;
  console.log(soma);
  tabuada++;
} while (tabuada <= 10);
