## Axios API 
1. Revisar el sitio oficial de Axios [https://axios-http.com/es/]
2. Instalar axios desde npm con el comando
```sh 
npm install axios
```
3. Ejecutar el proyecto de React en el navegador con el comando
```sh 
npm run dev
```
link [http://localhost:5173/]


## Manejando axios 
1. En el archivo App.js, importar axios
```JavaScript
import axios from 'axios'
```
2. Crear la función `getUsers` de tipo async-await para consumir una API
3. Indicamos el evento en línea para el primer botón con el tipo de evento y la función a ejecutar 
```JavaScript
<button onClick={getUsers}>
```
4. Crear la función `postUser` de tipo async-await para enviar datos a una API.
5. Indicamos el evento en línea para el segundo botón, con el tipo de evento y la función a ejecutar 
```javascript
<button onClick={postUser}>
```