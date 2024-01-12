# React Router

## Instalación
Ejecutar el comando npm para instalar React Router
```sh
npm i react-router-dom
```
### Implementación
1. Importamos React Router en `main.jsx` para que se encuentre disponible en cuaqluier parte de la aplicación.
Para ello, importamos el componenete 
```jsx
import { BrowserRouter } from react-router-dom
```

2. Modificar el componente `<App/>` y envolverlo con los componentes `<BrowserRouter> </BrowserRouter>` quedando de la siguiente manera:
```js
import { BrowserRouter} from 'react-router-dom'
<BrowserRouter>
    <App />
</BrowserRouter>
```

3. Crear componentes `Inicio.sjx`, `Contacto.sjx`, `SobreNosotros.sjx`

4. Necesitamos importar las funcionalidadesq ue emplearemos `Route` y `Routes` dentro del archivo `App.jsx`
```js
import { Routes, Route } from 'react-router-dom'
```

5. Mofiicamos `App.jsx`  para implementar Routes y Route.

6. Para evitar etiquetas de anclaje (<a></a>) vamos a ocupar una funcionalidad de react router llamada `{link}` 