// Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade 
// for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”.
//  E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave” 

const prompt = require("prompt-sync") ()
    velocidade1 = 90
    let velocidade = parseInt(prompt ("Inserir velocidade: "));
    
    if (velocidade <= velocidade1) {
        console.log ("Sem Multa")
    } else {
        (velocidade<=0,20*velocidade1)
        console.log ("Multa leve")
    } 
    if (velocidade>=0,20*velocidade1) {
        console.log ("Multa Grave")
    
    }
    
