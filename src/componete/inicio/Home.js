import React from 'react';
import Inicio from './Inicio';
import SmallCentered from '../Footer';
import SplitWithImage from './SplitWithImage';
import Nav from '../Nav';
import Contacto from './Contacto';

function Home() {
  return (
    <>
      <Nav />
      <Inicio />
      <SplitWithImage />
      <Contacto/>
      <SmallCentered />
    </>
  );
}

export default Home;
