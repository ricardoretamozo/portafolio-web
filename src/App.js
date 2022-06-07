import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import Home from './componete/inicio/Home';
import PerfilProfesional from './componete/perfilPersona/PerfilProfesional';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/perfilprofesional" element={<PerfilProfesional/>} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
