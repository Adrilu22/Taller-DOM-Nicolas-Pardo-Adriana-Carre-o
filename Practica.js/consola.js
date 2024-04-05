// 1.metodo getElementById()  devuelve por consola
let descripcionById = document.getElementById("descripcion");
console.log(descripcionById);

// 2. metodo querySelector() asocia al id
let descripcionByQuerySelector = document.querySelector("#descripcion");
console.log(descripcionByQuerySelector);

// 3. metodo querySelectorAll() devuelve  elementos
let elementosLi = document.querySelectorAll("li");
console.log(elementosLi);

// 4. Devuelve por consola la cantidad de elementos listados con li
let cantidadElementos = elementosLi.length;
console.log(`Hay ${cantidadElementos} elementos en la lista.`);

// 5. Genere una lista de todos los elementos `li` y recorra la lista con ayuda de un ciclo
elementosLi.forEach((elemento, index) => {
    console.log(`Elemento ${index + 1}: ${elemento.textContent}`);
});

// 6.  textContent Agrega parrafo
let $nuevoParrafo = document.createElement("p");
$nuevoParrafo.textContent = "En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad de Reading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programas finalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seis programas tuvieron que interactuar con los 12 jueces manteniendo una conversación mediante un computador durante cinco minutos en donde se plantean una serie de preguntascon el fin de determinar si es un computador o un humano. En la edición del 2008 ninguno logró pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programa Elbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12 jueces, es decir el 25 % de los jueces pensó que estaba conversando con un ser humano.";
document.body.appendChild($nuevoParrafo);

// 7. Propiedad innerHTML agrega un link
const nuevoEnlace = document.createElement("a");
nuevoEnlace.href = "#";
nuevoEnlace.innerHTML = "Enlace principal";
document.body.appendChild(nuevoEnlace);

// 8.arreglo a una lista no ordenada en el documento HTML con el título "Meses del año"
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const listaMeses = document.createElement("ul");
document.body.appendChild(listaMeses);

meses.forEach(mes => {
    const itemLista = document.createElement("li");
    itemLista.textContent = mes;
    listaMeses.appendChild(itemLista);
});