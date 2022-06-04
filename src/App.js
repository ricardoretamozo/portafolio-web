import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import Inicio from './componete/inicio/Inicio';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/home" element={<Inicio />} />
      
      </Routes>
    </ChakraProvider>
  );
}

export default App;
