import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import Home from './componete/inicio/Home';
import PerfilProfesional from './componete/perfilPersona/PerfilProfesional';
import Proyecto from './componete/proyectos/Proyecto';
import NoticiaActualidad from './componete/noticiaActualidad/NoticiaActualidad';
import Networking from './componete/networking/Networking';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/perfilprofesional" element={<PerfilProfesional/>} />
        <Route path="/proyecto" element={<Proyecto/>} />
        <Route path="/noticia" element={<NoticiaActualidad/>} />
        <Route path="/networking" element={<Networking/>} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
