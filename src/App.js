import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Donate from './Components/Donate';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App()  {
  return (
    <div className='app'>
      <NavBar />
      <Banner />
      <Donate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
