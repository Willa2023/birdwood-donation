import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import About from './Components/About';
import Donate from './Components/Donate';
// import Quiz from './Components/Quiz';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Supporters from './Components/Supporters';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <About />
      {/* <Quiz /> */}
      <Supporters />
      <Donate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
