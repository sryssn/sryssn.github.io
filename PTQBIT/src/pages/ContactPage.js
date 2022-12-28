import React from 'react';
import ContactUsBody from '../components/ContactPage/ContactUsBody';
import ContactUsTitle from '../components/ContactPage/ContactUsTitle';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function ContactPage() {
  return (
    <>
      <Navigation />
      <ContactUsTitle />
      <ContactUsBody />
      <Footer />
    </>
  );
}

export default ContactPage;
