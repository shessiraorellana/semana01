/*
Ejercicio #6: Identificar llamada
Un teléfono celular cuenta con una funcionalidad de identificación de llamadas
permitiendo no solo ver qué número nos intenta contactar sino también
conocer qué contacto dado de alta en nuestro dispositivo, nos llama
- Realizar un programa que imite esta funcionalidad, principalmente que el
usuario al ingresar el número de teléfono, el programa reconozca a quién
pertenece el mismo
*/

var listaUsuario = [
    {
        "numero":"11111111",
        "usuario":"pablito"
    },
    {
        "numero":"2222222",
        "usuario":"juancito"
    },
    {
        "numero":"33333333",
        "usuario":"pepito"
    },
    {
        "numero":"4444444",
        "usuario":"jorgito"
    }
];

function quienllama(numero) {
    listaUsuario.map((val,index)=>{
        if (val.numero==numero) {
            console.log("El usuario que esta llamando es: " + val.usuario);
        }
    })
};

quienllama("33333333");
