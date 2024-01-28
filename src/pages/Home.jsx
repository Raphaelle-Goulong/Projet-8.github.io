import IMG from '../assets/IMG.png'
import '../sass/Home.scss'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import data from '../data.json'
// import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
            <Banner title='Chez vous, partout et ailleurs' image={IMG}/>
                <main className="container">
                    <section className="container__aparts">
                        {/* {data.map((item, index) => ( */}
                            
                            <Cards />
                            
                        {/* ))} */}
                    </section>
                </main>
        </>
    )
    
}

export default Home