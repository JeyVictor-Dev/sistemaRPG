let lojaDePocoesEstaAberta = true;
let pocoes = ["Poção de velocidade", "Poção de força"];
let acoesDaPocao = ["velocidade", "força"];

switch (lojaDePocoesEstaAberta) {
  case true:
    console.log("Você chegou a Loja de Poções!");
    console.log("Qual Poção gostaria de comprar?");

    let escolha = prompt("Digite o nome da poção que você deseja:");

    // Verifica se a escolha não está vazia e se a poção está disponível
    if (escolha && pocoes.includes(escolha)) {
      let indice = pocoes.indexOf(escolha); // Obtém o índice da poção escolhida
      console.log("Você adquiriu a " + pocoes[indice]);
      console.log(
        "Você acabou de adquirir +2 Poções de " + acoesDaPocao[indice]
      );
    }
    break;
    
  default:
    console.log("Desculpe, a Loja de Poções está fechada");
}

// Aumenta a velocidade ou força dependendo da poção escolhida
let escolha = prompt("Digite o nome da poção que você deseja:");

tomarPocao();

function tomarPocao() {
  let indice = pocoes.indexOf(escolha);
  let acoesDaPocao = ["velocidade", "força"];

  if (escolha === "Poção de velocidade") {
    let pocaoDeVelocidade = 0;
    console.log("Tomou Poção de Velocidade");
    for (let i = 1; i <= 8; i++) {
      pocaoDeVelocidade += 1;
      console.log("Velocidade aumentada em " + i);
    }
    console.log("Velocidade atual " + pocaoDeVelocidade);
  } 
  
  else if (escolha === "Poção de força") {
    let pocaoDeForca = 0;
    console.log("Tomou Poção de Força");
    for (let i = 1; i <= 8; i++) {
      pocaoDeForca += 1;
      console.log("Força aumentada em " + i);
    }
    console.log("Força atual " + pocaoDeForca);
  } 
  
  else {
    console.log("Desculpe, esta poção não está disponível");
  }
}
