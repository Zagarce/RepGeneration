/*
*Ejercicios
*Ejercicio de Arrays:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/

        let temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
        const temperaturasFahrenheit = [];
        console.log(temperaturasFahrenheit);

        function celsiusToFahrenheit(C) {return C * 9/5 + 32;}

        for(i=0;i<=temperaturasCelsius.length-1;i++){
           temperaturasFahrenheit[i]=celsiusToFahrenheit(temperaturasCelsius[i]);
           } 
        let tabla = [temperaturasCelsius, temperaturasFahrenheit];
        
        for(let i = 0; i<=temperaturasCelsius.length-1; i++){
        console.log(tabla[0][i], tabla[1][i]);
        //console.log(`${tabla[0][i]} °C son ${tabla[1][i]} °F`);
        }
        

/*      * * * Ejercicios de Bucles:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/

        sumaNaturales( 100/* prompt("Ingresa el número hasta el que quieres sumar") */);
        function sumaNaturales(ultimoNumero) {
            var suma = 0;
            for(let i = 1; i<=ultimoNumero; i++) {
            suma += i; // Forma abreviada de : suma = suma + i
            }
            return console.log(suma)
        }



/*      * * * Ejercicio : Números Primos * * * 
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/


 /*         function esPrimo(numero) {
            if (numero <= 1) {
                return false;
            }
            for (let i = 2; i < numero; i++) {
                if (numero % i === 0) {
                    let multiplo=i;
                    console.log(`El mínimo divisor de ${numero} es ${multiplo}`);
                    return false; 
                }
            }
            return true;
        }

        let numero = Math.abs(Math.round(prompt("Ingrese un número para verificar si es primo:")));

        if(isNaN(numero)) { 
            console.log("No ha ingresado un número, inténtelo de nuevo");
        } else if (numero === 1) {
            console.log("Por definición, 1 no es un número"); 
        } else if (esPrimo(numero)) { 
            console.log(`${numero} es un número primo`);
        } else { 
            console.log(`${numero} no es un número primo`);
        }  */

esPrimo(Math.abs(Math.round(161684179)));

        function esPrimo(numero) {
            if(isNaN(numero)) { 
                return console.log("No ha ingresado un número, inténtelo de nuevo");
            }
            else if (numero <= 1) {
                return console.log("Por definición, 1 y 0 no son números primos");
            }
            for (let i = 2; i < numero; i++) {
                if (numero % i === 0) {
                    return console.log(`El mínimo divisor de ${numero} es ${i}. Por tanto, no es primo.`);; 
                }
            }
            return console.log(`${numero} es un número primo`);
        }


/*
*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).
*/ 

fibonacci(10)
function fibonacci(n) {
    var a=0;
    var b=1;
    console.log(a);
    console.log(b);
    for(let i=2; i<=n; i++){
        var suma = a+b; // Paso 1. Se hace la suma usando los valores definidos de a y b
        a = b; // Paso 2. Se redefine a usando el penúltimo valor de la serie para el siguiente ciclo
        b = suma; // Paso 3. Se redefine b usando el último valor de la serie para el siguiente ciclo
        console.log(suma); // Imprime el valor de suma por cada ciclo 
    }
    //return console.log(suma); //Devuelve el n-ésimo término
}

/*
Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/

