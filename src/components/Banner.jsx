import '../sass/Banner.scss'

function Banner({ title, image }) {
    // Le composant prend deux propriétés en entrée : title et image
    return (
        <header className="Banner">
            <div className="main-container">
                <div className="img-home">
                    <img src={image} alt="Banner Images" className="banner-img" />
                    {/* L'image de la bannière est affichée avec la classe "banner-img" et une alternative */}
                    {/* Si un titre est fourni, il est affiché dans une balise h1 avec la classe "text-banner" */}
                    {title ? <h1 className="text-banner">{title}</h1> : ''}
                </div>
            </div>
        </header>
    )
}

export default Banner
