import './Main.css'
import GenMxLogo from '../assets/generation_logo.jpg'

const Main = () => {
    return (
        <>
        <div className="main--container">
            <div className="main--head">
                <a href="https://mexico.generation.org">
                    <img src={GenMxLogo} className='main--logo' alt='Logo Gen Mex' />
                </a>
                <h1>React + Vite</h1>
                <h2>Astros API</h2>
            </div>
        </div>
        </>
    )
}

export default Main