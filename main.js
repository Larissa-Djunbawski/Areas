const prompt = require ("prompt-sync")()
const Areas = require ("./Areas.js")
const p = 3.14159
let circulo = +prompt("Digite o raio do circulo: ")
const resposta = Areas.areacirculo(p, raio)
console.log(resposta)

const base = +prompt("Digite a base")
const altura =  +prompt("Digite a altura")

const retangulo = Areas.retangulo(base,altura)
const triangulo = Areas.triangulo(base,altura)

console.log(`a area do retangulo e: ${retangulo}, e a area do triangulo e: ${triangulo}`)


