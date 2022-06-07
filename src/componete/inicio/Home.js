import React from 'react';
import Contacto from './Contacto';
import Inicio from './Inicio';
import SmallCentered from '../Footer';
import SplitWithImage from './SplitWithImage';
import Nav from '../Nav';

function Home() {
  return (
    <>
      <Nav />
      <Inicio />
      <SplitWithImage />
      <Contacto />
      <SmallCentered />
    </>
  );
}

export default Home;
