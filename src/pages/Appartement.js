import '../sass/Appartement.scss'
import data from '../data.json'
import Slideshow from '../components/Slideshow'

function Appartement() {
    return (
        <>
            <div className="Container-carousel">
                <Slideshow />
            </div>
        </>
    )
}

export default Appartement
