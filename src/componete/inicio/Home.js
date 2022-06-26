import React from 'react';
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

      <SmallCentered />
    </>
  );
}

export default Home;
