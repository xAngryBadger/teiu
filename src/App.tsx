import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MenuSection from './components/MenuSection'
import AboutSection from './components/AboutSection'
import GallerySection from './components/GallerySection'
import ReservationSection from './components/ReservationSection'
import FooterSection from './components/FooterSection'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {!loaded && <Preloader />}
      <div className={loaded ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
        <Header />
        <main>
          <HeroSection />
          <MenuSection />
          <AboutSection />
          <GallerySection />
          <ReservationSection />
        </main>
        <FooterSection />
      </div>
    </>
  )
}
