import * as React from 'react'


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import ContadorResponsive from './components/contador_responsive/contadorReponsive'
import Header from './components/header/header'
import Footer from './components/footer/footer'



function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>

      <Header />
      <ContadorResponsive />
      <Footer />

    </ChakraProvider>
  )
}

export default App
