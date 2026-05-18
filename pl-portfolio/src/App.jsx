// src/App.jsx
import { Element, Link } from 'react-scroll';
import About from './sections/About';
import Projects from './sections/Projects';
import Personalworks from './sections/Personalworks';
import Contact from './sections/Contact';
// scss
import '../scss/style.scss';
// img
import img1 from '../favicon.svg';
import { useHamburgerMenu } from "./sections/useHamburgerMenu";


function App() {
  const { isOpen, toggleMenu, closeMenu, menuRef } = useHamburgerMenu();
  
  return (
    <>

      <div className="wrapper" ref={menuRef}>

        {/* <Link className="contact-icon button-style" to="contact" smooth duration={500} onClick={closeMenu}>Contact Me!</Link> */}

        {/* hamburger menu */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg id="hamburger-icon"
            viewBox="0 0 90 90"
            className={`hamburger-icon ${isOpen ? "open" : ""}`}
          >
            <path className="cls-1" fill="currentColor" d="M90,39.32c0,6.38-20.36,7.35-23.34,12.49s6.16,23.4.85,26.48-16.13-13.97-22.51-13.97-17.36,16.95-22.51,13.97,3.92-21.17.85-26.48S0,45.7,0,39.32s20.36-7.35,23.34-12.49S17.18,3.42,22.49.35s16.13,13.97,22.51,13.97S62.36-2.63,67.51.35s-3.92,21.17-.85,26.48,23.34,6.12,23.34,12.49Z" />
          </svg>
        </button>


        {/* 導覽列 */}
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            {/* <li><img className='profile-img' src={img1} alt="favicon" /></li> */}
            
            {/* <li><Link to="projects" smooth duration={500} onClick={closeMenu}>Selected Projects</Link></li> */}
            <li><Link to="personalworks" smooth duration={500} onClick={closeMenu}>Moments of Presence</Link></li>
            <li><Link to="about" smooth duration={500} onClick={closeMenu}>About</Link></li>
            <li><Link to="contact" smooth duration={500} onClick={closeMenu}>Contact</Link></li>   
            <span className="nav-label">my instagram</span><li><a href="https://www.instagram.com/artbypl_/">artbypl_</a></li>
          </ul>
        </nav>



        {/* 各區塊 */}
        <div className="show">
          {/* header */}
          <div className="header">
            <h2>Moments of Presence</h2>

          </div>
          
          {/* <Element name="projects"><Projects /></Element> */}
          <Element name="personalworks"><Personalworks /></Element>
          <Element name="about"><About /></Element>
          <Element name="contact"><Contact /></Element>
          

        </div>

      </div>
      <footer>
        <p>&copy; 2026 PL. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
