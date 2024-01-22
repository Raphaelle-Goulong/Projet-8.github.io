import '../sass/Cards.scss'
import data from '../data.json'
import { Link } from 'react-router-dom'

function Cards() {

    return (
        <>

            {data.map((item, index) => (
                <Link to={`/appartement${item.id}`} key={index} className="Link-apart">
                    <article  className="article-apart">
                        <img src={item.cover} alt="Images appartements" className="img-apart"/>
                        <p className="text-apart">{item.title} - Titre de la location</p>
                    </article>
                </Link>
            ))}
            
        </>
    )
    
}

export default Cards