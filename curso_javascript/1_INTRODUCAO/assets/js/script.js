alert("Olá Mundo")

console.log("Olá Mundo 3.0")

/* Variáveis */

let nome = "Gabriel";
let idade = 25;
let cidade = "Araxá";
let estado = "Minas Gerais";

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);

/* Tipos de Dados */

let nome = "Gabriel"; //String
let idade = 25; /*or 45.5*/ //Number
let logado = true; /*or false*/ //Boolean
let lista = ["Carro", "Casa", "Familia", 30, 45, 60]; //Array
let nomeCompleto = { nome: "Gabriel", idade: 25, cidade: "Araxá", estado: "Minas Gerais" }; //objeto

// os comandos abaixo exibe os dados no CONSOLE
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof logado);
console.log(typeof lista);
console.log(typeof nomeCompleto);

/* Exercício - 01 */

/*
1. Crie uma variável para armazenar o nome
do carro e ponha o valor Ferrari. E exiba-a.
*/

let nomeDoCarro = "Ferrari";
console.log(nomeDoCarro);

/*
2. Crie uma variável para armazenar o preço
do bolo, que custa R$ 19,99. E exiba-a.
*/

let precoDoBolo = 19.99;
console.log(precoDoBolo);

/*
3. Corrija o código a seguir (e exiba-o).
let "cidade" = Rio de Janeiro
*/

let cidade = "Rio de Janeiro";
console.log(cidade);

/* Ponto e vírgula */

let carro = "Fiat";
let ano = 2023;
console.log(carro);
console.log(ano);


/* Diferença entre Let, Const e Var */

/* Let */
let nome = "Andressa";
console.log(nome);

nome = "Gabriel";
console.log(nome);

/* Var */
var nome = "Andressa";
console.log(nome);

nome = "Gabriel";
console.log(nome);

/* Const */
const nome = "Andressa";
console.log(nome);

nome = "Gabriel";
console.log(nome);

/* Operações em Variáveis */

let x = 2;
x = x + 8;
console.log(x);

let x = "2";
x = x + 8;
console.log(x);

let nome = "Gabriel";
let sobrenome = "Pereira";
let nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

let n1 = 15;
let n2 = 20;
let n3 = 30;

let soma = n1 + n2 - n3;
console.log(soma);

/* String e Template String */

let nome = "João";
let sobrenome = "Alfredo"

let nomeCompleto = nome + ' ' + sobrenome;

let nomeCompleto = `${nome} ${sobrenome} Macedo`;
console.log("Nome: " + nomeCompleto);

let idade = 35;

let idadeString = `${idade + 3} anos`;
console.log(idadeString);

/* Condicional If / Else */

let idade = 90;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

/* Símbolos de Condicionais */

// < Maior
// > Menor
// == Igual
// >= Maior igual
// <= Menor igual
// != Diferente

/* Condicional == e === */

let idade = 20;

if (idade == 20) {
    console.log("Você tem 20 anos");
}

/* A diferença do == para o === é que o == ele busca string e number do mesmo valor,
já o === ele é mais restrito e só funcionará se realmente for um number ou uma string */

let idade = 20;

if (idade === 20) {
    idade = idade + 15;
    console.log("Idade adicionada com sucesso!");
    console.log(idade);
}

/* Multi-condicionais (&& e ||) */

let idade = 55;

if (idade >= 18) {
    if (idade < 60) {
        console.log("Você é um adulto");
    }
}

if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto");
}

/* Condicional Dupla (if else) */

let idade = 18;

if (idade < 18) {
    console.log("Você é uma criança");
} else if (idade >= 18 && idade <= 60) {
    console.log("Você é um adulto");
} else if (idade >= 60) {
    console.log("Você é um idoso");
}

/* Desmitificando o IF */

let idade = 60;

let adulto = idade >= 18 && idade < 60;
if(adulto) {
    console.log("É adulto");
} else {
    console.log("Não é adulto");
}

/* O IF tratasse de se a função foi chamada com VERDADEIRO ou FALSO */

/* Exercício - 02 */

/* Substitua o @ pela condicional correta para que
o resultado seja TRUE */

let x = 10;
let y = 5;
console.log(x > y);

/* Substitua o @ pela condicional correta para que
o resultado seja FALSE */

let w = "10";
let z = 10;
console.log(w === z);

/* Substitua o @ pela condicional correta para que
o resultado seja TRUE */

let a = 10;
let b = 5;
console.log(a != b);

/* Crie uma condicional para verificar se o preço da
carne está barato ou caro. PS: Até 45 está barato. */

let preco = 70;

if (preco <= 45) {
    console.log("A carne está BARATA.");
} else {
    console.log("A carne está MUITO CARA.");
}

/* Condicional Ternário */

let isMember = true;

let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Você é membro' : ' Você não é membro');
console.log("Frete: " + shipping);

/*O sinal de ? siginifica você é. O sinal de : Caso contrário */

let age = 50;

let isAdult = ((age >= 18 && age < 60) ? 'Sim' : 'Não');

console.log(isAdult);

/* Switch Case */

let profession = "atleta";

console.log("Profissão: " + profession);

switch(profession) {
    case 'fiscal':
        console.log("Sua camisa será VERDE.");
        break;
    case 'bombeiro':
        console.log("Sua camisa será VERMELHA.");
        break;
    case 'policial':
        console.log("Sua camisa será AZUL.");
        break;
    default:
        console.log("Sua camisa será PRETA")
        break;
}