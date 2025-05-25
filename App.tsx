
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import SeiSonora from './components/SeiSonora';
import ProjectsAndIndicators from './components/ProjectsAndIndicators';
import ActiveCalls from './components/ActiveCalls';
import Testimonials from './components/Testimonials';
import StrategicAlliances from './components/StrategicAlliances';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Approximate height of the fixed header (TopBar + GovLinksBar + MainNav)
// SonoraLogoBar (h-12 logo ~3rem + py-2 ~1rem = 4rem)
// GovLinksBar (py-1 ~0.5rem + text ~0.5rem = 1rem)
// MainNav (h-16 = 4rem)
// Total = 4 + 1 + 4 = 9rem. In Tailwind, 9*4 = 36. So, pt-36 or scroll-mt-36.
const HEADER_HEIGHT_REMS = 9; // Approx 9rem
const HEADER_HEIGHT_CLASS_PT = `pt-${HEADER_HEIGHT_REMS * 4}`; // pt-36
const HEADER_HEIGHT_CLASS_SCROLL_MT = `scroll-mt-${HEADER_HEIGHT_REMS * 4}`; // scroll-mt-36


const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header scrollOffsetClass={HEADER_HEIGHT_CLASS_SCROLL_MT} />
      <main className="flex-grow">
        <Hero paddingTopClass={HEADER_HEIGHT_CLASS_PT} />
        <AboutUs id="quienes-somos" scrollMarginTopClass={HEADER_HEIGHT_CLASS_SCROLL_MT} />
        <SeiSonora id="sei-sonora" scrollMarginTopClass={HEADER_HEIGHT_CLASS_SCROLL_MT} />
        <ProjectsAndIndicators id="proyectos" scrollMarginTopClass={HEADER_HEIGHT_CLASS_SCROLL_MT} />
        <ActiveCalls id="convocatorias" scrollMarginTopClass={HEADER_HEIGHT_CLASS_SCROLL_MT} />
        <Testimonials id="voces" scrollMarginTopClass={HEADER_HEIGHT_CLASS_SCROLL_MT} />
        <StrategicAlliances id="alianzas" scrollMarginTopClass={HEADER_HEIGHT_CLASS_SCROLL_MT} />
        <ContactForm id="contacto" scrollMarginTopClass={HEADER_HEIGHT_CLASS_SCROLL_MT} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
