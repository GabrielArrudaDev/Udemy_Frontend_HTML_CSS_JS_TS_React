--- 
# Exemplo de Funções em JavaScript

Este repositório contém diversos exemplos de funções em JavaScript, abordando conceitos como criação de funções, escopo, recursão, arrow functions, closures, parâmetros opcionais, valores padrão e muito mais.

---

## Sumário

1. [Criação de Funções](#1---criando-uma-função)
2. [Return em Funções](#2---return)
3. [Escopo de Funções](#3---escopo-da-função)
4. [Escopo Aninhado](#4---escopo-aninhado)
5. [Arrow Functions](#5---arrow-function)
6. [Funções com Parâmetros Opcionais e Valores Default](#7---parametro-opcional)
7. [Closure](#9---closure)
8. [Recursão](#11---recursion)

## 1 - Criando uma Função

A primeira parte do código demonstra a criação de funções em JavaScript.

### Funções nomeadas e anônimas

```javascript
function minhaFuncao() {
  console.log('Testando!');
}
minhaFuncao();

const minhaFuncaoEmVariável = function () {
  console.log('Função em variável!');
};
minhaFuncaoEmVariável();
```

- Função `minhaFuncao`: Criação de uma função simples que imprime "Testando!".
- Função anônima: Atribuição de uma função anônima a uma variável.

### Funções com parâmetros

```javascript
function funcaoComParametro(txt) {
  console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro('alguma coisa');
```

- A função `funcaoComParametro` recebe um parâmetro e imprime seu valor.

## 2 - Return

A seguir, temos um exemplo de função que retorna um valor:

```javascript
function soma(n1, n2) {
  return n1 + n2;
}
```

A função `soma` recebe dois números e retorna a soma entre eles.

### Exemplo de uso

```javascript
const resultado = soma(10, 20);
console.log(resultado);
```

- Chama a função `soma` com dois valores e imprime o resultado.

## 3 - Escopo da Função

Demonstrando como o escopo das variáveis funciona em JavaScript:

```javascript
let y = 10;

function testandoEscopo() {
  let y = 20;
  console.log(`Y dentro da função: ${y}`);
}

console.log(`Y fora da função: ${y}`);
testandoEscopo();
```

- `y` tem um valor diferente dentro da função do que fora dela, mostrando o escopo local da função.

## 4 - Escopo Aninhado

Este exemplo mostra como as variáveis podem ter escopos diferentes em níveis de profundidade:

```javascript
let m = 10;

function escopoAninhado() {
  let m = 20;
  
  if (true) {
    let m = 30;
    if (true) {
      let m = 40;
      console.log(m); // 40
    }
    console.log(m); // 30
  }
  
  console.log(m); // 20
}

escopoAninhado();
console.log(m); // 10
```

- A variável `m` tem diferentes valores dependendo do nível em que ela está definida.

## 5 - Arrow Function

As Arrow Functions são uma forma concisa de escrever funções.

```javascript
const testeArrow = () => {
  console.log('Esta é uma arrow function');
};

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log('Par');
  } else {
    console.log('Impar');
  }
};
```

- Exemplo de uma função simples e uma função que verifica se um número é par ou ímpar.

## 7 - Parâmetro Opcional

JavaScript permite que funções tenham parâmetros opcionais, com valor padrão ou verificação:

```javascript
const multiplication = (n, m = 2) => {
  return n * m;
};

console.log(multiplication(4));  // 8
console.log(multiplication(4, 4)); // 16
```

- A função `multiplication` tem um valor padrão para `m`, mas ele pode ser sobrescrito.

### Função de Saudação

```javascript
const greeting = (name) => {
  if (!name) {
    console.log('Olá!');
  } else {
    console.log(`Olá ${name}!`);
  }
};
```

- Função que verifica se um nome foi passado como parâmetro e exibe uma saudação personalizada.

## 9 - Closure

Closure ocorre quando uma função interna tem acesso a variáveis de uma função externa.

```javascript
const multiplicationClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicationClosure(5);
console.log(c1(5));  // 25
```

- A função interna tem acesso à variável `n` da função externa, formando um closure.

## 11 - Recursão

Recursão ocorre quando uma função chama a si mesma. Veja um exemplo:

```javascript
const factorial = (x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};

console.log(factorial(6));  // 720
```

- A função `factorial` calcula o fatorial de um número usando recursão.

---

