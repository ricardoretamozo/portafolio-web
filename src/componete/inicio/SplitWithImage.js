import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

import { DiJava , DiNodejsSmall, DiPhp } from "react-icons/di";
//import { ReactElement } from 'react';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Backend
          </Text>
          <Heading>Ricardo M. Retamozo Garay</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Hola, soy Riacrdo2 como todos empecé en el mundo de las computadoras por los videojuegos, pero siempre me pregunté si solo iba a utilizar mi computadora para jugar, donde intente busca la forma de crear un juego, pero donde ese tiempo vivía no tenia acceso a internet por lo cual muy pronto esa idea murió, pero ya sabia que mi futuro era las computadoras, actualmente soy Backend Developer y este es mi portafolio.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={<Icon color={'yellow.500'} w={5} h={5} as={DiJava}/>}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Java'}
            />
            <Feature
              icon={<Icon color={'green.500'} w={5} h={5} as={DiNodejsSmall} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Node JS'}
            />
            <Feature
              icon={<Icon color={'purple.500'} w={5} h={5} as={DiPhp}/>}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'PHP'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
              
            src={'/perfil2.png'}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
