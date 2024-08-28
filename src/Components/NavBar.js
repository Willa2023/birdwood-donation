import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router
} from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
          <h2>Birdwood Reserve Environmental Project</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about"  className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#donate"  className={activeLink === 'donate' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('donate')}>Donate</Nav.Link>
              <Nav.Link href="#contacts"  className={activeLink === 'contacts' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contacts')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Router>
    );
}

export default NavBar;