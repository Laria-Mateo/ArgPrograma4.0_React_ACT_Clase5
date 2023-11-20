import { useState } from "react";
import { Button, Text, Box, VStack, Heading, HStack, ScaleFade, Flex } from '@chakra-ui/react';
import fondo from './fondo.jpg';

function ContadorResponsive() {
  const [contador, setContador] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const AumentarContador = () => {
    setContador(contador + 1);
  };

  const DecrementarContador = () => {
    setContador(contador - 1);
  };

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const basicBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: '250px',
    color: 'white',
    textShadow: '0 0 30px white',
    fontWeight: 'bold',
    fontSize: '20px',
    px: 4,
    background: `url(${fondo}) center/cover no-repeat`,
  };

  return (
    <>
    <Box w={'100%'} height={'75vh'} bg={'teal.50'} >
    <Flex  align="center" justify="center">
    
  <Button onClick={onToggle} boxShadow='dark-lg' p={'3vh'} w={['full', 'md']} mt={'10px'}  >
    Mostrar Contador
  </Button><Box/>
</Flex>

      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box w={['full','md']} p={[8,10]} mt={[20,'10vh']} mb={[20,'10vh']}  mx='auto' border={['none','1px']}
             borderColor={['','gray.300']} borderRadius={10} boxShadow='dark-lg' sx={basicBoxStyles}  >
          <VStack spacing={4} w='full'>
            <VStack align='flex-start'>
              <Heading>Contador</Heading>
            </VStack>
            <HStack spacing={4} align='center'>
              <Button flex={1} colorScheme='facebook' onClick={AumentarContador} m={'5px'}>Aumentar</Button>
              <Button flex={1} colorScheme='facebook' onClick={DecrementarContador } m={'5px'}>Decrementar</Button>
            </HStack>
            <Text fontSize='xl'>{contador}</Text>
          </VStack>
        </Box>
      </ScaleFade>
      </Box>
    </>
  );
}

export default ContadorResponsive;
