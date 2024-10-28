let precoFinal = 0;
limpar();

function adicionar(){
    // declarando as variaveis
    let produtos = document.getElementById("produto").value;
    let nomeProduto = produtos.split("-")[0]; // separando o nome do produto na variavel
    let precoProduto = produtos.split("R$")[1]; // separando o valor do produto na variavel

    let quantidade = document.getElementById("quantidade").value;

    // fazendo a multiplicação do preço unitario
    
    let precoUnitario = quantidade * precoProduto;


    // mostrando os produtos no carrinho
    let mostrarNoCarrinho = document.getElementById("lista-produtos");
    mostrarNoCarrinho.innerHTML = mostrarNoCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${precoUnitario}</span>
        </section>`;

    // Fazendo a multicação para o valor final
    precoFinal = precoFinal + precoUnitario;

    // mostrando o valor final na tela
    let valorFinal = document.getElementById("valor-total");
    valorFinal.textContent = precoFinal

    // linpando a quantidade depois que adicina no carrinho
    document.getElementById("quantidade").value = " ";
};

function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent =  "R$: " + 0;
    document.getElementById("quantidade").value = " ";
}