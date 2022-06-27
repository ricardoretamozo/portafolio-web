import React from 'react';
import SmallCentered from '../Footer';
import Nav from '../Nav';
import Profile from './Profile';
import Projects from './Projects';

function Proyecto() {
  return (
    <>
      <Nav />
      <Profile/>
      <Projects/>
      <SmallCentered />
      
    </>
  );
}

export default Proyecto;