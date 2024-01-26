function palabras (string, array) {
    // Definimos el array contendrá palabras mas largas
    const palabrasMasLargas = []

    // Ciclo forEach para evaluar si son mas largas y agregarlas al array 
    array.forEach((palabra) => {
        if(palabra.length > string.length){
            palabrasMasLargas.push(palabra)
        }
    })
    // Devuelve un array con las palabras mas largas
    return palabrasMasLargas;
}

// Ejemplo prueba
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
console.log(palabras('bocina', myArray))

function mostrarPalabras (array){
    
}