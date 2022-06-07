import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react';

export default function WithLargeQuote() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}
    >
      <chakra.h1
        py={5}
        fontSize={48}
        fontFamily={'Work Sans'}
        fontWeight={'bold'}
        color={useColorModeValue('gray.700', 'gray.50')}
      >
        Objetivo Profesional
      </chakra.h1>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}
      >
        Líder de proyectos, que busca comprender el funcionamiento de la
        organización y resolver los problemas o proponer mejoras por medio de la
        tecnología.
      </Text>
      <Box textAlign={'center'}>
        <Avatar src={'./perfil.png'} alt={'Jenny Wilson'} mb={2} />

        <Text fontWeight={600}>Retamozo Ricardo</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Backend Developer
        </Text>
      </Box>
    </Stack>
  );
}
