import React from 'react';
import SmallCentered from '../Footer';
import Nav from '../Nav';
import CallToActionWithVideo from './CallToActionWithVideo';
import Carousel from './Carousel';
import Logro from './Logro';
import PerfilProfesionalHome from './PerfilProfesionalHome';
import WithLargeQuote from './WithLargeQuote';

function PerfilProfesional() {
  return (
    <>
      <Nav />
      <WithLargeQuote/>
      <CallToActionWithVideo/>
      <PerfilProfesionalHome/>
      <Carousel/>
      <Logro/>
      <SmallCentered />
      
    </>
  );
}

export default PerfilProfesional;
