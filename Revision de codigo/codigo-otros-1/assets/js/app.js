const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); /* Se corrige el id por la clase en el html */
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { /* Se corrige la funcion cambiandola a async, y se agregan try y catch para el maenejo de errores */
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Agregamos la variable data, que accede al contenido de la API
    console.log(data);
    $n.textContent = `${data.name}`; 
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; /* Se corrige el nombre de la variable $n */
}

displayUser('stolinski').catch(handleError);
