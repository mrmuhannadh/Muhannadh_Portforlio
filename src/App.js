import { useRef } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mode from './Components/mode';
import "@fontsource/montserrat";
import FirstSet from './Components/aboutMe/firstSet';
import Edu from './Components/Education/edu';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import Projects from './Components/projects/Projects';

function App() {
  const aboutme = useRef(null);
  const education = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale = 0.86, maximum-scale=3.0, minimum-scale=0.86"></meta>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navbarCustom fixed-top">
          <Container fluid>
            <Navbar.Brand href="#" className='navitem'>Muhannadh | Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className='offcanvas'
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='navContent'>
                  Muhannadh | Portfolio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className='navitem' onClick={() => scrollToSection(aboutme)}>About</Nav.Link>
                  <Nav.Link href="#action1" className='navitem' onClick={() => scrollToSection(education)}>Education</Nav.Link>
                  <Nav.Link href="#action2" className='navitem' onClick={() => scrollToSection(projects)}>Projects</Nav.Link>
                  <Nav.Link href="#action2" className='navitem' onClick={() => scrollToSection(contact)}>Contact</Nav.Link>
                  <Mode />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div ref={aboutme} className='aboutme'>
        <FirstSet/>
      </div>
      <div ref={education} className='education'>
        <Edu/>
      </div>
      <div ref={projects} className='projects'>
        <Projects/>
      </div>
      <div ref={contact} className='contact'>Edu</div>
    </div>
  );
}

export default App;
