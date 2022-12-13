import * as React from "react";
import { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  theme,
  Heading,
  GridItem,
  Container,
  Input
} from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BingoGame from "./pages/BingoGame";
import Main from "./pages/Main";

export const App = () => {

  return (
    <ChakraProvider theme={theme}>    
      <Box textAlign="center" fontSize="xl">
        <Heading size='3xl' mt='50px' mb='50px'>Bingo Game</Heading>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/bingogame" element={<BingoGame />}/>     
          </Routes>
        </BrowserRouter>

      </Box>
    </ChakraProvider>
  );
};