import logo from '../assets/LogoFooter.png'
import '../sass/Footer.scss'// Importation des styles Sass pour le composant

function Footer() {
    return (
        <footer className="footer">
            {/* Affichage du logo de Kasa */}
            <img src={logo} alt='Logo de Kasa en blanc' className='footer__KasaLogo-Ft' />
            <p className='footer__Texte'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer