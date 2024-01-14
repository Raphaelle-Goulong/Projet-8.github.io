
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss';
import Banner from './components/Banner'
import Footer from './components/Footer'
import data from './data.json'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

function App() {
  console.log(data)
  return (
    
    <>
    <Header />
    
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
   
    <Footer />

  </>
  );
}





export default App;
