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
  Link,
  Icon,
  Grid,
  Skeleton,
  Tooltip,
  IconButton,
  AspectRatio,
} from '@chakra-ui/react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
function Project({ title, titulo, desc, tech, colorMode, image_url, url_git , url }) {
  const openUrl = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank');
  };
  return (
    <>
      <Stack marginBottom={5}>
        <Heading
          isExternal
          size="md"
          color={`mode.${colorMode}.career.text`}
          as={Link}
          href={url}
        >
          <Flex alignItems="center">
            <Text as="span" color={`mode.${colorMode}.career.text`}>
              {title} <Icon
                  as={HiOutlineExternalLink}
                />
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
                as="ins"
              >
                {titulo}
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
              <div style={{ marginLeft: '5px', paddingBottom: '3px' }}>
                <Tooltip label="Source Code" placement="right">
                  <IconButton
                    aria-label="Github Link"
                    size="lg"
                    icon={<FiGithub />}
                    color={`mode.${colorMode}.text`}
                    variant="unstyled"
                    height="auto"
                    minWidth="auto"
                    onClick={e => openUrl(e, url_git)}
                  />
                </Tooltip>
              </div>
            </Stack>
          </Box>
        </Grid>
      </Stack>
    </>
  );
}

const Projects = () => {
  const { colorMode } = useColorMode();
  const projects = [
    {
      title: 'PASANTIA - CORPORACION RISO E.I.R.L',
      titulo: 'MODULO PRODUCIÓN',
      desc: `Peterpitch is a tool that takes the fun in your company seriously
          and turns your meetings into real performance boosters. With Peter
          Pitch, you round up the pack of employees and turn even the shakiest
          puppies into true wolves.`,
      tech: 'react, javascript, python, django',
      image_url: '/tarjeta1.jpg',
      url_git: 'https://github.com/ricardoretamozo/corporacion_djangorest',
    },
    {
      title: 'BREVI',
      titulo: 'PROCESO...',
      desc: `This is a project management website for design and procurement teams. It helps to collaborate and manage all of your floor plans in one place, writing specs, budgeting and timelines.`,
      tech: 'ruby, rails, javascript',
      image_url: '/tarjeta2.jpg',
      url_git: 'https://github.com/ricardoretamozo/Brevi',
    },
    {
      title: 'Geek&&Clicks',
      desc: `This is an Ecommerce furniture site. It provides a single platform to multiple vendors where they can put their products on sale.`,
      tech: 'ruby, rails, javascript',
      image_url: '/tarjeta3.jpg',
      url: 'https://www.geeksandclicks.link/',
    },
    {
      title: 'PODER JUDICIAL - GESTIÓN INCIDENCIAS',
      titulo: 'PROCESO...',
      desc: `Souq of Qatar is online comparison website. This website is independent of any retailers, it displays the products of all the major stores.
      Just like when you compare prices and products while visiting physical shops and stores, online price comparison behaves in the same way.`,
      tech: 'ruby, rails, javascript',
      image_url: '/tarjeta4.jpg',
      url_git: 'https://github.com/ricardoretamozo/ServiceDesk',
    },
    {
      title: 'TIENDAYA',
      titulo: 'PROCESO...',
      desc: `The GoSave app let's you send allowances, assign chores, and approve spending all from your smartphone. These actions appear on each kid's toy, along with a live bank balance so they can watch their savings grow.`,
      tech: 'ruby, rails',
      image_url: '/tarjeta5.jpg',
      url_git: 'https://github.com/ricardoretamozo/NetMarket',
    },
  ];
  return (
    <>
      <Stack align={'center'}>
        <Heading spacing={4} marginBottom={6}>
          Proyectos
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
            <Project
              key={index}
              title={project.title}
              titulo={project.titulo}
              desc={project.desc}
              tech={project.tech}
              image_url={project.image_url}
              colorMode={colorMode}
              url_git={project.url_git}
              url={project.url}
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Projects;
