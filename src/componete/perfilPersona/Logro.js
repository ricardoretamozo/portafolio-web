import React from 'react';
import {
  Box,
  Flex,
  chakra,
  Link,
  Image,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
export default function Logro() {
  return (
    <>
      <Flex
        bg={useColorModeValue('gray.50', 'gray.800')}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          rounded="lg"
          shadow="md"
          bg="white"
          _dark={{
            bg: 'gray.600',
          }}
          maxW="2xl"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src="/pronabec.jpg"
            alt="Article"
          />

          <Box p={6}>
            <Box>
              <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color="brand.600"
                _dark={{
                  color: 'brand.400',
                }}
              >
                <Badge colorScheme="green">Logro</Badge>
              </chakra.span>
              <Link
                display="block"
                color="gray.800"
                _dark={{
                  color: 'white',
                }}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{
                  color: 'gray.600',
                  textDecor: 'underline',
                }}
              >
                Ganador de la beca de continuidad de estudios 2020
              </Link>
              <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{
                  color: 'gray.400',
                }}
              >
                La Beca Continuidad de Estudios es un programa de ayuda o apoyo
                económico administrado por el Programa Nacional de Becas y
                Crédito Educativo (PRONABEC). Está dirigido a la población de
                estudiantes universitarios que hayan sido afectados por la
                declaración de estado de emergencia en Perú; y que en ese
                momento se encontraban cursando sus carreras en universidades
                públicas o privadas. Para mitigar este tipo de afectación en los
                estudios de alumnos universitarios, esta beca ofrece beneficios
                tanto en el pago de matrícula, alimentación, transporte y
                alimentación. Por eso, si quieres saber cuáles son los
                requisitos para postular, duración de la beca, beneficios y
                otros temas; sigue leyendo este artículo con toda la información
                que te interesa.
              </chakra.p>
            </Box>

            <Box mt={4}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <Image
                    h={10}
                    fit="cover"
                    rounded="full"
                    src="/perfil2.png"
                    alt="Avatar"
                  />
                  <Link
                    mx={2}
                    fontWeight="bold"
                    color="gray.700"
                    _dark={{
                      color: 'gray.200',
                    }}
                  >
                    Ricardo Retamozo
                  </Link>
                </Flex>
                <chakra.span
                  mx={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: 'gray.300',
                  }}
                >
                  21 AGO 2020
                </chakra.span>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
