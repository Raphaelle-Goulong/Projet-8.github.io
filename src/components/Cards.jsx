import '../sass/Cards.scss'
import data from '../data.json'

import { Link } from 'react-router-dom'// Importation de Link depuis react-router-dom

function Cards() {
    return (
        <>
        {/* Parcours des données pour afficher chaque carte d'appartement */}
            {data.map((item, index) => (
                // Utilisation de Link pour créer un lien vers la page de l'appartement correspondant
                <Link to={`/appartement/${item.id}`} key={index} className="Link-apart">
                    {/* Chaque carte d'appartement est un article avec une image et un titre */}
                    <article className="article-apart">
                        {/* Affichage de l'image de couverture de l'appartement */}
                        <img src={item.cover} alt="Images appartements" className="img-apart" />
                        {/* Affichage du titre de l'appartement */}
                        <p className="text-apart">{item.title} - Titre de la location</p>
                    </article>
                </Link>
            ))}
        </>
    )
}

export default Cards
