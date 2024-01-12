import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio.jsx'
import Nosotros from './components/SobreNosotros.jsx'
import Contacto from './components/Contacto.jsx'

// Routes : Actúa como contenedor padre de todas las rutas individuales que se crearán en la aplicación
 /* Route : es la ruta 'hija' de cada componente. Recibe dos atributos:  
    1. Path : especifica la ruta (URL) a seguir
    2. Element: especifica el componente que se renderiza
 */
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Inicio />}/>
      <Route path='about-us' element={<Nosotros />}/>
      <Route path='contacto' element={<Contacto />}/>
    </Routes>
    </>
  )
}

export default App
