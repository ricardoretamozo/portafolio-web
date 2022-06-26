import {
  Box,
  Flex,
  HStack,
  Link as LinkB,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as LinkA , useLocation} from 'react-router-dom';

const Links = [
  {
    id: 1,
    nameLink: 'INICIO',
    link: '/home',
  },
  {
    id: 2,
    nameLink: 'PERFIL PROFESIONAL',
    link: '/perfilprofesional',
  },
  {
    id: 3,
    nameLink: 'PROYECTOS',
    link: '/proyecto',
  },
  {
    id: 4,
    nameLink: 'NOTICIAS/ACTUALIDAD',
    link: '/noticia',
  },
  {
    id: 5,
    nameLink: 'NETWORKING',
    link: '/networking',
  },
];

const NavLink = ({ children }) => {
  const sampleLocation = useLocation();
  return(  <LinkB
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children.link}
    as={LinkA}
    to={children.link}
    outline={sampleLocation.pathname=== children.link ? 'solid': ''}
    outlineColor={sampleLocation.pathname=== children.link ? 'blue.400': ''}
  >
    {children.nameLink}
  </LinkB>);
}

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        as="header"
        position="fixed"
        w="100%"
        zIndex={55}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ xl: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={6} alignItems={'center'}>
            <Box>
              <Image
                alt="Logo Retamozo"
                src="/LogoRetamozo.png"
                height="40px"
                width="40px"
              />
            </Box>
            <Text
              fontSize={{ base: 'md', '2xl': '2xl' , lg : '2xl'}}
              color={'blue.400'}
              as={'span'}
              fontFamily="mono"
            >
              RICARDO RETAMOZO
            </Text>
          </HStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={2}>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', xl: 'flex' }}
              >
                {Links.map((link, index) => ( 
                  <NavLink children={link} key={index} />
                ))}
              </HStack>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ xl: 'none' }} >
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, index) => (
                <NavLink children={link} key={index} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
