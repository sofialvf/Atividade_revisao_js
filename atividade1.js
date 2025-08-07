//1- Elabore um programa que leia um número. Informe se ele é par ou ímpar
const prompt = require("prompt-sync") ()
    let numero = parseInt(prompt ("Digite um numero: "));

    if (numero % 2 == 0)  {
      console.log ("Par")
     }  else {
        console.log ("Impar")
    }
