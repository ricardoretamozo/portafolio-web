import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  Grid,
  Skeleton,
  Icon,
  AspectRatio,
  Link,
} from '@chakra-ui/react';
import { HiOutlineExternalLink } from 'react-icons/hi';

function Noticia({
  title,
  titulo,
  desc,
  tech,
  colorMode,
  image_url,
  url_link,
}) {
  return (
    <>
      <Stack marginBottom={5}>
        <Heading as="h4" size="md" color={`mode.${colorMode}.career.text`}>
          <Flex alignItems="center">
            <Text as="span" color={`mode.${colorMode}.career.text`}>
              {title}
            </Text>
          </Flex>
        </Heading>
        <Grid
          // templateColumns="repeat(2, 1fr)"
          gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']}
          gap={2}
          p={5}
          _hover={{ shadow: 'md' }}
          borderWidth="1px"
          borderColor={`mode.${colorMode}.border`}
          backgroundColor={`mode.${colorMode}.cardBG`}
          position="relative"
          rounded="md"
        >
          <Flex w="100%" h="100%" alignItems="center">
            <AspectRatio ratio={1.85 / 1} w="100%" borderBottomWidth="1px">
              <Image
                rounded="md"
                src={image_url ? image_url : 'https://bit.ly/2k1H1t6'}
                fallback={<Skeleton />}
                objectFit="cover"
              />
            </AspectRatio>
          </Flex>
          <Box w="100%">
            <Stack mt={2} pl={[0, 4, 4, 4]}>
              <Text
                fontSize="lg"
                fontWeight="semibold"
                lineHeight="initial"
                color={`mode.${colorMode}.subtext`}
              >
                <Link href={url_link} isExternal>
                  {titulo}
                  <Icon
                  as={HiOutlineExternalLink}
                />
                </Link>
                
              </Text>
              <Text
                fontSize="lg"
                fontWeight="semibold"
                lineHeight="short"
                color={`mode.${colorMode}.subtext`}
              >
                {desc}
              </Text>
              <Stack isInline>
                {tech.split(',').map(tag => (
                  <Tag
                    size="sm"
                    padding="0 3px"
                    key={tag}
                    fontWeight="bold"
                    color={`mode.${colorMode}.career.subtext`}
                    bgColor={`mode.${colorMode}.career.tagBG`}
                  >
                    {tag}
                  </Tag>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Stack>
    </>
  );
}

const Noticias = () => {
  const { colorMode } = useColorMode();
  const projects = [
    {
      title: 'Noticias de Ciberseguridad S21E23',
      titulo: 'Video YouTube',
      desc: `Hola, mi nombre es Victor y te doy la bienvenida a Noticias de Ciberseguridad. En esta serie de
      videos, comentaremos distintas noticias relacionadas con Cyber-Delitos, Seguridad Informática,
      Privacidad, eventos próximos a realizarse y más. Comencemos…`,
      tech: 'ciberseguridad ',
      image_url: '/noticia.webp',
      url_link: 'https://www.youtube.com/watch?v=iKIxyRK1YiQ',
    },
    {
      title: 'JAVA',
      titulo: 'Building REST APIs with Java Spring Boot framework',
      desc: `This tutorial will help you to create a CRUD(Create, Retrieve, Update and Delete) based application. In this tutorial, we will create every API for a school management system.`,
      tech: 'Spring, Java, SpringBoot',
      image_url: '/noticia2.png',
      url_link: "https://dev.to/singh1114/building-rest-apis-with-java-spring-boot-framework-35e9"
    },
  ];
  return (
    <>
      <Stack align={'center'}>
        <Heading spacing={4} marginBottom={6}>
          Noticias
        </Heading>
      </Stack>
      <Stack
        as="main"
        padding="1.5rem"
        color="#2D3748"
        _dark={{
          color: 'white',
        }}
        backgroundColor={`mode.${colorMode}.background`}
        marginLeft="auto"
        marginRight="auto"
        maxWidth="48rem"
        paddingTop="3rem"
      >
        <Stack spacing={2}>
          {projects.map((project, index) => (
            <Noticia
              key={index}
              title={project.title}
              titulo={project.titulo}
              desc={project.desc}
              tech={project.tech}
              image_url={project.image_url}
              url_link={project.url_link}
              colorMode={colorMode}
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Noticias;
