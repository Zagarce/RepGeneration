        // Programación sincrónica

function two() {
    console.log("dos");
}
function one() {
    console.log("uno");
    two();
    console.log("tres");
}
one();
console.log("*****************");

        // Programación asíncrona
// setTimeout : lo recibe una función anónima y establece un tiempo (en ms) de ejecución para cumplir con la condición de asincrnismo

const twoAsync = () => {
    setTimeout( () =>{
        console.log("dos Async");
    }, 2000 ); // tiempo en milisegundos
}

const oneAsync = () => {
    setTimeout(function (){
        console.log("uno Async");
    }, 4000);
    twoAsync();
    console.log("tres Async")
}
//oneAsync();

// *****************************************************
// *****************************************************
// *****************************************************

        /* Trabajando con promesas mediante Fetch API */

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
// si se cumple la promesa, vamos a traer los datos de la API y se convertirá en tipo json para poder mostrarlos en consola
    .then(data => data.json() )
    .then(data => {
        console.log(data); // Se muestran todos los usuarios de la API
        console.log(data[0].name); // Se muestra solo el del índice 0, llamando al método 'name'
    })
.catch(error => console.error("¡Ups!, algo salió mal", error));

        // Usamos fetch para mostrar en navegador
// Primero se crean variables que referencian a las id del botón y del div en la primera section 
const botonInfo = document.querySelector("#btn-mensaje")
const info = document.querySelector("#mensaje")

// Variable para guardar la información que se va a traer desde la API: Debe ser de tipo null
let post = null;

// *****************************************************
// *****************************************************
// *****************************************************

// Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/6")
        .then(response => response.json())
        .then(response => {
            post = response; // Guardo los datos de response en la variable de tipo null, para que modifique el dato
            //Mandamos a llavar a la variable desde la función (aún por hacerla)
            mostrarDatos(post); // con la funcion ya definida abajo, la llamamos para mostrar los datos de la API 
        })
        .catch(error => console.error("¡Problemas!", error))
})

// Función que me permita manipular la variable de tipo null
// Quiero traer name, username, email, phone del user de la API
const mostrarDatos = (post) => {
    //Creamos nodos
    const name = document.createElement("h2");
    const userName = document.createElement("h3")
    const email = document.createElement("p")
    const phone = document.createElement("p")

    // Ponerlos en el HTML (innerHTML) 
        // el post.' ' se define a partir de los nombres mostrados en la API
    name.innerHTML = post.name
    userName.innerHTML = post.username
    email.innerHTML = post.email
    phone.innerHTML = post.phone

    // Hacer que aparezcan en el navegador
    info.appendChild(name)
    info.appendChild(userName)
    info.appendChild(email)
    info.appendChild(phone)
}

// *****************************************************
// *****************************************************
// *****************************************************

    // Usando fetch para mostrar en navegador (Mostrar productos)

const botonProductos = document.querySelector("#btn-store")
const tienda = document.querySelector("#store")
let productos = null

botonProductos.addEventListener("click", () =>{
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(response => {
        productos = response
    // Función por definir para llamar datos
    mostrarProductos(productos);
    })
    .catch(error => console.error("¡Cuidado!", error))
})

// Función para crear, agregar y mostrar elementos en el DOM
const mostrarProductos = (productos) => {

    // El método map toma el array (objeto en JS) y crea nuevos arreglos que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach
    productos.map((productos) => {
    // Consultamos la url de la API, mandamos a llamar las llaves de title, price, description, category, image.
    const imagen = document.createElement("img");
    const titulo = document.createElement("h2");
    const precio = document.createElement("h3");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr");


// Enviar a HTML con innerHTML
imagen.src = productos.image;
    imagen.width = 200;
titulo.innerHTML = productos.title;
precio.innerHTML = productos.price;
descripcion.innerHTML = productos.description;
categoria.innerHTML = productos.category;

// Mostrarlos en navegador al agregarlos a su padre
tienda.appendChild(imagen);
tienda.appendChild(titulo);
tienda.appendChild(precio);
tienda.appendChild(descripcion);
tienda.appendChild(categoria);
tienda.appendChild(separador);
})
}


// *****************************************************
// ************Método POST utilizando fetch********************
// *****************************************************

    //Método POST utilizando fetch, que nos permite crear recursos en la API 
fetch("https://jsonplaceholder.typicode.com/posts", {
    // indicamos que es un método de tipo POST
    method: "POST",
    // creo el body de mi nuevo objeto, siguiendo las mismas llaves de la API existente (userId, title, body)
    body: JSON.stringify({
        userId: 1986,
        title: "Sueñan los androides con ovejas eléctricas?",
        body: "Author: Philippe K. Dick"
    }),
    // Definir headers 
    headers:{
        "Content-type" : "application/json; charset=UTF-8"
    }
}) // Fin del fetch / Inicio de las promesas
.catch(error => console.error("Error", error))

.then(response => response.json())
.then(response => console.log(response))


// *****************************************************
// *******Programación asíncrona (promise)**************
// *****************************************************

// Función flecha de tipo async-wait 
// Indicamos que es una función asíncrona con la palabra reservada async antes de los parámetros
const getUser = async() => {
    // para que se cumpla la promesa, no utiliza then, sino try. 
    // Para errores, se sigue utilizando catch
    try{
        // Ponemos un retardo a la función para que se ejecute de manera asíncrona. Tenemos que crear una nueva promesa, que recibe un setTimeout
        await new Promise(resolve => setTimeout(resolve, 2000))
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4") 
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error("Error inexplicable",error)
    }
}
getUser();

// *****************************************************
// **************************Local Storage**************
// *****************************************************

// Nos permite crear, modificar, eliminar, guardar objetos de JS de manera local (almacenados en el propio equipo)
// Crear un objeto de JS con sus llaves y valores

const user = [{
    id: 1,
    nombre : "César",
    apellido : "Zaldivar",
    email: "cesar@gmail.com",
    posicion: "alumno",
    empresa: "Generation"
},
{
    id: 2,
    nombre : "Diana",
    apellido : "Alvarez",
    email: "diana@gmail.com",
    posicion: "java dep",
    empresa: "Cofepris"
}]
// Convertir el objeto creado a notación JSON y almacenarlo en el localStorage
localStorage.setItem("usuario", JSON.stringify(user));

// Traer el objeto desde el localStorage
const users = JSON.parse(localStorage.getItem("usuario"))
console.log(users)
console.log(user[1].posicion, user[1].empresa)

// sesionStorage