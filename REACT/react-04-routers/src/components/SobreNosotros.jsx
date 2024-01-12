import {Link} from 'react-router-dom'

const SobreNosotros = () => {
    return (
        <>
        <div>
            <h1>Esta es la página Sobre Nosotros</h1>
            <Link to="/">
                Regresar a la página de Inicio
            </Link>
            <br /><br />
            <Link to="/contacto">
                Ir a la página de Contacto
            </Link>
        </div>
        
        </>
    )
}

export default SobreNosotros