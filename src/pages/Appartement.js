import '../sass/Appartement.scss'
import data from '../data.json'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'

function Appartement() {
    return (
        <>
            <div className="Container-carousel">
                <div className="carousel">
                    <img src="" alt="" />
                    <img src={arrowLeft} alt="" />
                    <img src={arrowRight} alt="" />
                    <p>1/4</p>
                </div>
            </div>
        </>
    )
    
}

export default Appartement