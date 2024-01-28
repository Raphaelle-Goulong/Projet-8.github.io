import { Link, useLocation } from 'react-router-dom'
 import logo from '../assets/logo.png'
 import '../sass/Header.scss'



function Header() { 
 // Utilisation du hook useLocation pour obtenir l'objet location de React Router
    const location = useLocation();

    return ( 
        <div className="Nav-container">
            <nav className="navbar">
                <img src={logo} alt='Logo de Kasa' className='navbar__Kasa-logo' />
                    <div className="navbar__links-nav">
                        <Link to="/"className={`navLink ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
                        <Link to="/about"className={`navLink ${location.pathname === '/about' ? 'active' : ''}`}>A Propos</Link>
                    </div>
            </nav>
        </div>
            )
    }
    

export default Header