import './NavBar.css' // Importación del CSS
import IssLogo from '../assets/ISS_logo.svg'

// Crear una función que contenga el marcado para que viva nuestro código
const NavBar = () => {

    const url1 = 'https://www.nasa.gov/international-space-station/';
    const url2 = 'https://www.nasa.gov/mission/apollo-13/';
    const url3 = 'http://open-notify.org/Open-Notify-API/People-In-Space/';

    return (
        <>
        <div className='navbar--container'>
            <div className="navbar--title">
                <a href= {url1} id="link--logo" target='_blank'>
                    <img src={IssLogo} alt="Logo de ISS" />
                </a>
            </div>
            <div className="navbar--links">
                <div className="navbar--link">
                    <a href=''>Home</a>
                </div>
                <div className="navbar--link">
                    <a href="">About</a>
                </div>
                <div className="navbar--link">
                    <a href="">Astros</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar