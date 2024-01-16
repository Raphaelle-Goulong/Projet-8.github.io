import '../sass/Banner.scss'
import IMG from '../assets/IMG.png'



function Banner() {
    return <header className="Banner">
                <main className="main-container">
                    <div className="img-home">
                        <img src={IMG} alt="Banner Images" className="banner-img" />
                        <p className="text-banner">Chez vous, partout et ailleurs</p>
                    </div>
                </main>
            </header>
}

export default Banner