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
    if (nomeHero !== "") {
        console.log("Olá, " + nomeHero + "!!!")
        } else {
            console.log("O nome do herói precisa ser informado!!!")
            }
}
totalXP=0
while (totalXP==0){
    totalXP = prompt("Informe a quantidade de pontos XP do seu herói: ")
    if (totalXP > 0) {
        console.log("Seu herói tem " + totalXP + " pontos XP !!! Vamos descobrir o nível atual, aguarde...")
        }else {
            console.log("A quantidade de pontos XP precisa ser informada e deve ser maior que zero!!!")
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
  console.log('Calculando seu nível...Aguarde...');
}, 4000)
 setTimeout(() => {
  console.log('Aguarde só mais um instante...');
}, 8000)
 setTimeout(() => {
  console.log("O herói de nome "+nomeHero + " está no nível " + nivelAtual)
}, 10000)
