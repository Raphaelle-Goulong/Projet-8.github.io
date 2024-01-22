import '../sass/Banner.scss'
import IMG from '../assets/IMG.png'



function Banner({ title,image  }) {
    return <header className="Banner">
                <div className="main-container">
                    <div className="img-home">
                        {/* /* condition */ }
                        {/* <li className="item">
                            {isPacked ? name + ' ✔' : name}
                        </li> */}
                        <img src={image} alt="Banner Images" className="banner-img" />
                        <p className="text-banner">{title}</p>
                    </div>
                </div>
            </header>
}

export default Banner