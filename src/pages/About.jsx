import imgAbout from '../assets/imgAbout.png'
import '../sass/About.scss'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

function About() {
    return (
        <>
            <Banner image={imgAbout} />

            <section className="selection-options">
                <Collapse />
                <Collapse />
                <Collapse />
                <Collapse />
            </section>
        </>
    )
}

export default About
