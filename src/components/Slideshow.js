import imgAbout from '../assets/imgAbout.png'
import '../sass/Slideshow.scss'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'
import data from '../data.json'

function Slideshow() {
    return (
        <>
            <div className="carousel">
                {data.map((img, index) => (
                    <>
                    <img src="" alt="" className="imgAprt-carousel" key={index} />
                    
                    </>
                    
                ))}
                <img src={arrowLeft} alt="flèche à gauche" className="Arrow-left-carousel" />
                    <img src={arrowRight} alt="flèche à droite" className="Arrow-right-carousel" />
                    <p className="text-carousel">1/4</p>
            </div>
        </>
    )
}

export default Slideshow
