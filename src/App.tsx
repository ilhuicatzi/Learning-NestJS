import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import IntroductionPage from './pages/IntroductionPage'
import ModulosPage from './pages/ModulosPage'
import ControllersPage from './pages/ControllersPage'
import ServisesPage from './pages/ServisesPage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/modulos" element={<ModulosPage />} />
        <Route path="/controllers" element={<ControllersPage />} />
        <Route path="/servises" element={<ServisesPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App