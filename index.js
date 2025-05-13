//variáveis do sistema
let nomeHero
let totalXP
let nivelAtual
//necessita prompt-sync para interagir com o usuário
const prompt = require('prompt-sync')();
//Incicialização das Variáveis
nomeHero=""
while (nomeHero==""){
    nomeHero = prompt("Qual é o nome do seu herói? ")
    console.log()
    if (nomeHero !== "") {
        console.log("Olá, " + nomeHero + "!!!")
        console.log()
        } else {
            console.log("O nome do herói precisa ser informado!!!")
            console.log()
            }
}
totalXP=0
while (totalXP==0){
    totalXP = prompt("Informe a quantidade de pontos XP do seu herói: ")
    console.log()
    if (!isNaN(totalXP)) {
        if (totalXP > 0) {
        console.log("Seu herói tem " + totalXP + " pontos XP !!! Vamos descobrir o nível atual, aguarde...")
        console.log()
        }else {
            console.log("A quantidade de pontos XP precisa ser informada e deve ser maior que zero!!!")
            console.log()
            }
        } else {
            totalXP=0
            console.log("Você não digitou um número válido")
            console.log()
            console.log("A quantidade de pontos XP precisa ser informada e deve ser maior que zero!!!")
            console.log()
        }
}
nivelAtual=""
switch (true){
    case totalXP<=2000 :
        nivelAtual="Bronze"
        break
    case totalXP<=5000 :
        nivelAtual="Prata"
        break
    case totalXP<=7000 :
        nivelAtual="Ouro"
        break
    case totalXP<=8000 :
        nivelAtual="Platina"
        break
    case totalXP<=9000 :
        nivelAtual="Ascendente"
        break
    case totalXP<=10000 :
        nivelAtual="Imortal"
        break
    case totalXP>=10001 :
        nivelAtual="Radiante"
        break
}
// Descobrindo o nível do herói. Vamos aguardar 10 segundos para criar um suspense
// Vamos aguardar 10 segundos para criar um suspense
  setTimeout(() => {
  console.log('Calculando o nível do herói... Aguarde...')
  console.log()
}, 4000)
 setTimeout(() => {
  console.log('Aguarde só mais um instante...')
  console.log()
  console.log()
}, 8000)
 setTimeout(() => {
  console.log("O herói de nome "+nomeHero + " está no nível " + nivelAtual)
  console.log()
}, 10000)
