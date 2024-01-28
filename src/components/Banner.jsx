import '../sass/Banner.scss'
import IMG from '../assets/IMG.png'

function Banner({ title, image }) {
    return (
        <header className="Banner">
            <div className="main-container">
                <div className="img-home">
                    {/* /* condition si je reçois la props j'affiche la balise sinon pas */}
                    {/* <li className="item">
                            
                        </li> */}
                    <img src={image} alt="Banner Images" className="banner-img" />
                    {title ?  
                    <h1 className="text-banner">{title}</h1> 
                     : ""}
                   

                </div>
            </div>
        </header>
    )
}

export default Banner
