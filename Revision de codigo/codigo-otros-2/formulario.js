var formulario = document.querySelector(".formulario") /* Se corrige la clase formulario */

// Función para declarar variables nombre, edad, nacionalidad segun lo ingresado en el formulario, y de control de errores al enviar el formulario de manera que si se cumplen condiciones de nombre y edad se llama a la funcion agregarInvitado
formulario.onsubmit = function(e) { // cambiamos el argumento duplicado con la variable 'e'

  e.preventDefault(); // Corregimos el método preventDefault(), que detiene el programa por un error en los event listeners
  
  var n = formulario.elements[0] // .elements accede al elemento [i-esimo] de un array que contiene los elementos dentro de un formulario (en este caso [0]: input, [1]: input, [2]: select [3]: input) 
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value // .value permite obtener el valor de entrada de un elemento del formulario (p.e. input, textarea, select, etc.)
  var edad = e.value

  var i = na.selectedIndex // .selectedIndex obtiene el indice de la opcion seleccionada dentro del elemento select (lista desplegable)
  var nacionalidad = na.options[i].value // .options[] muestra el [i-esimo] elemento option dentro del elemento select
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error") // .classList.add() permite agregar la clase 'error' al primer elemento input del formulario
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

// Se crea la función para agregar invitado
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados") // Se llama al div que contiene la lista de invitados que se irán crando 

  // Se crea un contenedor hijo para cada invitado agregado
  var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista") // correcion de .add
  lista.appendChild(elementoLista)


  // Funcion para colocar información dentro del div 'elementoLista'
  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre) // Línea de texto 'descripción: '
    elementoLista.appendChild(inputNombre) // Valor ingresado para nombre, edad, nacionalidad
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)

  // Se crea un salto de linea y el botón Eliminar invitado como hijo del elementoLista
  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    //this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}