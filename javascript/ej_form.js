var formulario = document.querySelector(".formulario");

// Acceder al objeto elements del formulario
var elementosFormulario = formulario.elements;

// Mostrar la longitud del objeto elements
console.log("Número de elementos en el formulario:", elementosFormulario.length);

// Iterar sobre los elementos del formulario
for (var i = 0; i < elementosFormulario.length; i++) {
  var elemento = elementosFormulario[i];
  
  // Mostrar información sobre cada elemento
  console.log("Nombre del elemento:", elemento.name);
  console.log("ID del elemento:", elemento.id);
  console.log("Tipo del elemento:", elemento.type);
}


 var n = formulario.elements[0] // .elements accede al elemento [i-esimo] de un array que contiene los elementos dentro de un formulario (en este caso [0]: input, [1]: input, [2]: select [3]: input) 
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value // .value permite obtener el contenido de un elemento del formulario (p.e. input, textarea, select, etc.)
  var edad = e.value

  var i = na.selectedIndex // .selectedIndex obtiene el indice de la opcion seleccionada dentro del elemento select (lista desplegable)
  var nacionalidad = na.options[3] // .options[] accede a las opciones del elemento select, devolviendo un arreglo con las opciones dentro del elemento select
  console.log(nombre, edad)
  console.log(nacionalidad)
