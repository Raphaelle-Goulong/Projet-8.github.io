import imgAbout from '../assets/imgAbout.png'
import '../sass/About.scss'
import Banner from '../components/Banner'

function About() {
    return (
        <>
            <Banner image={imgAbout } />
            <section className="selection-options">
                <select className="options-selects">
                    <option value="" key="">Test</option>
                    <option value="" key="">Test2</option>
                    <option value="" key="">Test3</option>
                    <option value="" key="">Test4</option>
                </select>
            </section>
            
            
        </>
    )
    
}

export default About