import React from 'react';
import { useMediaQuery, useBreakpointValue } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiTechcrunch } from 'react-icons/di';
import { FaSchool } from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <VStack p={5}>
      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column'}
        w="100%"
        maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}
      >
        <Box alignSelf="center" px="32" py="16">
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              Formación
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Académica
            </Text>{' '}
          </Heading>
        </Box>
        <Box alignSelf="center" px="32" py="16">
          <Text fontWeight="bold" fontSize="2xl">
            Educación:
          </Text>
          <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              bg="blue.400"
              h="30vh"
              w="30vh"
              justify="flex-end"
            >
              <Icon color="white" p="4" as={DiTechcrunch} w="24" h="24" />
              <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                Tecsup 2019-2022
              </Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="gray.100"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: 'teal.400' }}
            >
              <Icon color="black" p="4" as={GiChemicalDrop} w="24" h="24" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                Linus Pauling 2015-2016
              </Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="gray.100"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: 'green.400' }}
            >
              <Icon as={FaSchool} p="4" w="24" h="24" color="black" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                Simón Bolívar 2011-2015
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </VStack>
  );
}

export default Profile;
