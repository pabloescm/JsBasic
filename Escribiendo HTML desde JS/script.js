const h1 = document.querySelector("h1");
const p = document.querySelector('p');
const input = document.querySelector("input");

//console.log(p);

console.log({
    h1,
    p,
})

h1.innerHTML ="Cambiando contenido de h1 <br> cambio de linea"; // cambio el contenido del html como html.

//h1.innerText = "Cambiando contenido de h1 <br>"; // cambio el contenido del html como texto.


input.placeholder = "cambia"; //modificamos el placeholder de nuestro input;