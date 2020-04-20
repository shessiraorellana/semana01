/*
Ejercicio #9:
- Teniendo una lista de números enteros, sumar todos los números pares e
impares en dicha lista y mostrarlo en variables separadas.
*/

var arrayNumeros = [1,2,3,4,5,6,7,8,9];
var sumaPares = 0;
var sumaImpares = 0;

arrayNumeros.map((val)=>{
    if (val%2==0) {
        sumaPares+=val;
    }else{
        sumaImpares+=val;
    }
})

console.log("La suma de los pares es: "+sumaPares);
console.log("La suma de los impares es: "+sumaImpares);