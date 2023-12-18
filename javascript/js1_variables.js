// comentarios de una sola línea

/* comentarios multilínea */

// * * * ALERT Y CONSOLE.LOG * * * 

    /*  alert("hola mundo");

        console.log("Este es un mensaje para la consola");

        var nombre = prompt("Ingresa tu nombre");
        alert("Hola, " + nombre +". Bienvenido a la CH35"); 

        var numero1 = parseInt (prompt("Ingresa el primer número"));
        var numero2 = parseInt (prompt("Ingresa el segundo número"));

        console.log ("La suma de " + numero1 + " + " + numero2 + " es " + (numero1 + numero2) ); 
        console.log("La resta de "+numero1+" - "+numero2+" es "+(numero1 - numero2)); 
        console.log("La multiplicación de "+numero1+" x "+numero2+" es " +(numero1 * numero2)); 
        console.log("La división de "+numero1+" / "+numero2+" es " +(numero1 / numero2)); 
    */

//  *** CONDICONALES ***

    /*    var edad = prompt("Ingresa tu edad:");

        if (edad >= 18) {
            alert("Bienvenido a Somos Poker. ¡Disfruta de la página!");
        } else {
            alert("Lo siento, debes ser mayor de 18 años para acceder a Somos Poker. Acceso denegado.");
        }  
    */    

    // *** VARIABLES ***
/* 
        scope es el alcance de nuestras variables
            var, let, const : su diferencia está en el alcance
            var : alcance global
            let : alcance local
            const : mantiene su valor

        string : cadena de texto (lleva comillas)
        number : número 
        boolena : true/false
        null : nulo
        undefined : dato no asignado o definido
*/

let nombre = "Daniel"; 
let invitadosExtras = 2; 
let esMayorEdad = true;
let edad = 24; 
let invitadoEspecial = null;
let horaDeSalida = undefined;


/* Escribe un mensaje en la consola, sin comillas para llamar la variable */
console.log(nombre);
/* Escribe un mensaje en la página */
document.write(nombre);

/* Encasillamiento o tipado : nos es útil para el mantenimiento del código, ya que lo hace más legible y fácil de entender 
Previene la posibilidad de errores

let numero = 15; 
let texto = "hola";
*/ 


//con encasillamiento

let numeroEncasillado = number= 5;
let textoEncasillado= string= "hola";

/* typeof : palabra reservada para saber que tipo de dato tenemos 

console .log(typeof(nombre)); 

conversion de string a number 

let funcionNumber = console.log(typeof Number (nombre));
metodoParseInt = console.log(typeof paseInt (nombre));
metodoParseFloat = console.log(typeof parseFloat (nombre));

parseInt y parseFont son funcionesq ue se utilizan para convertir cadenas de texto en números, ambas nos ayudan en este cambio */ 

/* conversion de number a string 

console.log(typeof String(edad));
console.log(typeof edad.toString()); */ 

// conversion de boolean a number

/* let numero = Number (esMayorEdad);
console.log(typeof(numero)); */

//conversion de texto a string 

/* let texto = String(esMayorEdad);
console.log(typeof (texto));
console.log(typeof esMayorEdad.toString()); */

let negacion = !esMayorEdad;
console.log (negacion);

//concatenar : unir strings

let saludo = " hola humano ";
let frase = "el futuro es hoy"; 

texto = saludo + frase;
console.log(texto); 
document.write (texto); 