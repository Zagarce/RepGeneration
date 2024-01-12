import './App.css'
import NavBar from './components/NavBar.jsx'
import Main from './components/Main.jsx'
import Button from './components/Button.jsx'
import Products from './components/Products.jsx'

function App() {

  return (
    <>
    < NavBar />
    < Main />
    < Button label='Traer información'/>
    < Button label='Enviar información'/>
    < Products 
    img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
    name="Fashion"
    description="Tennis Fitness Running Purple"
    price="$1958 " /> 

    < Products
    img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
    name="Dark"
    description="Tennis Dark Running"
    price="$2296" />

    < Products 
    img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
    name="Beige"
    description="Casual tennis"
    price="$1999" />

    </>
  )
}

export default App