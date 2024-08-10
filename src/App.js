import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Donation from './Components/Donation';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
