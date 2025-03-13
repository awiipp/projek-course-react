import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FaqPage from './pages/FaqPage'
import KelasPage from './pages/KelasPage'
import TestimonialPage from './pages/Testimonial'
import SyaratKetentuanPage from './pages/SyaratKetentuanPage'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/faq' Component={FaqPage} />
        <Route path='/kelas' Component={KelasPage} />
        <Route path='/syaratketentuan' Component={SyaratKetentuanPage} />
        <Route path='/testimonial' Component={TestimonialPage} />
      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App
