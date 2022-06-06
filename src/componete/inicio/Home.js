import React from 'react';
import Contacto from './Contacto';
import Inicio from './Inicio';
import SmallCentered from '../Footer';
import SplitWithImage from './SplitWithImage';

function Home() {
  return (
    <>
      <Inicio />
      <SplitWithImage/>
      <Contacto />
      <SmallCentered/>
    </>
  );
}

export default Home;
