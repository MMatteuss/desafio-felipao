// Desafio: 
let nomeHeroi = "Mateus"
let nivelHeroi = ""
let xp = 3100
// Começo da estrutura de If, Else If e Else
if(xp <= 1000){
    nivelHeroi = "Ferro"
}else if((xp >=1001) && (xp <=2000)){
    nivelHeroi = "Bronze"
}else if((xp >=2001) && (xp <=5000)){
    nivelHeroi = "Prata"
}else if((xp >=6001) && (xp <=7000)){
    nivelHeroi = "Ouro"
}else if((xp >=7001) && (xp <=8000)){
    nivelHeroi = "Platina"
}else if((xp >=8001) && (xp <=9000)){
    nivelHeroi = "Ascendente"
}else if((xp >=9001) && (xp <=10000)){
    nivelHeroi = "Imortal"
}else{
    nivelHeroi = "Radiante"
}
// Fim da estrutura de If, Else If e Else
const frase = ("O Herói de nome, "+nomeHeroi+" está no nível de "+nivelHeroi)
// Um (const) para não ficar repetindo o console.log
console.log(frase)