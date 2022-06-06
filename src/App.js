import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import Home from './componete/inicio/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/home" element={<Home/>} />
      
      </Routes>
    </ChakraProvider>
  );
}

export default App;
