const taks = {
    "actividad 1": "Crear un objecto",
    "actividad 2": "Hacer una operacion numerica",
    "actividad 3": "Hacer una operación lógica",
    "actividad 4": "Utilizar las 3 actividades anteriores en un ejemplo"
};

var miObjeto = {
    "nombre": "Mirianssss",
    "edad": 20,
    "hobby": "leer"
};
console.log("Actividad 1: ", miObjeto);

var n1 = 20;
var n2 = 30;
var res = n1 * n2;
console.log("Actividad 2: ", res);

if(n1>n2){
    console.log("Actividad 3: ","El mayor es " + n1);
}
else{
    console.log("Actividad 3: ","El menor es " + n2);
}

var miFunc = (refObjeto) => {
    if(refObjeto.nombre == "Mirian"){
        console.log("Actividad 4: ", "Hola Mirian");
    }
    else
    {
        console.log(`Actividad 4: Adios ${refObjeto.nombre}`);
    }
}

miFunc(miObjeto);