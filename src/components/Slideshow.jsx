import imgAbout from '../assets/imgAbout.png'
import React, { useState } from 'react'
import '../sass/Slideshow.scss'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'
import data from '../data.json'

function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0)
    // pour que la  slide qui suit
    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1))
    }
    // pour que la  slide qui précedente
    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1))
    }

    return (
        <>
            <div className="carousel">
                <>
                    <img src={data[currentSlide].pictures} alt="Image du carrousel" className="imgAprt-carousel"  />
                    
                </>

                <img
                    src={arrowLeft}
                    alt="flèche à gauche"
                    className="Arrow-left-carousel"
                    onClick={goToPreviousSlide}
                />
                <img
                    src={arrowRight}
                    alt="flèche à droite"
                    className="Arrow-right-carousel"
                    onClick={goToNextSlide}
                />
                <p className="text-carousel">
                    {currentSlide + 1}/{data.length}
                </p>
            </div>
        </>
    )
}

export default Slideshow
