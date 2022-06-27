import React from 'react';
import SmallCentered from '../Footer';
import Nav from '../Nav';
import Articles from './Articles';
import Noticias from './Noticia';
import OpenSource from './OpenSource';

function NoticiaActualidad() {
  return (
    <>
      <Nav />
      <Articles />
      <OpenSource />
      <Noticias/>
      <SmallCentered />
    </>
  );
}

export default NoticiaActualidad;
