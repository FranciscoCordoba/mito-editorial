import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechnicalDetails from './components/TechnicalDetails';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body text-slate-800 bg-background-light min-h-screen flex flex-col group/design-root overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full mx-auto px-0 md:px-6 py-6 md:py-12">
        <Hero />

        <div className="max-w-[1200px] w-full mx-auto px-6">
          <About />
          <Services />
          <TechnicalDetails />
        </div>

        <Testimonials />

        <div className="max-w-[1200px] w-full mx-auto px-6">
          <Portfolio />
        </div>
      </main>

      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
