/* # Functions in JavaScript
Repo containing excercises to practice functions in JS. */

/*
        ## Exercises
        **1. Convert Minutes into Seconds.**

        Write a function that takes an integer minutes and converts it to seconds.

        *Examples*

            convert(5) ➞ 300
            convert(3) ➞ 180
            convert(2) ➞ 120
*/

function min_sec(minutos){
    return minutos*60;
    
}
let resultado = min_sec(6);
console.log(`El resultado son ${resultado} segundos`);   


/* **2. Return the Next Number from the Integer Passed.**

Create a function that takes a number as an argument, increments the number by +1 and returns the result.

*Examples*

    addition(0) ➞ 1
    addition(9) ➞ 10
    addition(-3) ➞ -2 */

function suma1(numero){
    return numero+1;
}
let suma_1=suma1(6)
console.log(`El resultado es ${suma_1}`)

/* **3. Area of a Triangle.**

Write a function that takes the base and height of a triangle and return its area.

*Examples*

    triArea(3, 2) ➞ 3
    triArea(7, 4) ➞ 14
    triArea(10, 10) ➞ 50 */

const area_triang = (b,h) => {
    return b*h/2;
}
let area_triangulo = area_triang(5,2)
console.log(`El área del triángulo es ${area_triangulo}`)

/* **4. Convert Age to Days.**

Create a function that takes the age in years and returns the age in days.

*Examples*

    calcAge(65) ➞ 23725
    calcAge(0) ➞ 0
    calcAge(20) ➞ 7300 */

function years_days (years){
    return years*365+years/4;
}
let dias = years_days(26);
console.log(`Tu edad en días son ${dias}`);   

/* **5. Power Calculator.**

Create a function that takes voltage and current and returns the calculated power.

*Examples*

    circuitPower(230, 10) ➞ 2300
    circuitPower(110, 3) ➞ 330
    circuitPower(480, 20) ➞ 9600 */

const potenc = (v,i) => { 
    return v*i
}
let potencia = potenc(5,10)
console.log(`La potencia es ${potencia} watts`); 

/* **6. Return Something to Me!.**

Write a function that returns the string "something" joined with a space " " and the given argument a.

*Examples*

    giveMeSomething("is better than nothing") ➞ "something is better than nothing"
    giveMeSomething("Bob Jane") ➞ "something Bob Jane"
    giveMeSomething("something") ➞ "something something" */

function dameAlgo (something){
    return "Somethinng " + something;
}
let texto = dameAlgo('in the way she knows');
console.log(`${texto}`);


    /* **7. Sum of Polygon Angles.**

Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

*Examples*

    sumPolygon(3) ➞ 180
    sumPolygon(4) ➞ 360
    sumPolygon(6) ➞ 720 */

sumPolygon(8/* prompt("Ingresa el número de lados de tu polígono") */);
function sumPolygon(lados){
    let suma = (lados-2)*180
    return console.log(suma + "°")
}

/* **8. Convert Hours and Minutes into Seconds.**

Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

*Examples*

    convert(1, 3) ➞ 3780
    convert(2, 0) ➞ 7200
    convert(0, 0) ➞ 0
 */

//HMtoSecs(prompt("digita horas"),prompt("digita minutos"));
HMtoSecs(5,2)
function HMtoSecs (h,m){
     let secs = h*3600 + m*60
     return console.log(`${h} horas, ${m} minutos -> ${secs} segundos`);
}
