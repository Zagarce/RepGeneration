/* 
       * * *  BUCLES * * *

Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

    - Operadores de incremento (++) y operadores de decremento (--)
        - El operador ++ se utiliza para aumentar el valor de una variable en uno.
        - El operador -- se utiliza para disminuir el valor de una variable en uno.
    
    - ${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.

    - Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 

    
    - (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/*      * * * CICLO FOR * * *

Un ciclo for se repite hasta que la condición se evalue como false.
Crea 3 expresiones opcionales: 
    - Sintaxis 
        for (expresionInicial; expresionCondicional; expresionActualizacion){
            Código a ejecutar en cada interación del bucle
        }
    
    1. Incialización : se debe inicializar con una variable que será evaluada en la expresión a comparar.
    2. Condición : es una expresión que debe cumplor la variable inicial (true). Si no se cumple (false), el bucle termina.
    3. Actualización : son los intervalos que cambiarán la variable inicial mientras la condición sea true. 
         */


// Crear un programa para saber cuántos boletos vendemos para una rifa
for (let boleto = 1; boleto <= 15; boleto ++){
    console.log(`Boleto #${boleto}`)
}

// Programa para vender bolos con una variable global 
let bolos = 1;
for (bolos; bolos <= 20; bolos++){
    console.log(`Vendí ${bolos}`)
}

// Cuenta regresiva
let cuentaRegresiva = 15;
for (cuentaRegresiva; cuentaRegresiva >=0; cuentaRegresiva-=5){
    console.log(`Quedan ${cuentaRegresiva} paletas`)
}

/* Recorrer arrays con el ciclo for
Debemos  */

const ch35 = ["Rodrigo", "Jorge", "Rey", "Arturo"];

for (let i=0; i< ch35.length; i++){
    console.log(ch35[i]);
}

/*      *** Variaciones del ciclo for
-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/

let frutas = ["Manzana", "Naranja", "Peras","Mandarinas"]

// sumar números del 1 al n

let suma=0;
for (let i=1; i<=20; i++){
    suma += i;
    console.log(suma);
}
console.log(suma);

// Tabla 5
const tabla =3;
for(let i=1 ; i<=10 ; i++){
    let resultado = tabla*i; 
    console.log(`${tabla} x ${i} = ${resultado}`)
}

/*      * * * CICLO WHILE * * *

    Recorrer un bloque de código siempre que una condición específica sea verdadera. 
    Sirve para realizar una tarea repetitiva mientras una condición sea verdad. 
*/

//venta de productos
let productos = 5;
while (productos > 0){
    console.log(productos + "productos vendidos");
    productos--;
}

// Imprimir números
let num1 = 0;
    while(num1 <10 ){
        num1++;
        console.log("El número es " + num1);
    }

//factorial
var resultado = 1;
for(let i=1; i<=10 ; i++){
    resultado *= i;    
}
console.log(resultado);