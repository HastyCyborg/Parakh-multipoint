import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import ParakhHeights from './components/ProjPages/ParakhHeights';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/parakhheights' element={<ParakhHeights/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
