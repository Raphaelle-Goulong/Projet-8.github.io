import React, { useState } from 'react'// Importation de React et de useState
import '../sass/Slideshow.scss'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'


function Slideshow({pictures}) {
    // Utilisation de useState pour gérer l'index de la slide actuelle
    const [currentSlide, setCurrentSlide] = useState(0)
    // Fonction pour passer à la slide suivante
    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1))
    }
    // Fonction pour passer à la slide précédente
    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1))
    }

    return (
        <>
            <div className="carousel">
                
                    <>
                        {/* Affichage de l'image de la slide actuelle */}
                        <img src={pictures[currentSlide]} alt="" className="imgAprt-carousel" />

                        {/* Boutons pour passer à la slide précédente et suivante */}
                        <img
                            src={arrowLeft}
                            alt="flèche à gauche"
                            className={`Arrow-left-carousel ${pictures.length === 1 ? 'hide-Arrow' : ''}`}
                            onClick={goToPreviousSlide}
                        />
                        <img
                            src={arrowRight}
                            alt="flèche à droite"
                            className={`Arrow-right-carousel ${pictures.length === 1 ? 'hide-Arrow' : ''}`}
                            onClick={goToNextSlide}
                        />
                    </>
               
                {/* Affichage du numéro de la slide actuelle */}
                <p className="text-carousel">
                    {currentSlide + 1}/{pictures.length}
                </p>
            </div>
        </>
    )
}

export default Slideshow
