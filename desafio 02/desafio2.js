const frase = ("Você estar na patente: ")
let numeroDeVitorias = 45
let numeroDeDerrotas = 0
validarVitorias(numeroDeVitorias, numeroDeDerrotas)

// Função para Validar as Vitorias e as Derrotas, e dizer a quantidade para o "jogador" e avaliar a Patente
function validarVitorias(vitoria, derrota){
    numeroDeDeV = vitoria - derrota
    numeroDeDeV = Math.abs(numeroDeDeV)
    if (derrota>vitoria){
        com1 = ("Infelizmente você tem muitas Derrotas: " + derrota + " Derrotas. Você tem " + vitoria + "De vitorias")
    }else if (derrota<vitoria){
        com1 = ("Parabens você tem "+ vitoria +" Vitorias é " + derrota + (" Derrotas"))
    }else{
        com1 = ("Você não tem Vitorias e nem Derrotas. "+ numeroDeDeV)
    }


// Variavel para Validar a Patente do "jogador"
    numeroParaPatente = vitoria - derrota
    if (numeroParaPatente <=10){
        com2 = (frase + 'Ferro')
    }else if ((numeroParaPatente>=11) && (numeroParaPatente <=20)){
        com2 = (frase + 'Bronze')
    }else if ((numeroParaPatente>=21) && (numeroParaPatente<=50)){
        com2 = (frase + 'Prata')
    }else if ((numeroParaPatente>=51) && (numeroParaPatente<=80)){
        com2 = (frase + 'Ouro')
    }else if ((numeroParaPatente>=81) && (numeroParaPatente<=90)){
        com2 = (frase + 'Diamante')
    }else if ((numeroParaPatente>=91) && (numeroParaPatente<=100)){
        com2 = (frase + 'Lendario')
    }else if (numeroParaPatente>=101){
        com2 = (frase + 'Imortal')
    }else{
        com2 = ('Nenhuma patente')
    }
    console.log(com1 + "; " +com2)
}