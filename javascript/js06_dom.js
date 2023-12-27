/* * * *  MANIPULACIÓN DEL DOM 
 
    - Leer y traer nodos del árbol del DOM
        document.getElementsById : trae elementos por id
        document.getElemntsByClassName : trae elementos por class
        document.getElementsByTagName : trae elementos por etiquetas
        */

// getElementById 
const titulo = document.getElementById("title1");
console.log(titulo)
console.log(titulo.innerText) // innerText : trae un String (el texto que vive en el id)

// getElementByClassName
const titulos = document.getElementsByClassName("title")
console.log(titulos.length)
for(i=0; i<=titulos.length-1;i++) console.log(titulos[i].innerText);
console.log(typeof titulos); // Muestra el tipo object porque es una coleccion de arrays

// getElementByTagName
const tituloH3 = document.getElementsByTagName("h3")
console.log(tituloH3)
console.log(tituloH3[0].innerText)

/* Métodos para llamar elementos mediante seleectores de CSS

    Se usa para procesos más específicos y la sintaxis querySelector
        -document.querySelector("selector")
        -document.querySelectorAll() . Selecciona los elementos que se especifican
    Siempre van a traer el primer elemento con el selector indicado
*/

// querySelector
const query = document.querySelector("#title4");
console.log(query.innerText)

const queryClass = document.querySelector(".title")
console.log(queryClass)

//querySelectorAll
const queryClassAll = document.querySelectorAll(".title")
console.log(queryClassAll)

// Manipular elementos del DOM (styles) con JS
titulo.style.textAlign = "center"
titulo.style.color="darkred"

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2")
titulo2.innerText = "Sesión de Manipulación del DOM . CH35"
titulo2.style.color = "darkgreen"

/* Métodos para crear y agregar elementos en el DOM. 
Este proceso se divide en dos : crear el nodo y agregar el nodo
    - Crear nodos 
        * document.createElement("element") --> Crea elementos a partir de etiquetas
        * document.createTextNode("text") --> Crea texto dentro de las etiquetas  
*/

const nodo1 = document.createElement("h4")
const imgNodo = document.createElement("img")

/*
-Agregar nodos, mandamos a llamar el elemento padre y le pasamos la propiedad con la constante que guarda al nodo creado

*parentElement.appendChild(const);
*parentElement.append(const);
*parentElement.insertBefore(const);
*ParentElement.inserAdjacentElement(const);
utilizaremos mayormente appendChild
*/ 
//obtengo el elemento padre por tag, class o id 
const parentElement = document.getElementById ("dif"); 
//crear texto al nodo1
const textNodo1 = document.createTextNode ("Imagen agregada desde el dom");
//insertar el texto en el nodo1
nodo1.appendChild(textNodo1);
//insertar nodos en elemento padre 
parentElement.appendChild(nodo1);
parentElement.style.fontFamily= "'Karla', sans-serif";
parentElement.style.color = "#A62F03";

/*Agregando imagen */

//Inserto el imgNodo en el elemento padre para definirlo posteriormente
parentElement.appendChild(imgNodo);
imgNodo.src = "./Assets/img/octocat.webp";
imgNodo.alt = "octocat github";
imgNodo.width = "200";

/* Otra forma de leer y modificar nodos
    document.outerHTML : leer
    node.innerHTML : escribir sobre el nodo 
*/

const elementOuter = titulo2.outerHTML
console.log(elementOuter)
titulo2.innerHTML = "Manipulación del DOM - CH35"