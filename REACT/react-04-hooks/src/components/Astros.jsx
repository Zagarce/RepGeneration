import { useEffect , useState} from 'react'
import './Astros.css'
import Astro from './Astro.jsx'

// MAndar a llamar la API, utiizando Hooks (useState y useEffect)
// Función para agregar la información de la API Astros dentro de las cards
const Astros = () => {
   
    //Definir la URL de la API
    const ASTROS_URL = 'http://api.open-notify.org/astros.json'
    // Implementando useState
    const [astros, setAstros] = useState([])
    
    // Implementando useEffect
    useEffect (() =>{
        fetchAstros() // Hoisting de una función que voy a definir
    }, []);

    // Crear función fetch para conectarse a la API
    const fetchAstros = () => {
        fetch(ASTROS_URL)
            .then(response => response.json())
            .then(data => setAstros(data.people)) // Para que la informacióon viva dentro del componente actualizado, traigo setAstros y le paso os datos de `people` de la API
            .catch(error => console.error(error))
    }

    console.log(astros) // Vive en consola del navegador

    // Enviar la información de la API a las cards utilizando .map sobre el array `astros`

    return (
        <>
            {
                // astro funciona como los elementos que se recorren en el array `astros` y .map recibe dichos elementos, más una función de tipo callback 
                astros.map((astro, index) => (
                    // Exporto el componente Astro
                    /* Crear una llave única para cada elemento del array (key)
                    Desestrcuturar el array para que cada elemento reciba los props definidos dentro de Astro ({name, craft}) */
                    <Astro key={index} {...astro} />
                ))
            }
        </>
    )
}

export default Astros