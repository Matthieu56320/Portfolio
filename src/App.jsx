import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#040d1a] text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}