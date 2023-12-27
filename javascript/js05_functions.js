/*         *** FUNCIONES ***
Las funciones de bloques de código con instrucciones que se pueden reutilizar las veces que sean necesarias.
Algunas funciones reciben parámetros y otras no
Las funciones normales se llaman función por declaración */


// Función que permite saludar
function saludar () {
    console.log("Hola desde una función")
}
// Primero se declara la función, después la ejecutamos con el nombre de la función y los parámetros
saludar();

//Hoisting : Característica de una función que nos permite invocarla desde antes de su inicizalición

    //Ejemplo: se ejecuta en la línea 11 y en la 19
function saludar (){
    console.log("hola");
}
saludar();


 /* Funciones que retornan algo : Para que una función retorne algo (un String, una operación, una variable, etc.) necesitamos indicarle al código de la función que vamos a retornar mediante la palabra return  */

 function greeting () {
    return "Hola desde una función que retorna";
 }
console.log(greeting())
 
// Función que retorna y recibe parámetros 
function sumar(x,y){
    return x+y; 
}
let resultado = sumar (233,125);

console.log(`El resultado de sumar x + y es ${resultado}`);

// Función para calcular el cuadrado de un número 
function calcCuadrado (numero){
    return numero * numero ; 
}
let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

/* *** funciones flecha (Arrow function) *** 
Es una manera de declarar una función por declaración, sintetizando código y haciéndolo más legible. 

función flecha para calcular el cubo de un número y potencia */ 
const calcCubo = (number) => {
    return number * number * number ;
}
let resultCubo = calcCubo (35);
console.log(resultCubo);

// Funcion potencia 
const potencia = (pot) => {
    return 2 ** pot ;
}
let resultpot = potencia (1024);
console.log(resultpot);


/* *** FUNCIONES ANÓNIMAS *** 
Son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable. Se hace referencia a ellas cada vez que se utilzian
Las funciones anónimas no permiten el hoisting */
const mensaje = function(){
    return "Este es un mensaje desde una función anónima";
}
console.log (mensaje());

/* *** CALLBACKS *** 
Es pasar una función B por parámetro a una función A, de modo que la función A pueda ejecutar esa función de forma genérica desde su código. */

const functionB = function(){
    console.log("Ejecutando función B");
}
//Función A que mandará a llamar a la función B 
const functionA = function(callback) {
    callback();
}
functionA(functionB);



