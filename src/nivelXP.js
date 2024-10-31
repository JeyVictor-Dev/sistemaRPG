let nomeHeroi = "Gotz"
let pontosDeExperiencia = 17800

if (pontosDeExperiencia <= 1000){
    pontosDeExperiencia = "Ferro"
}
else if (pontosDeExperiencia >= 1001 && pontosDeExperiencia <= 2000){
    pontosDeExperiencia = "Bronze"
}
else if (pontosDeExperiencia >= 2001 && pontosDeExperiencia <= 5000){
    pontosDeExperiencia = "Prata"
}
else if (pontosDeExperiencia >= 5001 && pontosDeExperiencia <= 7000){
    pontosDeExperiencia = "Ouro"
}
else if (pontosDeExperiencia >= 7001 && pontosDeExperiencia <= 8000){
    pontosDeExperiencia = "Platina"
}
else if (pontosDeExperiencia >= 8001 && pontosDeExperiencia <= 9000){
    pontosDeExperiencia = "Ascendente"
}
else if (pontosDeExperiencia >= 9001 && pontosDeExperiencia <= 10000){
    pontosDeExperiencia = " Imortal"
}
else if (pontosDeExperiencia >= 10001){
    pontosDeExperiencia = "Radiante"
}

console.log('O Herói de nome ' + nomeHeroi + ' está no nível ' + pontosDeExperiencia)