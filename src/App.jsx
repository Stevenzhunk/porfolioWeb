import './App.css'
import About from './assets/components/about'
import Contacs from './assets/components/Contacs'
import Courses from './assets/components/Courses'
import Hero from './assets/components/Hero'
import Nav from './assets/components/NavbarTwo'
import Projects from './assets/components/Projects'
import Steps from './assets/components/Steps'


function App() {
 

  return (
    <div className="App ">
      <Nav/>
      <Hero/>
      <About/>
      <Steps/>
      <Projects/>
      <Courses/>
      <Contacs/>
    </div>
  )
}

export default App
