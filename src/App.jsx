import './App.css';
import About from './assets/components/About';
import Contacs from './assets/components/Contacs';
import Courses from './assets/components/Courses';
import Hero from './assets/components/Hero';
import Nav from './assets/components/NavbarTwo';
import Projects from './assets/components/Projects';
import Steps from './assets/components/Steps';
import Technology from './assets/components/Technology';
import WhiteBLurBG from './assets/img/whiteblur.jpg';
import BlackBlurBG from './assets/img/darkBlur2.png';
import { useDarkMode } from './assets/provider/Darkmode';

function App() {
  const { darkMode } = useDarkMode();
  return (
    <div className="App">
      <div
        style={
          !darkMode
            ? { backgroundImage: `url(${WhiteBLurBG})` }
            : { backgroundImage: `url(${BlackBlurBG})` } // Sin imagen de fondo en modo oscuro
        }
        className={`bg-cover bg-center h-screen ${
          darkMode ? 'bg-softdark' : 'bg-white'
        }`}
      >
        <Nav />
        <Hero />
      </div>
      <About />
      <Steps />
      <Projects />
      <Courses />
      <Technology />
      <Contacs />
    </div>
  );
}

export default App;
