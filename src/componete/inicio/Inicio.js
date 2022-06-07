import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Inicio() {
  return (
    <>
      <Stack  direction={{ base: 'column', md: 'row' }} >
        <Flex p={8} flex={1} align={'center'} justify={'center'} mt={8}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
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
                Backend Developer
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Ricardo Retamozo
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              "Dedicarse muchas veces a una misma cosa con frecuencia vence al
              talento y al arte."
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1} justify={'center'} align={'center'}>
          <Image
            alt={'Imagen perfil Ricardo'}
            borderRadius="full"
            height="70%"
            objectFit={'cover'}
            src={' /perfil.png'}
          />
        </Flex>
      </Stack>
    </>
  );
}
