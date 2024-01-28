import logo from '../assets/LogoFooter.png'
import '../sass/Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt='Logo de Kasa en blanc' className='footer__KasaLogo-Ft' />
            <p className='footer__Texte'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer