import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FaqPage from './pages/FaqPage'
import KelasPage from './pages/KelasPage'
import TestimonialPage from './pages/Testimonial'
import SyaratKetentuanPage from './pages/SyaratKetentuanPage'

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' Component={HomePage}></Route>
      <Route path='/faq' Component={FaqPage}></Route>
      <Route path='/kelas' Component={KelasPage}></Route>
      <Route path='/syaratketentuan' Component={SyaratKetentuanPage}></Route>
      <Route path='/testimonial' Component={TestimonialPage}></Route>
      </Routes>
    </div>
  )
}

export default App
