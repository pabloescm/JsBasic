/*
COMO HACEMOS PARA LEER CODIGO HTML DESDE DESDE ESTE DOCUMENTO JAVASCRIPT?
LA RESPUESTA ES QUE HAY FUNCIONES COMO DOCUMENT.GETELEMENT() Y DOCUMENT.QUERYSELECTOR()
Y COMO ESTAS HAY MUCHAS FUNCIONES QUE NOS DA EL NAVEGADOR PARA PODER 
HACER ESTE TIPO DE COSAS.
*/

//PODEMOS CREAR VARIABLES DONDE ALMACENAR LOS SELECTORES HTML.

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

//PROBAMOS QUE EN NUESTRAS VALIABLES ESTAN ALMACENADA EL CONTENIDO DE NUESTRAS ETIQUETAS HTML.
console.log(h1);
//console.log(input.value);


console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});