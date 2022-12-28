import React from 'react';
import Footer from '../components/Footer';
import BestInTownCoffee from '../components/HomePage/BestInTownCoffee';
import CarouselClients from '../components/HomePage/CarouselClients';
import CarouselSection from '../components/HomePage/CarouselSection';
import CountUpSection from '../components/HomePage/CountUp';
import OurDeliciousOffer from '../components/HomePage/OurDeliciousOffer';
import OurSweetGallery from '../components/HomePage/OurSweetGallery';
import Navigation from '../components/Navigation';

function HomePage() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <CarouselSection />
        <OurDeliciousOffer />
        <BestInTownCoffee />
        <CountUpSection />
        <CarouselClients />
        <OurSweetGallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default HomePage;
