import '../sass/Error.scss'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <>
            <div className="container-error">
                <h1 className="Title-error">404</h1>
                <p className="Text-error">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="Link-error">Retourner sur la page d’accueil</Link>
            </div> 
       
       
        </> 
    )
    
}

export default Error