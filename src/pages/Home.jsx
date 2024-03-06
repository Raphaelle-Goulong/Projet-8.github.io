import IMG from '../assets/IMG.png'
import '../sass/Home.scss'
import Banner from '../components/Banner'
import Cards from '../components/Cards'

function Home() {
    return (
        <>
        {/* Utilisation du composant Banner avec un titre et une image */}
            <Banner title="Chez vous, partout et ailleurs" image={IMG} />
            {/* Conteneur principal de la page d'accueil */}
            <main className="container">
                {/* Section contenant les cartes d'appartements */}
                <section className="container__aparts">
                     {/* Utilisation du composant Cards */}
                    <Cards />
                </section>
            </main>
        </>
    )
}

// Exportation du composant Home
export default Home
