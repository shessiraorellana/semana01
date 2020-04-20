/*
 Ejercicio #3: Valor futuro de una inversión
- Realice un programa para calcular el valor futuro de una inversión; la fórmula
para obtener este valor es la siguiente:
valor_futuro =valor*Math.pow (1+tasa/100,periodo)
*/

function calcular(valor,tasa,periodo) {
    console.log("El valor futuro de la inversiòn es: $" + valor*Math.pow (1+tasa/100,periodo));
};

calcular(5000,7,1);