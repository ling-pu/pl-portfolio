// src/App.jsx
import { Element, Link } from 'react-scroll';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
// scss
import '../scss/style.scss';

function App() {
  return (
    <div className="wrapper">
      {/* 導覽列 */}
      <nav className="left">
        <ul>
          {/* <li><Link to="about" smooth duration={500}>About</Link></li> */}
          <li><Link to="projects" smooth duration={500}>Projects</Link></li>
          {/* <li><Link to="contact" smooth duration={500}>Contact</Link></li> */}
        </ul>
      </nav>

      {/* 各區塊 */}
      <div className="right">
      {/* <Element name="about"><About /></Element> */}
      <Element name="projects"><Projects /></Element>
      {/* <Element name="contact"><Contact /></Element> */}

      </div>

    </div>
  );
}

export default App;
