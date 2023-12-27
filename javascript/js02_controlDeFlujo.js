console.log("Hola CH35")

/*      *** CONTROL DE FLUJO Y ESTRUCTURAS DE CONTROL

    Las estructuras de control son un componente fundamental dentro de la programación, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar código, podemos mencionar las siguientes:
        - Tomar decisiones basadas en condiciones especificas, esto produce un codigo tanto dinamico como adaptable
        - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
        - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser especificos en indicar qe instrucciones ejecutar y en que orden
        - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones en caso de que no se necesite 
        - Facilitar tanto la escritura de codigo como la claridad de este
    
    Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes: 
     
        - Estructura if-else
        - Estructura switch
        - Estructuras de bucles (for, do, do while)
        
    Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista */

/*      *** Declaración de sentencia if-else *** 
    
    Palabra reservada if para comenzar la declaración, se coloca un paréntesis ()donde se debe colocar una expresión lógica (true or false), se abre y cierran llaves {} para indicar que sentencia va a ejecutar si la condición se cumple (true), después de la llave {} declarada para el bloque de ejecución if, colocamos la palabra reservada else, abrimos {} para indicar el bloque de código a ejecutar en caso de que la condición no se cumpla */

    let n= 10;
    if (n>10) {
        console.log(true);
    } else {
        console.log(false);
    } 

    /*      ***  if anidado : if - else-if *** 

    Se trata de la misma sentencia if-else declarada anteriormente, pero en este caso, anidar varias veces esta misma sentencia, lo que nos permitira tomar decisiones mas complejas. 
    Usaremos la contatenación. Concatenar significa unir cadenas en JavaScript el símbolo de más (+). Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar en codigo poco legible y confuso
    */

let edad = 150;
if (edad <18 ) {
    console.log("Eres mejor de edad, retírate");
} else if (edad >= 18 && edad < 65) {
    console.log("Eres un adulto joven ");
} else if (edad > 100){
    console.log("Ya estás más pa allá que pa acá");
} else {
    console.log("Eres un adulto mayor");
}

/*      *** SENTENCIA SWITCH *** 
    
    La sentencia switch es otro tipo de estructura de control de flujo que nuevamente se encuentra en diversos lenguajes de programación. 
    Esta sentencia no se basa en una bifurcación, sino que opera según casos (case) que, dependiendo de la expresión que cumpla con un caso específico, será la secuencia que se ejecute dentro de la declaración.
    
    Declaración : se empieza por colocar la palabra reservada switch, seguido de colocar paréntesis () donde se debe colocar el valor que va a indicar qué sentencia o caso (case) se ejecutará.
    Despúes se indica el bloque de código que se limita a esta sentencia, como lo hacíamos a la sentencia if o con las funciones.
    Dentro de este bloque de código colocaremos los casos para cada valor que se desee establecer, según sea el valor indicado dentro del paréntesis ().
    Cada uno de estos pasos se separa de la siguiente manera: 
        
       - case valor : instrucción a ejecutar si el valor empata con este caso
        
       - break : para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instrucción break
       - default : Cuando terminemos de establecer los casos que necesitemos declarar dentro de nuestra sentencia debemos colocar un valor por defecto, default
       Esta última sentencia nos permite establecer un valor por defecto, si es que este valor colocado no empata con ningún otro dentro de la sentencia o en ninguno de los casos 
      - default : mensaje no disponible   */

let dia = "martes"; 
switch(dia){
    case "lunes": 
        console.log("Odio los lunes att: Garfield");
        break; 
    case "martes":
        console.log("quién avienta cuetes los martes?");
        break;
    case "miércoles":
        console.log("Toca presentar proyecto");
        break;
    case "jueves":
        console.log("Juebebes casi viernes");
        break;
    case "viernes":
        console.log("viernes de disfraces");
        break;
    case "sábado":
        console.log("toca chambiar");
        break;
    case "domingo":
        console.log("Toca chambiar todo el día");
        break;
    default: console.log("no ingresaste un día de la semana");
}

