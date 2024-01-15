import { Link } from 'react-router-dom'
 import logo from '../assets/logo.png'
 import '../sass/Header.scss'


function Header() {
    return ( 
        <div className="Nav-container">
            <nav className="navbar">
                <img src={logo} alt='Logo de Kasa' className='navbar__Kasa-logo' />
                    <div className="navbar__links-nav">
                        <Link to="/"className="link-nav">Accueil</Link>
                        <Link to="/about"className="link-nav">A Propos</Link>
                    </div>
            </nav>
        </div>
            )
    }
    

export default Header