let lojaDePocoesEstaAberta = true;
let pocoes = ["Poção de velocidade", "Poção de força"];
let acoesDaPocao = ["velocidade", "força"];

if (lojaDePocoesEstaAberta) {
    console.log("Você chegou a Loja de Poções!");
    console.log("O que você gostaria de fazer?");
    console.log("1. Comprar poção");
    console.log("2. Abrir inventário");

    let acao = prompt("Digite o número da ação que você deseja:");

    if (acao === "1") {
        // Comprar poção
        let escolha = prompt("Digite o nome da poção que você deseja comprar:");

        // Verifica se a escolha não está vazia e se a poção está disponível
        if (escolha && pocoes.includes(escolha)) {
            let indice = pocoes.indexOf(escolha); // Obtém o índice da poção escolhida
            console.log("Você adquiriu a " + pocoes[indice]);
            console.log("Você acabou de adquirir +1 Poções de " + acoesDaPocao[indice]);
        } else {
            console.log("Desculpe, está poção não está disponível");
        }
    } else if (acao === "2") {
        // Abrir inventário
        let escolhaInventario = prompt("Digite o nome da poção que você deseja utilizar:");

        tomarPocao(escolhaInventario);
    } else {
        console.log("Ação inválida. Tente novamente.");
    }
} else {
    console.log("Desculpe, a Loja de Poções está fechada");
}

// Função para aumentar a velocidade ou força dependendo da poção escolhida
function tomarPocao(escolha) {
    let indice = pocoes.indexOf(escolha);

    if (escolha === "Poção de velocidade") {
        let pocaoDeVelocidade = 0;
        console.log("Tomou Poção de Velocidade");
        for (let i = 1; i <= 8; i++) {
            pocaoDeVelocidade += 1;
            console.log("Velocidade aumentada em " + i);
        }
        console.log("Velocidade atual " + pocaoDeVelocidade);
    } else if (escolha === "Poção de força") {
        let pocaoDeForca = 0;
        console.log("Tomou Poção de Força");
        for (let i = 1; i <= 8; i++) {
            pocaoDeForca += 1;
            console.log("Força aumentada em " + i);
        }
        console.log("Força atual " + pocaoDeForca);
    } else {
        console.log("Desculpe, você não possuí essa poção");
    }
}
