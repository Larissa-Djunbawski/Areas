const prompt = require ("prompt-sync")()
const Areas = require ("./Areas.js")
const rua = 3.14159
let circulo = +prompt("Digite o raio do circulo: ")
let triangulo = +prompt("Digite a altura do triangulo")
const resposta = Areas.areacirculo(rua, r)
console.log(resposta)


