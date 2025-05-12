//variáveis do sistema
let nomeHero
let totalXP
let nivelAtual
//inicialização das variáveis
nomeHero = prompt("Qual é o nome do seu herói?")
if (nomeHero !== null) {
  console.log("Olá, " + nomeHero + "!!!")
} else {
  console.log("O nome do herói precisa ser informado!!!")
}
totalXP = prompt("Informe a quntidade de pontos XP do seu herói !!!")
if (totalXP !== null) {
  console.log("Seu herói tem " + totalXP + "pontos XP !!! Vamos descobrir seu nível atual")
} else {
  console.log("A quantidade de pontos XP precisa ser informada!!!")
}
nivelAtual=""
switch (totalXP){
    case totalXP <=2000:
        nivelAtual="Bronze"
        break
    case totalXP <=5000:
        nivelAtual="Prata"
        break
    case totalXP <=7000:
        nivelAtual="Ouro"
        break
    case totalXP <=8000:
        nivelAtual="Platina"
        break
    case totalXP <=9000:
        nivelAtual="Ascendente"
        break
    case totalXP <=10000:
        nivelAtual="Imortal"
        break
    case totalXP >=10001:
        nivelAtual="Radiante"
        break
}
console.log("O herói de nome "+nomeHero + "está no nível de " + nivelAtual)