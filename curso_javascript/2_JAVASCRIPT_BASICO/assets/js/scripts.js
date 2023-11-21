/* Introdução a funções */

// - O que é uma função? 
// R: É um trecho de código que depende um do outro 

/* Declarando uma função */

function gravidade() {
    console.log('A gravidade do planeta: ');
    console.log(9.8);
}

/* Como usar uma função */

gravidade();

/* Passando parâmetros em funções */

function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log('Resultado: ' + resultado);
}

somar(20, 56);

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}

nomeCompleto("Gabriel", "Pereira");

/* Retorno da função */

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto("Gabriel", "Pereira");
console.log('Nome completo: ' + completo);
console.log('Nome completo: ' + nomeCompleto("Andressa", "Martins"));

// ENTRADA -> PROCESSAMENTO -> SAIDA

/* Função com retorno condicional */

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 25;
let verificacao = maiorDeIdade(idade);

if (verificacao) {
    console.log('É maior de idade');
} else {
    console.log('É menor de idade');
}

// Exercício de função - 01

/*
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100
Uso da função:
*/

function calcPct(n1, n2) {
    return (n2 / n1) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);

// Exercício de função - 02

/*
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quarto, o m2 é 1.2x
- Se tiver 3 quarto, o m2 é 1.5x
Uso da função:
*/

function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;

    switch(quartos) {
        case 1:
            default:
                preco = metragem * m2;
                break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }

    return preco;
}


let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

// Exercício de função - 03
/*
Crie uma função que valide usuário e senha.
Usuário correto: pedro
senha correta: 123

Uso da função:
*/

function validar(usuario, senha) {
    if(usuario === 'pedro' && senha === '123') {
        return true;
    } else {
        return false;
    }
}

let usuario = 'gabriel';
let senha = '1234';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido!');
} else {
    console.log('Acesso negado!');
}

/* Arrow Function */

const somar = (x, y) => {
    return x + y;
}

console.log(somar(10, 5));

const sobrenome = sob => 'Gabriel ' + sob;

console.log(sobrenome('Pereira'));

/* Variáveis dentro de funções */

let count = 0;

function add() {
    count++;
}

add();
add();

console.log(count);

/* Funções dentro de funções */

function addSquares(a, b) {
    const square = (x) => {
        return x * x;
    }

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));

/* Introdução a Array */

let colors = ['blue', 'red', 'green'];

console.log(colors[0]);

let idades = [10, 20, 30];

console.log(idades[2]);

let lista = ['blabla', ['xx', 'yy']];

console.log(lista[1][0]);

/* Operações básicas de array */

let ingredientes = ['agua', 'farinha', 'ovo', 'corante', 'sal'];

// pop = remove o último
// shift = remove o primeiro

ingredientes.push('cebola');
ingredientes.pop();
ingredientes.shift();

console.log(ingredientes);
console.log(`Total de ingredientes: ${ingredientes.length}`);

/* Exercício de array - 03 */

// 1. No array abaixa, qual o número que pega a Ferrari?

let carros = ['BMW', 'Ferrari', 'Mercedes'];
x = 1;
console.log('1. ' + carros[x]);

// 2. Troque a Ferrari por Audi

carros[1] = 'Audi';
console.log('2. Lista com Audi:');
console.log(carros);

// 3. Adicione o Volvo a lista

carros.push('Volvo');
console.log('3. Lista com Volvo:');
console.log(carros);

// 4. Exiba quantos itens tem no array

console.log('4. itens no array');
console.log(carros.length);

/* O que são objetos? */

let personagem = {
    nome: 'Gabriel',
    age: 25,
    pais: 'Brasil',
    estado: 'Minas Gerais',
    profissao: 'Desenvolvedor',
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 8,
        inteligencia: 15,
    }
};

console.log(`${personagem.nome} tem ${personagem.age} anos. E trabalha como ${personagem.profissao}. No estado de ${personagem.estado}.`);

/* Acessando e alterando objetos */

let outroPersonagem = {
    nome: 'João',
    age: 30,
    pais: 'Brasil',
    estado: 'Rio de Janeiro',
    profissao: 'Designer',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 8,
        inteligencia: 15,
    }
};

outroPersonagem.nome = 'Pedro';

outroPersonagem.caracteristicas.forca += 5;

outroPersonagem.olhos.push('verde');


let meusCarros = {
    nome: 'Gabriel',
    idade: 25,
    carros: [
        { modelo: 'Fiat', cor: 'preto' },
        { modelo: 'Ferrari', cor: 'vermelho' },
    ]
} 

console.log(meusCarros.carros[1].modelo);

/* Função dentro de objeto */

let pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Pereira',
    idade: 25,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto());

/* O loop for */

for(let n = 0; n < 10; n++) {
    console.log(n);
    console.log('Frase Qualquer ' + n);
}

/* Dando loop em arrays */

let cores = ['preto', 'branco', 'azul', 'vermelho'];

cores.push('verde');

for(let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
}

for(let i in cores) {
    console.log(cores[i]);
}

for(let cor of cores) {
    console.log(cor);
}

/* O loop while */

let numero = 0;

while (numero < 10) {
    console.log(`O número da vez é ${numero}`);
    numero++;
}

/* Exercício de loops - 04 */

// 1. Faça um loop que mostre todas as frutas

let fruits = ['Maça', 'Uva', 'Banana'];

for(let x in fruits) {
    console.log(fruits[x]);
}

// 2. Conte de 1 até 100 através de um while

let contador = 1;

while (contador <= 100) {
    console.log(`O número é: ${contador}`);
    contador++;
}

/* Funções de array */

let frutas = ['Maça', 'Uva', 'Laranja', 'Banana'];

frutas[0] = 'Pêra';

console.log(frutas.join(', '));

/* Ordenação de array */

let nomes = ['Gabriel', 'Andressa', 'João', 'Vitória'];

nomes.sort();
// Coloca os nomes em ordem do menor para o maior

nomes.reverse();
// Coloca os nomes em ordem do maior para o menor

console.log(nomes);

let cars = [
    {brand: 'Fiat', year: 2022 },
    {brand: 'Ferrari', year: 2020},
    {brand: 'Audi', year: 2018},
];

cars.sort((a, b) => b.year - a.year);

console.log(cars);

/* Iteração de array */

let fruta = ['Banana', 'Laranja', 'Maça', 'Pêra', 'Uva'];

let ok = fruta.every((value) => {
    return value.length > 3;
});

if(ok) {
    console.log('Todos são maior que 3');
} else {
    console.log('Não são todos maior que 3');
}

let some = fruta.some((value) => {
    return value.length > 3;
});

if(some) {
    console.log('Algum item é maior que 3');
} else {
    console.log('Nenhum item é maior que 3');
}

if(fruta.includes('Uva')) {
    console.log('Tem uva sim!');
} else {
    console.log('Não tem uva...');
}