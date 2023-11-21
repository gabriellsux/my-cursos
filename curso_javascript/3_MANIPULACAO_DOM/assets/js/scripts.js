/* O que é DOM? */

// DOM = Document Object Model
// Onde manipulamos os elementos na tela.

/* Selecionando elementos 1 */

/* Para alterarmos algum elemento na tela utilizamos o DOM
    Ex. document.getElementByTagName();
*/

document.getElementsByTagName("h1");

/* Selecionando elementos 2 */

// Podemos selecionar pela Tag
document.getElementsByTagName("div");

// Podemos também selecionar por ID
document.getElementById("teste");

// Podemos também selecionar pela ClassName
document.getElementsByClassName("botao");

// Podemos selecionar elementos por seleção
document.querySelector("#teste");

document.querySelectorAll("#teste ul li");

document.querySelector(".botao");

/* Eventos de clique */

function clicou() {
    alert("Parabéns você clicou no botão!");
}

let botao = document.querySelector('.botao');
botao.addEventListener("click", clicou);