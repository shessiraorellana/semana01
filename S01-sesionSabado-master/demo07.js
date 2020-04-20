/*
Ejercicio #7: Índice de masa corporal
- Realizar un programa que nos permita calcular el índice de masa corporal
de una persona por medio de su peso y altura solicitados
*/

function calcularMasaCorporal(pesoKG,tallaM) {
    console.log("La masa corporal es: " + Math.round(pesoKG/(tallaM*tallaM)));
}
calcularMasaCorporal(68,1.65);