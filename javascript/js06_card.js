// Ingresar y actualizar datos

/* Para manipular la información de un usuario, necesito crear un perfil medainte un objeto de JS */

const user = {
    username: 'CEsar',
    age:26,
    email:'ce.zg@gmail.com',
    favfilms:['2001', 'El Padrino 2', 'Mr. Nobody', 'Mean Girls', 'Shrek']
}

// Crear una función que me permita ingresar el objeto del perfil en el nodo padre
const createUser = (user) =>{
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    
    /* Mostrar elementos de lista en forma de lista.
    Utiizamos un ciclo forEach para recorrer todo el array y traer cada elemento a la lista */
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach(film => {
        const li=document.createElement("li")
        li.textContent=film;
        ul.appendChild(li);
    });
    //Modicar estilos de la ul para quitar viñetas
    ul.style.listStyleType="none";
    ul.style.padding="0";
    ul.style.color="#FAE03C";

     /* Mostrar elementos de lista en forma de fila, que ahora no nos sirve porque es una lista desordenada
     document.getElementById("fav-films").textContent = user.favfilms; 
     */
}
//Invocamos la función
createUser(user);

/* Eventos para actualizar el username mediante el input y el botón */

const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName=document.getElementById("username");

profileBtn.addEventListener("click", () =>{
    userName.textContent=inputName.value;
});