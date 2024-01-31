
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss';
import Banner from './components/Banner'
import Footer from './components/Footer'
import data from './data.json'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Header from './components/Header'
import Appartement from './pages/Appartement'
import Slideshow from './components/Slideshow'
import Collapse from './components/Collapse'
import Cards from './components/Cards'

function App() {
  console.log(data)
  return (
    
    <>
      <Header />
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appartement/:id" element={<Appartement />} />
          <Route path="*" element={<Error />} />
        </Routes>
    
      <Footer />

    </>
  );
}





export default App;
