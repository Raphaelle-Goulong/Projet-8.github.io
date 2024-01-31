import imgAbout from '../assets/imgAbout.png'
import '../sass/About.scss'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

function About({ title }) {
    return (
        <>
            <Banner image={imgAbout} />

            <section className="selection-options">
                <Collapse title='Fiabilité'/>
                <Collapse title='Respect'/>
                <Collapse title='Service'/>
                <Collapse title='Sécurité'/>
            </section>
        </>
    )
}

export default About
