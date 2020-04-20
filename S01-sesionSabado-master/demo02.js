/* 
- Añadir elementos a un array con Javascript push(Ciclo for)
- Crear un array de elementos que contenga nombres y posteriormente agregar
más elementos por medio del método “push”
*/

var arrayNumeros = [0];
var cantidad = 5
for (let index = 1; index <= cantidad; index++) {
    arrayNumeros.push(index);
}
console.log(arrayNumeros);

var arrayNombres = ["pepito","luchito","jorgito"];
arrayNombres.push("pablito","juancito");
console.log(arrayNombres)