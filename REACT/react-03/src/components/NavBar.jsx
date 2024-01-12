import './NavBar.css' // Importación del CSS

// Crear una función que contenga el marcado para que viva nuestro código
const NavBar = () => {
    return (
        <> {/* Fragmento */}
        <div className='navbar--container'>
            <div className="navbar--title">
                <h1>GenMex-35</h1>
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