import {
  Box,
  Circle,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { Quotee } from './Quotee';
import { QuoteIcon } from './QuoteIcon';

export const Testimonials = () => (
  <Box as="section" bg={useColorModeValue('gray.50', 'gray.800')}>
    <Box
      maxW="3xl"
      mx="auto"
      px={{
        base: '6',
        md: '8',
      }}
      pt="12"
      pb="16"
    >
      <Flex direction="column" align="center" textAlign="center">
        <QuoteIcon
          color={useColorModeValue('gray.300', 'gray.600')}
          fontSize={{
            base: '3xl',
            md: '6xl',
          }}
        />
        <Text
          fontSize={{
            base: 'xl',
            md: '2xl',
          }}
          fontWeight="medium"
          mt="6"
        >
          &ldquo;Es un chico muy inteligente, con mucho ánimo que influye en los
          grupos de trabajo que hace que sea toda una aventura divertida al
          realizar el proceso del trabajo, de paso que nos enseñó de que para
          lograr nuestras metas debemos de esforzarnos el doble para llegar a
          ellas, alienta a seguir nuestras metas y mejorar.&rdquo;
        </Text>
        <Quotee
          name="Nicolle Ayroldi Puma Zapata"
          jobTitle="Diseñadora y Desarrolladora de Software"
          imageSrc="/fotolinkedingnicolle.jpeg"
          mt="8"
        />
      </Flex>
      <HStack
        justify="center"
        spacing="4"
        mt="8"
        color={useColorModeValue('gray.300', 'gray.600')}
      >
        <Circle size="3" bg="blue.500" />
        <Circle size="2" bg="currentColor" />
        <Circle size="2" bg="currentColor" />
      </HStack>
    </Box>
  </Box>
);
