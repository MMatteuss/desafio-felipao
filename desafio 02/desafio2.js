const frase = ("Você estar na patente: ")
let numeroDeVitorias = 45
let numeroDeDerrotas = 0

validarVitorias(numeroDeVitorias, numeroDeDerrotas)
validarPatentes(numeroDeVitorias, numeroDeDerrotas)


// Função para Validar as Vitorias e as Derrotas, e dizer a quantidade para o "jogador"
function validarVitorias(vitoria, derrota){
    numeroDeDeV = vitoria - derrota
    numeroDeDeV = Math.abs(numeroDeDeV)
    if (derrota>vitoria){
        console.log("Infelizmente você tem muitas Derrotas: " + derrota + " Derrotas. Você tem " + vitoria + "De vitorias")
    }else if (derrota<vitoria){
        console.log("Parabens você tem "+ vitoria +" Vitorias é " + derrota + (" Derrotas"))
    }else{
        console.log("Você não tem Vitorias e nem Derrotas. "+ numeroDeDeV)
    }
}

// Função para Validar a Patente do "jogador"
function validarPatentes(vitoria, derrota){
    numeroParaPatente = vitoria - derrota
    if (numeroParaPatente <=10){
        console.log(frase + 'Ferro')
    }else if ((numeroParaPatente>=11) && (numeroParaPatente <=20)){
        console,log(frase + 'Bronze')
    }else if ((numeroParaPatente>=21) && (numeroParaPatente<=50)){
        console.log(frase + 'Prata')
    }else if ((numeroParaPatente>=51) && (numeroParaPatente<=80)){
        console.log(frase + 'Ouro')
    }else if ((numeroParaPatente>=81) && (numeroParaPatente<=90)){
        console.log(frase + 'Diamante')
    }else if ((numeroParaPatente>=91) && (numeroParaPatente<=100)){
        console.log(frase + 'Lendario')
    }else if (numeroParaPatente>=101){
        console.log(frase + 'Imortal')
    }else{
        console.log('Nenhuma patente')
    }
}