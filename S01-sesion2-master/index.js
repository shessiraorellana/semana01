const taks = {
    "Actividad 1": "Crear un objecto",
    "Actividad 2": "Utilzar el objecto",
    "Actividad 3": "Modificar un objecto",
    "Actividad 4": "Crear un objecto a partir de un objecto inicial"

};

var newObject = {
    "nombre":"mirian",
    "apellido":"orellana",
    "edad": 25
};

console.log(`Mi nombre ${newObject.nombre} ${newObject.apellido}`);
 
newObject["correo"]="mimi@gmail.com";

console.log(newObject);

var objectoFinal = new Object(newObject);
console.log(objectoFinal);


