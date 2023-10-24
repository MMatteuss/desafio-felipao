// Nome, Idade e Tipo do personagem{ex: guerreiro, mago, monge, ninja}
let nome = "Mateus"
let idade = 16
let tipo = "ninja"
// fim de escolha

tipo = (tipo.toLowerCase())
class personagem{
    constructor(nomeDoPersonagem, idadeDoPersonagem, tipoPersonagem){
        this.nomeDoPersonagem = nomeDoPersonagem;
        this.idadeDoPersonagem = idadeDoPersonagem;
        this.tipoPersonagem = tipoPersonagem
        if (tipoPersonagem === "mago"){
            let ataque = 'magia'
            console.log(`O ${tipoPersonagem} atacou usando ${ataque}`)
        }
        else if (tipoPersonagem === "guerreiro"){
            let ataque = 'espada'
            console.log(`O ${tipoPersonagem} atacou usando ${ataque}`)
        }
        else if (tipoPersonagem === "monge"){
            let ataque = 'artes marciais'
            console.log(`O ${tipoPersonagem} atacou usando ${ataque}`)
        }
        else if (tipoPersonagem === "ninja"){
            let ataque = 'shuriken'
            console.log(`O ${tipoPersonagem} atacou usando ${ataque}`)
        }
    }
}
let nomePersonagem = new personagem(nome, idade, tipo)