/*
Ejercicio #4: Creando arrays
- Crear un array llamado *meses* y que almacene el nombre de los doce
meses del año
- Mostrar por pantalla los doce nombres utilizando la función *alert()*
*/

var arrayMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];

arrayMeses.map((val)=>{
    console.log(`El mes es: ${val}`)
})