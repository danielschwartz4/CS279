import { Center, ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import Dash from './components/Dash';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center mt={'10%'}>
        <Dash />
      </Center>
    </ChakraProvider>
  );
}

export default App;
