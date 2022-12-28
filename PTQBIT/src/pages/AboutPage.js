import React from 'react';
import AboutBody from '../components/AboutPage/AboutBody';
import AboutTitle from '../components/AboutPage/AboutTitle';
import Testimonial from '../components/AboutPage/Testimonial';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function AboutPage() {
  return (
    <>
      <Navigation />
      <AboutTitle />
      <AboutBody />
      <Testimonial />
      <Footer />
    </>
  );
}

export default AboutPage;
