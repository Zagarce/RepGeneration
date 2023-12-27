/*  * * * ARRAYS * * *
    Es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado por la posición que ocupa en el array.
    Los arrays se utilizan para almacenar y organizar datos de manera más eficiente.
 */

    // Crear un array
const numeros = [1,2,3,4,5];

    // Array de cadena de texto
const comida = ["tacos", "sopita", "pan","jugo"]; 
console.log(comida);

    // Array mixto
const mixto = [
    "Pluma", 
    8,
    true,
    {nombre:"Mar"}
]
console.log(mixto);

    // Array vacio
const lista = [];
console.log(lista);

    // Agregar elementos a mi array vacio
lista[0] = "Leche";
lista[1] = "Carne de pollo";
lista[2] = "Espinaca";
lista[3] = "Huevo";
console.log(lista);

    // Otra manera de crear Arrays
const frutas = new Array("manzana", "naranja", "mango","mandarina","sandía")
// Esta sintaxis se puede emplear en Arrays porque son Objects. Es una manera de mandar a llamar un nuevo Objeto de tipo Array
console.log(frutas);

    // Longitud de un array
console.log(frutas.length);
    
    // Acceder a los elementos del Array, acorde a su índice
console.log(frutas[2]);
console.log(frutas[5]);

    // Modificar un elemento del array por el índice
comida[0]="carne";
comida[2]="cereal";
console.log(comida);

    // Arreglo de arreglos o multidimensional
console.log("Arreglo de arreglos"); 

const estados = ["Estado de México", "Jalisco", "Yucatán", "Sonora", "Oaxaca", "CDMX"];
const platillos = ["Guajolocombo", "Torta ahogada", "Panuchos", "Dogos", "Tlayuda", "Tacos"];

const menu = [estados, platillos]; 
console.log( menu[0][1] , menu[1][1] );


/*  * * * Métodos de Arrays * * *
    

    - Métodos de cola : Implica agregar elementos al final del array y eliminar al inicio del array. Sigue al principio de FIFO (first-in - first-out), lo que significa que el primer elemento añadido es el primer elemento eliminado.
        -push
        -shift
        -unshift
    - Método de pila (stack). Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (last-in -first out), que signfica que el último elemento añadido es el primero en ser eliminado
*/
console.log("Métodos de Arrays");

const ch35 = ["Dany", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
console.log(ch35)
// pop() : elimina el último elemento del array
let popCh35 = ch35.pop();
console.log(popCh35); // vemos el dato eliminado (el último del arreglo)
console.log(ch35); // vemos el arreglo modificado

// push() : agrega al final del array
let pushCh35 = ch35.push("Mony");
console.log(ch35);

//shift() quitar primero del array
let shiftCh35 = ch35.shift();
console.log(ch35); 

//unshift() : agrega al principio del array
let unshiftCh35 = ch35.unshift("Yorch");
console.log(ch35);

//reverse() : cambia el sentido del ordenamiento del array
let reverseCh35 = ch35.reverse();
console.log(ch35);

// sort() : orden por alfabeto
let sortCh35 = ch35.sort();
console.log(ch35);

// slice() : crea un arreglo con los elementos seleccionados de otro arreglo
let sliceCh35 = ch35.slice(1,3);
console.log(sliceCh35);


/* Investigar
    - sort
    - forEach
    - splice 
    - indexOf
*/