/*      *** OPERADOR TERNARIO 
    
    Expresión condicional if-else más simple y legible.
    Se usa para simplificar condiciones de una sola expresión
    Puede servir para anidar sentencias if-else-if
    Su declaración es mediante una variable: 
        var / let / const 
    se le asigna un nombre mediante el operador "="
    se coloca una expresión lógica, que va dentro de un paréntesis ()
    hay que colocar un caracter "?" que indica el camino a seguir, dependiendo de si se cuumple, o no, la expresión

    Para separar el resultado true / false, debemos agregar un caracter de ":". del lado izquierdo se coloca la sentencia a ejecutar (true), del lado derecho se coloca la sentencia a ejecutar (false)
        */
let verificacion = n > 12 ? "Si es mayor" : "No es mayor"
console.log(verificacion);

/*      *** NOTA *** 
    if-else : condicionales abiertos a un rango de valores
    switch : casos específicos */

/*  ******** EJERCICIOS ******** */
/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

let edadv = 66
if (edadv >=18) {
    console.log("Tienes edad suficiente para votar")
} else {
    console.log("Aún no puedes votar")
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

let m=29;
if (m%7 == 0 && m%8 == 0) {
    console.log("Tu número es múltiplo de 7 y de 8")
} else {
    console.log("Tu número no es múltiplo de 7 y 8")
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 * 
 */


if (m%4 == 0 && m%9 == 0) {
    console.log("Tu número es múltiplo de 4 y de 9")
} else if (m%9 == 0){
    console.log("Tu número es múltiplo de 9")
}else if (m%4 == 0){
        console.log("Tu número es múltiplo de 4")
} else {
    console.log("tu número no es múltiplo de 4 ni de 9")
}

/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

let generoPelicula = "accion";

switch(generoPelicula){
    case "accion":
        console.log("Puedes ver Duro de matar");
        break;
    case "drama": 
        console-log("Puedes ver La Vida es bella")
        break;
    case "comedia":
        console.log("Puedes ver Todopoderoso");
        break;
    case "romance":
        console.log("Puedes ver Titanic");
        break;
    case "suspenso":
        console.log("Puedes ver La huesera");
        break;
    case "terror":
    console.log("Puedes ver La dama de negro");
        break;
}

/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

/*      let operacion = prompt(`Ingresa el número de tu operación 1. Retirar dinero ; 2. Transferencia ; 3. Depósito ; 4. Pago de servicios`);

        if (operacion == 1) {
            prompt(`Ingresa el monto a retirar`)
            console.log(`Recoge tu dinero`)
        } else if (operacion == 2) {
            prompt(`Ingresa la cuenta para transferir`)
            let monto =  prompt(`Ingresa el monto`)
            console.log(`Transferencia realizada por ${monto}`)
        } else if (operacion == 3) {
            prompt(`Ingresa la cuenta para depositar`)
            prompt(`Ingresa el monto a depositar`)
            console.log(`Depósito realizado`)
        } else if (operacion == 4) {
            let servicio = prompt(`Ingresa el servicio deseas pagar?`)
            let pago = prompt(`Ingresa el monto que deseas pagar`)
            console.log(`Se han abonado ${pago} pesos a tu servicio de ${servicio}`)
        } else {
            console.log("No ingresaste una función válida")
        } */


/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

divisa(100,"yen")
function divisa(n, divisa){ 
    switch (divisa){
        case "dolar":
           console.log(n/17.24 + " dolares");
           break;
        case "euro":
            console.log(n/18.83 + " euros");
            break;
        case "yen":
            console.log(n/0.12 + " yenes");
            break;
        case "libra esterlina":
            console.log(n/21.88 + " libras esterlinas");
            break;
        case "franco":
            console.log(n/19.83 + " francos suizos");
            break;
    }
}