//Desafio Classificador de nível de Herói.
//o que deve ser utilizado


// - Variaveis ( Nome do Heroi and a quantidade de XP)
// -Operador
// Laços de repetição
// Estrutura de decisões

//Objetivo do Projeto

// Crie uma variavel para armanezar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.00 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata 
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina Diamante
// Se XP for entre 8.001 e 9000 = Ascendente
// Se XP for entre 9.001 e 10.000 = Imortal
// Se XP for maior ou igual a 10.001 = Radiante

//Saída

// ao final deve se exibir uma mensagem: O Herói de nome {nome} está no nivel de {nivel}.

// criado a Lista de herois.
let heroi = ['Aço','Capitão Valor', 'Fenix Dourada ',' Arcanjo Rubro', 'Pixel Defensor','TechVanguard','Guardião das Chamas','Eclipse Arcano']


// NivelXP informado para categorizar.
let nivelXP = 6050

//criando a condição.s

if (nivelXP <= 1000) {
    categoria = 'Ferro'}

 else if (nivelXP >= 1001 && nivelXP <=  2000) {
    categoria = 'Bronze' }

 else if ( nivelXP >= 2001 && nivelXP <=  5000) {
    categoria = 'Prata' }

 else if (nivelXP >= 6001 && nivelXP <= 7000) {
    categoria = 'Ouro'}
   
 else if (nivelXP >= 7001 && nivelXP <= 8000) {
      categoria = 'Platina Diamante'}

 else if (nivelXP >= 8001 && nivelXP <=  9000) {
    categoria = 'Ascendente' }

 else if (nivelXP >= 9001 && nivelXP <=  10000) {
    categoria = 'Imortal' }

 else if (nivelXP >= 10001) {
    categoria = 'Radiante' }

//Saída
console.log ('O Herói ' + heroi[6] + ' está no nivel ' + categoria)
