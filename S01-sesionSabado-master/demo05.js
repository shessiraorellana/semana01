/*
Ejercicio #5: Creando un objeto círculo
- Realizar un programa que permita crear un molde para objetos de tipo círculo
al que le pasamos el radio cuando lo inicialicemos, y que tenga una función
que nos calcule su área, otra su longitud, y estos valores sean mostrados
por pantalla
*/
let circle = document.getElementById('circulo');

let context = circle.getContext('2d');
let cx = circle.width/2;
let cy = circle.height/2;
let rad = 70;
context.beginPath();
context.arc(cx,cy,rad, 0, 2 * Math.PI,false);
context.fillStyle= "blue";
context.fill();
context.lineWidth=5;
context.strokenStyle="#003300";
context.stroke();