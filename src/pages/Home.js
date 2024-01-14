import IMG from '../assets/IMG.png'
import '../sass/Home.scss'
import Banner from '../components/Banner'
function Home() {
    return (
        <>
        <Banner />
        <main className="container">
            <section className="container__aparts">
               <article className="article-apart">
                    <p className="text-apart">titre de la location</p>
               </article>
                
                <article className="article-apart">
                    <p className="text-apart">titre de la location</p>
                </article>
                <article className="article-apart">
                    <p className="text-apart">titre de la location</p>
                </article>
                <article className="article-apart">
                    <p className="text-apart">titre de la location</p>
                </article>
                <article className="article-apart">
                    <p className="text-apart">titre de la location</p>
                </article> 

                
            </section>
            
        </main>
        </>
    )
    
}

export default Home