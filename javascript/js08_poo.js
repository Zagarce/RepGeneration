/* PARADIGMAS DE PROGRAMACIÓN 

    - Programación imperativa : se basa en instrucciones detalladas ejeecutando un flujo o una secuencia determinada
    - Programación basada en eventos : se basa en la gestión y respuesta de eventos
    - Programación declarativa : Explicar lo que queremos obtener
    - Programación orientada a objetos : Toma cierta información o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus características (propiedades o atributos) y sus comportamientos o acciones (métodos)
*/

// Clases : Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objeto
class persona{
    nombre =""
    apellido = ""
    edad = ""
    email = ""
    telefono  = ""

    // OBJETOS
    // Para inicializar un objeto es necesario definir un constructor que tomará los atributos clases = 'molde' objeto = 'gomita' constructor = 'chefsitx' atributos = 'ingredientes' métodos = 'comportamientos'

    constructor(nombre,apellido,edad,email,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad= edad;
        this.email = email;
        this.telefono = telefono;
    }

    comer (){
        console.log("bon apetite");
    } // método comer

    bailar(){
        console.log("Dale hasta el suelo");
    } // metodo bailar
    mostrarInfo(usuario1){
        console.log("Nombre: usuario1 ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Teléfono: ", this.telefono);
    }   
}

let usuario1 = new persona ("Fernanda", "Ramos", 31,"fer@gmail.com","5543908765")
let usuario2 = new persona ("César", "Zaldívar", 26,"cesar@gmail.com","5543906823")
let usuario3 = new persona ("Braulio", "Santiago", 27,"brau@gmail.com","5557908765")
let usuario4 = new persona ("Eveida", "Palos", 23,"eve@gmail.com","5543984765")
let usuario5 = new persona ("Pedro", "Roldán", 28,"peter@gmail.com","5542988765")


console.log(usuario2) // imprimimos objeto completo
console.log(usuario2.email) // Como son objetos y no arreglos, cada elemento se llama con la notación  usuarioN.atributo

usuario1.bailar(); // Invocamos el método
usuario2.mostrarInfo();
console.log(usuario3.telefono,usuario5.apellido)

// Pilares de la programación orientada a objetos

/*  - Herencia
    - Polimorfismo 
    - Encapsulamiento
    - Abstracción 
*/

// Abstracción no es nada más que traer objetos del mundo real y poder aplicarlos a la programacipon mediante clases, métodos, constructores y objetos


/*             * * * HERENCIA* * *
nos permite heredar a clases inferiores para poder optmizar el programa  
*/

class arrendador extends persona { // extends : declara la clase padre de la subclase
    capacidad=0;
    costo= 0
    nombreLugar = ""

    constructor(nombre,apellido,edad,email,telefono,capacidad,costo,tres) {
        super(nombre, apellido, edad, email, telefono)
        this.capacidad = capacidad
        this.costo = costo
        this.nombreLugar = tres
    }

    mostrarInfo(){
        console.log("Capacidad: ", this.capacidad)
        console.log("Costo: ", this.costo)
        console.log("Nombre del lugar: ", this.nombreLugar)
    }
}

let arrendador1 = new arrendador("Rocio", "Hernandez", 29, "rocio@gmail.com", "5564734389", 100, 5000, "Salón G")

console.log(arrendador1)
console.log(arrendador1.costo)
arrendador1.mostrarInfo() // por ser objeto arrendador, solo muestra los atributos definidos en esta subclase

/* Otro Ejemplo

class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log('Miau');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.sonido();  
  gato.sonido(); */


/*          * * *  POLIMOFRISMO * * *
Tener objetos de diferentes tipos que pueden ser manipulados en común.
Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento.
*/
class producto {
    marca = null
    precio = null

    constructor(marca, precio) {
        this.marca = marca
        this.precio = precio
    }

    mostrarDescripcion() {
        console.log("Marca: ", this.marca)
        console.log("Precio: ", this.precio)
    }
}
let producto1 = new producto("Nike", 3000) 

producto1.mostrarDescripcion()


/*          * * * ENCAPSULAMIENTO * * *  
    Oculta la implementación interna de un objeto y solo muestra los datos necesarios  */

class Usuario {
    #contraseña = "esta es mi contraseña";

    constructor(userName,correo,contraseña){
        this.userName = userName
        this.correo = correo
        this.#contraseña = contraseña
    }
    verificarContraseña(contraseña){
        return this.#contraseña === contraseña
    }
}


/*         * * * OBJETOS JSON * * * 
 Los objetos de tipo json es un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM), y nos brindan una mejor comunicacion entre el cliente y el servidor. esto gracias a que son más flexibles y generalmente se ejecutan mediante fetch.  
*/

let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gmail.com",
    "telefono": "5574980693",
}
console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gmail.com",
    telefono: "5574980693",
}
console.log(objetoLiteral);

/*          * * * Principios Solid * * *
    1. Principio de responsabilidad única (Single Responsability Principle SRP) : Una clase debe tener asignada una tarea o responsabilidad específica y esta no debería cambiar 

    2. Principio abierto/cerrado (Open / Closed Principle OCP) : Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma.

    3. Principios de sustitución de Liskov (Liskov Sustitution Principle LSP) : una clase hijo puede sustituir objetos de una clase padre 

    4. Principio de segregacipon de interfaces (Interface Segregation Principle ISP) : delimita los métodos que necesito y deja fuera los innecesarios (declarandolos en el constructor)

    5. Principio de inversión de dependencias (Dependency Inversion Principle DIP) : Los módulos de alto nivel no deben depender de módulos de bajo nivel. Además, las abstracciones no deben depender de detalles. Los detalles deben depender de abstracciones.
*/

/* Prgrama que conste de una clase llamada alumno que tenga como atributos nombre y calificación. Definir los métodos para incializar sus atributos  (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificación es aprobatoria o no
    
    Atributos
        Nombre
        Calificacióon
    Métodos
        imprimirCalificacion
        evaluacion
    La calificación aprobatoria es de 6
    if para evaluar la calificación 
*/
class alumno {
    nombre = ""
    calificacion = 0

    constructor(nombre,calificacion){
        this.nombre = nombre
        this.calificacion = calificacion
    }
    boleta(){
        console.log("Nombre: ", this.nombre)
        if(this.calificacion<6){
            console.log(`Calificación: ${this.calificacion}. No aprobatoria`)
        } else
        console.log("Calificacion: ", this.calificacion)
    }
}

let alumno1 = new alumno ("Jorge", 10)
let alumno2 = new alumno ("María", 6)
let alumno3 = new alumno ("José", 5.99)

alumno1.boleta()
alumno2.boleta()
alumno3.boleta()

