import React from 'react';
import SmallCentered from '../Footer';
import Nav from '../Nav';
import CallToActionWithVideo from './CallToActionWithVideo';
import PerfilProfesionalHome from './PerfilProfesionalHome';
import WithLargeQuote from './WithLargeQuote';

function PerfilProfesional() {
  return (
    <>
      <Nav />
      <WithLargeQuote/>
      <CallToActionWithVideo/>
      <PerfilProfesionalHome/>
      <SmallCentered />
    </>
  );
}

export default PerfilProfesional;
