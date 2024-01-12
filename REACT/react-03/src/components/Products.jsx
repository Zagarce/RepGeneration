import './Products.css'

const Products = (props) => {
    return (
        <>
      {/*   Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información

        <div className="cards">
            <div className="products--card">
                <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933" height={150} />
                <h3>Fashion</h3>
                <p>Tennis Fitness Running Purple</p>
                <h4>$299</h4>
            </div>
        </div> 
        */}

        {/* Props estrcturados.
        Puedo asignar diferentes propiedades a un div sin tener que generar muchos props, solamente usando la palabra reservada 'props' como parámetro de la función 
        Si quiero modificar varias propiedades puedo mandar a llamar las props de cada elemento como si fueran métodos
        */}

        <div className="cards">
            <div className="products--card">
                <img src={props.img} alt="sneakers" />
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div>
        </div>
        </>
    )
}

export default Products