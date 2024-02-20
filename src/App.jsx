import { useState } from 'react'
import NavBar from './components/NavBar'
import {ThemeProvider} from 'styled-components'
import {darkTheme, lightTheme} from './utils/DarkLightTheme'
import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './utils/GlobalStyle'
import BioDetails  from './components/Bio'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import ProjectModal from './components/ProjectModal'


function App() {
 
  const [lightThemeState, setLightThemeState]  = useState(true)
  const [openModal, setModalOpen] = useState({state: false, project: null})


  return(
    <ThemeProvider theme={lightThemeState ? lightTheme : darkTheme}>
      <GlobalStyle />  
      <Router>
        <NavBar />
        <BioDetails />
        <Skills />
        <Experiences />
        <Education />
        <Projects openModal={openModal} setModalOpen={setModalOpen} />
        <Contact />
        <Footer />
        {openModal.state && 
        <ProjectModal openModal={openModal} setModalOpen={setModalOpen} />
        }
      </Router>
    </ThemeProvider>
  )
  
}

export default App
