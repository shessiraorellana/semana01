/*
Ejercicio #8:
- Teniendo una lista de objetos en distintos idiomas, idiomas usados.
- Elabora un traductor e identificador de idioma con los datos dados, de manera
sencilla
*/
var arrayIdiomas = [
    {
    idioma: "Español",
    texto: "Bienvenido al curso de React Native en PachaQtec",
    id_idioma: 1,
    },
    {
    idioma: "Ingles",
    texto: "Welcome to the React Native course at PachaQtec",
    id_idioma: 2,
    },
    {
    idioma: "Francés",
    texto: "Bienvenue dans le cours React Native chez PachaQtec",
    id_idioma: 3,
    },
    {
    idioma: "Italiano",
    texto: "Benvenuti al corso React Native presso PachaQtec",
    id_idioma: 4,
    },
    { idioma: "Portugués",
    texto: "Bem-vindo ao curso React Native na PachaQtec",
    id_idioma: 5,
    }
   ];

function retornaIdioma(codigoIdioma) {
    arrayIdiomas.map((val,index)=>{
        if (val.id_idioma==codigoIdioma) {
            console.log(`El idioma es: ${val.idioma}.
${val.texto}.`);
        }
    })
};

retornaIdioma(3);