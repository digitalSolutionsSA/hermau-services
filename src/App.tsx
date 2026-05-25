import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import GardenMaintenance from './pages/GardenMaintenance'
import CleaningServices from './pages/CleaningServices'
import Contact from './pages/Contact'
import Terms from './pages/Terms'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/garden-maintenance" element={<GardenMaintenance />} />
          <Route path="/cleaning-services" element={<CleaningServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
