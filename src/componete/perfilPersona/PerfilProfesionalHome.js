import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function PerfilProfesionalHome() {
  return (
    <>
      <Box
        maxW="7xl"
        mx="auto"
        px={{
          base: '0',
          lg: '12',
        }}
        py={{
          base: '0',
          lg: '12',
        }}
      >
        <Stack
          direction={{
            base: 'column-reverse',
            lg: 'row',
          }}
          spacing={{
            base: '0',
            lg: '20',
          }}
        >
          <Box
            width={{
              lg: 'sm',
            }}
            transform={{
              base: 'translateY(-50%)',
              lg: 'none',
            }}
            bg={{
              base: useColorModeValue('red.50', 'gray.700'),
              lg: 'transparent',
            }}
            mx={{
              base: '6',
              md: '8',
              lg: '0',
            }}
            px={{
              base: '6',
              md: '8',
              lg: '0',
            }}
            py={{
              base: '6',
              md: '8',
              lg: '12',
            }}
          >
            <Stack
              spacing={{
                base: '8',
                lg: '10',
              }}
            >
              <Stack
                spacing={{
                  base: '2',
                  lg: '4',
                }}
              >
                <Heading
                  size="xl"
                  color={useColorModeValue('blue.400', 'blue.400')}
                >
                  Fortalezas
                </Heading>
                <Heading size="sm" fontWeight="normal">
                  <UnorderedList>
                    <ListItem>
                      Mi capacidad para innovar y con eso poder solucionar
                      problemas específicos.
                    </ListItem>
                    <ListItem>
                      Poder trabajar con normalidad bajo presión.
                    </ListItem>
                    <ListItem>
                      Me considero una persona perseverante, mantengo una
                      actitud constante e insistente en mis actividades para el
                      logro de resultados.
                    </ListItem>
                    <ListItem>
                      Resiliencia, tengo la capacidad de seguir adelante a pesar
                      de las dificultades de la vida.
                    </ListItem>
                  </UnorderedList>
                </Heading>
              </Stack>
              <HStack spacing="3">
                <Link
                  color={useColorModeValue('red.500', 'red.300')}
                  fontWeight="bold"
                  fontSize="lg"
                >
                  Ver mas
                </Link>
                <Icon
                  color={useColorModeValue('red.500', 'red.300')}
                  as={FaArrowRight}
                />
              </HStack>
            </Stack>
          </Box>
          <Flex flex="1" overflow="hidden">
            <Image
              src="./tarjeta.jpg"
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="450px"
              minW="300px"
              objectFit="cover"
              flex="1"
            />
            <Image
              display={{
                base: 'none',
                sm: 'initial',
              }}
              src="./tarjetaVertical.jpg"
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="450px"
              objectFit="cover"
            />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default PerfilProfesionalHome;
