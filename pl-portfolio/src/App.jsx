// src/App.jsx
import { Element, Link } from 'react-scroll';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
// scss
import '../scss/style.scss';

function App() {
  return (
    <>
      <div className='head'>
        <h2>Hello, I'm designer <h2 className="name">PL</h2>.</h2>
      </div>
      <div className="wrapper">
        {/* 導覽列 */}
        <nav className="nav">
          <ul>
            <li><Link to="about" smooth duration={500}>About</Link></li>
            <li><Link to="projects" smooth duration={500}>Selected Projects</Link></li>
            <li><Link to="contact" smooth duration={500}>Contact</Link></li>
            <p>my instagram</p><li><a href="https://www.instagram.com/artbypl_/">artbypl_</a></li>
          </ul>
        </nav>

        {/* 各區塊 */}
        <div className="show">
          <Element name="about"><About /></Element>
          <Element name="projects"><Projects /></Element>
          <Element name="contact"><Contact /></Element>

        </div>

      </div>
      <footer>
        <p>&copy; 2025 PL. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
