/*      * * * OPERADORES * * * 

Es un signo que especifica que debe efectuar una determinada operación

    -Operadores aritméticos (+ - * / % ++ --)
    -Operadores de asignación (=)
    -Operadores lógicos (&&,||, !)
    -Operadores de comparación (==, ===, !=, !==, <, >, >=, <=)
    -Operadores de cadena (toLowerCase, toUpperCase, toString, concat, +)
 */

/* Operadores aritméticos

+ : suma
- : Resta
* : multipicación
/ : división
% : residuo
++ : incremento de uno en uno
-- : decremento de uno en uno
*/

const num1 = 10;
let num2 = 8;

suma=num1+num2;
resta=num1-num2;
multiplicacion=num1*num2; 
division = num1/num2;
residuo = num1%num2;
incremento=num1; 
incremento ++;
decremento = num2;
decremento --;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(residuo);
console.log(incremento);
console.log(decremento);

let precioReal = 1000;
let porcentajeDescuento = 0.20;

let cantidadDescuento = (precioReal + porcentajeDescuento)/100;
let precioConDescuento = precioReal - cantidadDescuento;

console.log("Precio Real:$" + precioReal);
console.log("Porcentaje de descuento: " + porcentajeDescuento + "%");
console.log("Cantidad de descuento:$" + cantidadDescuento);
console.log("Precio con descuento:$" + precioConDescuento);


/*  * * * OPERADORES DE ASIGNACIÓN 

    (=) : Este operador no copara, lo que hace es asignar
    let frutas = manzana

    * * * OPERADORES DE COMPARACIÓN

    (==) : compara si neuestros valores son iguales
*/
let numero3 = 10;
let texto = "10";

console.log(numero3 === texto)

/* (===) : Igualdad estrica, compara si los valores son iguales y el tipo de dato */

let numero4 = 10;
let texto1 = "10";

console.log(numero4===texto1);

/* (!=) : Desigualdad o distinto, este operador verifica si dos valores no son iguales y de ser necesario realiza la conversión del tipo de dato */

let precioCaja = 1499;
let precioMaximo = 1500; 

if(precioCaja != precioMaximo){
    console.log("El precio del producto no es igual al precio máximo")
} else {
    console.log("El precio del producto es igual al precio máximo permitido")
}

/* (!==) desigualdad estricta : este ordenador verifica si dos valores no son iguales pero, a diferencia de (!=), en este caso ambos valores deben tener el mismo valor y tipo */

let numero5=10;
let numero6=10;

if (numero5 !== String(numero6)){
    console.log("Son diferentes");
} else {
    console.log("Los valores son iguales")
}

/* (>) Mayor que : nos indica si un valor es mayor que otro  */
 
let puntuacionFinal = 100; 
let puntuacionRequerida = 102; 

console.log(puntuacionFinal > puntuacionRequerida);

// (<) : indica si un valor es menor que otro 

let anios = 20;
let edadLimite = 30; 

console.log(anios < edadLimite)

// (>=) : Mayor o igual que 

let edad = 40;
let edadNecesaria = 18; 

console.log(edad >= edadNecesaria); 

// (<=) : Menor o igual que 

let temperatura = 14;
let temperaturaMaxima = 21; 

console.log(temperatura >= temperaturaMaxima); 



/*      * * * EJERCICIOS * * *
ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o hay alguno que sea mayor que otro */

        /* let n1 = Number(prompt("Ingresa primer número"))
        let n2 = Number(prompt("Ingresa segundo número"))

        if(n1 > n2) {
            console.log(`${n1} es mayor que ${n2}`)
        } else if(n1<n2){
            console.log(`${n1} es menor que ${n2}`)
        } else if (n1==n2){console.log("Estos números son iguales")}
        else{
            console.log("No ingresaste un número válido")
        } */


/* ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no */

        /* let palabra1 = prompt("Ingresa primera palabra")
        let palabra2 = prompt("Ingresa segunda palabra")

        if(palabra1 === palabra2) {
            console.log(`Son la misma palabra`)
        } else {console.log("Las palabras son distintas")} */


/* * * * OPERADORES LÓGICOS * * *

        && : se utiliza cuando las dos condiciones deben cumplirse
*/

let mayoriadeEdad = 18;
let tieneId = true; 

if( mayoriadeEdad >= 18 && tieneId){
    console.log("Puedes rentar salón")
} else{
    console.log("No lo puedes rentar")
}

/* (||) or : se utiliza cuando se debe cumplir al menos una de las condiciones */

let esPrime = false;
let descuento = true; 

if (esPrime || descuento){
    console.log("Califica para descuento");
} else {
    console.log("No califica para descuento");
}

// (!) NOT : se utiliza para negar el valor de una condición

let EsDiaLibe = false;
if(!EsDiaLibe){
    console.log("Se trabaja");
} else {
    console.log("Descansito");
}

/* * * * OPERADORES DE CADENA * * * 

toLowerCase hace el cambio de nuestro Sring a minúsculas
*/

let mensajeUsuario = "Bienvenido a la tierra";
let cambioMinuscula = mensajeUsuario.toLowerCase();
console.log(cambioMinuscula)

/* toUpperCase hace el cambio de nuestro Sring a minúsculas
*/
let cambioMayuscula = mensajeUsuario.toUpperCase();
console.log(cambioMayuscula)

// trim quita los espacios al inicio y final
let aviso = "     CH35 rifa          "
let sinEspacios = aviso.trim()
console.log(sinEspacios);

// toString convierte un tipo de dato number en string

let numero10 = 31
let cadenas = numero10.toString();
console.log(cadenas)

//concat 

let nombre = "Fernanda"; 
let apellido = "Ramos";
let nombrecompleto = nombre.concat(` ${apellido}`);
let nombrecompleto1 = nombre.concat(" ",apellido);

console.log(nombrecompleto)
console.log(nombrecompleto1)

/* Expresiones

expresion aritmética 

let operacion = 14 + 25 * 12; se combina la suma con la multiplicación
expresión de cadena 

let notificación = "Casi," + "año nuevo"; expresión concatenando

    Expresión lógica

let esMayordeEdad = (23 > 18) && (23 < 65) ; tiene operadores lógicos y de comparación

    Expresión de Asignación


*/

// Solicitar al usuario si tiene los ingredientes necesarios
let tieneHarina = confirm("¿Tienes harina?");
let tieneHuevo = confirm("¿Tienes huevos?");

// Función que verifica los ingredientes y muestra la receta
function hacerHotcakes(tieneHarina, tieneHuevo) {
    // Verificar si tiene los ingredientes necesarios para hacer hotcakes

    if (tieneHarina && tieneHuevo) {
        // Si tiene harina y huevos, continuar con la receta
        console.log("¡Perfecto! Tienes los ingredientes necesarios para hacer hotcakes.");

        // Resto de la receta
        console.log("1. Mezcla la harina con los huevos y otros ingredientes.");
        console.log("2. Calienta una sartén a fuego medio.");
        console.log("3. Vierte la mezcla en la sartén caliente.");
        console.log("4. Cocina ambos lados hasta que estén dorados.");
        console.log("5. ¡Disfruta tus deliciosos hotcakes!");

    } else {
        // Si no tiene harina o huevos, mostrar un mensaje
        console.log("Lo siento, no tienes todos los ingredientes necesarios para hacer hotcakes. ¡Ve a comprarlos!");
    }
}
hacerHotcakes(tieneHarina, tieneHuevo);



