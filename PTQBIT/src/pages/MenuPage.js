import React from 'react';
import Footer from '../components/Footer';
import MenuBody from '../components/MenuPage/MenuBody';
import MenuTitle from '../components/MenuPage/MenuTitle';
import Navigation from '../components/Navigation';

function MenuPage() {
  return (
    <>
      <Navigation />
      <MenuTitle />
      <MenuBody />
      <Footer />
    </>
  );
}

export default MenuPage;
