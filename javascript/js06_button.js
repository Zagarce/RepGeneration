// Botón para ocultar y mostrar elementos

const container = document.getElementById("container-div");
const button=document.getElementById("card-btn");

//Agregamos estilos al container para visibilidad
container.style.visibility = "visible"

// Manejando elementos para ocultar el container desde el botón 
button.addEventListener("click", () =>{
    container.style.visibility = (container.style.visibility === "visible") ? "hidden" : "visible";
})