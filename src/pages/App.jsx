import { Route, Routes } from 'react-router-dom'
import '../sass/App.scss'
import Footer from '../components/Footer'
import data from '../data.json'
import Home from './Home'
import About from './About'
import Error from './Error'
import Header from '../components/Header'
import Appartement from './Appartement'

function App() {
    console.log(data)
    return (
        <>
        {/* Utilisation du composant Header */}
            <Header />
          {/* Utilisation du composant Routes pour gérer les différentes routes de l'application */}
            <Routes>
              {/* Définition des routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/appartement/:id" element={<Appartement />} />
                <Route path="*" element={<Error />} />
            </Routes>
            {/* Utilisation du composant Footer */}
            <Footer />
        </>
    )
}

export default App
