/* Tipos de datos
        - String : cadenas de texto
        - Number : numéricos
        - Booleans : booleanos true or false
        - Null : nulos
        - Undefined : indefinidos
        - Objects : objetos 
        - Objects : arrays
*/ 

/* 
console.log(); Nos permite visualizar en consola del navegador el código de JS 
console.warn(); Muestra un mensaje de error
console.table(); 
 */

let firstName; 
firstName='César';
let lastName = 'Zaldívar';

console.log(firstName+ "" + lastName);
console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName);

/* ECMAScript 6 (ES6). Interpretación  
        - backticks `` permite dar saltos de linea en concatenaciones
        - para variables invocamos ${variable}
        - Texto para string
*/

let age = 26; 
console.log(`Mi nombre es ${firstName},
    mi apellido es ${lastName}
    y tengo ${age} años`); 

//console.warn();
/* console.warn(`Precaución, no es buena práctica dejar sin punto y coma`);
//console.error();
console.error(`Status 404: Failed`) */

/*  *** ARRAY ***
    - Es un arreglo de datos que pertenence a JS en el cual se almacena una colección de elementos de manera ordenada.
    - Los arrays se pueden manipular mediante métodos específicos
    - Los elementos de un array se contabilizan como índices empezando por índice 0
    - Un array posee n cantidad de elementos
    - Se declaran como variables, segudo del signo igual y corchetes. Dentro de cada corcehte vie un elemento con un tipo de dato. 
*/

let arreglo1 = []; //Array vacío 
console.log(`Array vacio ${arreglo1}`);
// Los elementos de un array se separan mediante comas
let cars = ["Volkswagen", "BMW", "Mazda", "Kia"]; //Array de String 
console.log(cars);

//La longitud e índice son diferentes. La longitud (lenght) es el número de elementos y el índice corresponde a cada elemento a partir del 0 

console.log(typeof(cars));

let salariesMxn = [15000,12000,18000,12000,54000,5000,3200,240000];
console.log(salariesMxn);
console.log(salariesMxn.length);


/* *** OBJECTOS *** 
    - Los objetos son tipos de datos en JS, con estructura definida que nos permite almacenar informacióon meidante llaves (claves) y valores. 
    - Su sintaxis es la siguiente: 
        const object = {
            clave1: valores1 (dato1),
            clave2: valor2 (dato2)
        }
    - Los objetos pueden almacenar diferentes tipos de valores  
 */

    const employee = {
        firstName: "Rey David",
        lastName: "Martinez",
        age: 29, 
        country: "México",
    }

    console.log(employee);
    //Mostrando mi array como table
    console.table(cars);
    //Mostrando mi objeto como tabla
    console.table(employee)



