import { Stack, useColorMode, Heading } from '@chakra-ui/react';
import React from 'react';
import ChakraCarousel from './ChakraCarousel';
import SocialProfileSimple from './SocialProfileSimple';
import { Testimonials } from './Testimonials';

function NetworkingHome() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Stack
        as="main"
        padding="1.5rem"
        backgroundColor={`mode.${colorMode}.background`}
        _dark={{
          color: 'white',
        }}
        marginLeft="auto"
        marginRight="auto"
        maxW={{
          base: '90%',
          sm: '35rem',
          md: '43.75rem',
          lg: '57.5rem',
          xl: '75rem',
          xxl: '87.5rem',
        }}
        paddingTop="3rem"
        alignItems="center"
      >
        <Heading
          color={`mode.${colorMode}.text`}
          spacing={4}
          marginBlockStart={6}
        >
          Mi red de contactos tipo "A"
        </Heading>
        <ChakraCarousel gap={6}>
          <SocialProfileSimple />
          <SocialProfileSimple />
          <SocialProfileSimple />
          <SocialProfileSimple />
          <SocialProfileSimple />
          <SocialProfileSimple />
        </ChakraCarousel>
        <Heading
          color={`mode.${colorMode}.text`}
          spacing={4}
          marginBlockStart={6}
        >
          Mi red de contactos tipo "B"
        </Heading>
        <ChakraCarousel gap={6}>
          <SocialProfileSimple />
          <SocialProfileSimple />
          <SocialProfileSimple />
          <SocialProfileSimple />
          <SocialProfileSimple />
          <SocialProfileSimple />
        </ChakraCarousel>
        <Heading
          color={`mode.${colorMode}.text`}
          spacing={4}
          marginBlockStart={6}
        >
          Mi red de contactos tipo "C"
        </Heading>
        <ChakraCarousel gap={6}>
          <SocialProfileSimple />
          <SocialProfileSimple />
          <SocialProfileSimple />
          <SocialProfileSimple />
          <SocialProfileSimple />
          <SocialProfileSimple />
        </ChakraCarousel>
        <Heading
          color={`mode.${colorMode}.text`}
          spacing={4}
          marginBlockStart={6}
        >
          Mis Recomendaciones
        </Heading>
        <ChakraCarousel gap={6}>
          <Testimonials/>
          <Testimonials/>
          <Testimonials/>
          <Testimonials/>
          <Testimonials/>
          <Testimonials/>
        </ChakraCarousel>
      </Stack>
    </>
  );
}

export default NetworkingHome;
