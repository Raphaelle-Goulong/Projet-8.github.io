import IMG from '../assets/IMG.png'
import '../sass/Home.scss'
import Banner from '../components/Banner'
import data from '../data.json'

function Home() {
    return (
        <>
            <Banner />
            <main className="container">
                <section className="container__aparts">
                    {data.map((item, index) => (
                        <article key={index} className="article-apart">
                            <img src={item.cover} alt="Images appartements" className="img-apart"/>
                            <p className="text-apart">{item.title} - Titre de la location</p>
                        </article>
                    ))}
                    

                    
                </section>
                
            </main>
        </>
    )
    
}

export default Home