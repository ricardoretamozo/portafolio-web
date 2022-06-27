import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Tag,
  Link,
  Tooltip,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { FiBookmark, FiGithub } from 'react-icons/fi';

function Feature({
  title,
  desc,
  tags,
  article_url,
  github_url,
  colorMode,
  ...rest
}) {
  const openUrl = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank');
  };
  return (
    <Box
      p={5}
      isExternal
      as={Link}
      href={article_url}
      _hover={{ shadow: 'md', textDecoration: 'none' }}
      cursor="pointer"
      borderWidth="1px"
      borderColor={`mode.${colorMode}.border`}
      backgroundColor={`mode.${colorMode}.cardBG`}
      position="relative"
      rounded="md"
      
      {...rest}
    >
      <Box
        as={FiBookmark}
        size="25px"
        width="1.5rem"
        height="1.5rem"
        position="absolute"
        color="#cbd5e0"
        fill={`mode.${colorMode}.background`}
        
        right="0.5rem"
        top="-8px"
        marginBottom="1rem"
      />
      <Heading fontSize="xl" color={`mode.${colorMode}.text`}>
        {title}
      </Heading>
      <Stack spacing={2} mt={1} isInline alignItems="center">
        {tags.split(',').map(tag => (
          <Tag
            size="sm"
            padding="0 3px"
            key={tag}
            color="#4299E1"
            bgColor={`mode.${colorMode}.tagBG`}
          >
            {tag}
          </Tag>
        ))}
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
              onClick={e => openUrl(e, github_url)}
            />
          </Tooltip>
        </div>
      </Stack>
      <Text mt={3} color={`mode.${colorMode}.subtext`}>
        {desc}
      </Text>
    </Box>
  );
}

const Articles = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      as="main"
      padding="1.5rem"
      color="#2D3748"
      backgroundColor={`mode.${colorMode}.background`}
      _dark={{
        color: 'white',
       
      }}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="3rem"
    >
      <Stack spacing={4}>
        <Heading color={`mode.${colorMode}.text`} spacing={4} marginBlockStart={6} >
          Artículos y Investigaciones
        </Heading>
        <Feature
          title="Create an app with react(context api) and ruby on rails by using chakraUI and Formik"
          desc="The main goal of this app to understand how to create a react app on the basis of rails back-end api with the mixture of context-api(react) and chakraUI."
          tags="ruby, rails, react, chakraUi, formik"
          article_url="https://dev.to/m_ahmad/create-an-app-with-react-context-api-and-ruby-on-rails-by-using-chakraui-and-formik-40c1"
          github_url="https://github.com/MA-Ahmad/blog-app-react-frontend"
          colorMode={colorMode}
        />
       <Feature
          title="GitHub en coreano, portugués y ahora español"
          desc="Discussions en GitHub tiene una nueva función de traducción incluye soporte para coreano y portugués y ahora español!"
          tags="git, GitHut"
          article_url="https://dev.to/andreagriffiths11/github-en-coreano-portugues-y-ahora-espanol-5983"
          github_url="https://github.com/"
          colorMode={colorMode}
        />
        <Feature
          title="Aprende Rust en español"
          desc="Aprende Rust en español y a tu ritmo con estos vídeos de YouTube."
          tags="Rust"
          article_url="https://dev.to/robertohuertasm/aprende-rust-en-espanol-1pea"
          github_url="https://github.com/rust-lang/rust"
          colorMode={colorMode}
        />
        <Feature
          title="Express, Node y MongoDB"
          desc="JavaScript se considera el principal lenguaje de desarrollo web en la actualidad y se ejecuta en millones de aplicaciones y sitios web."
          tags="JavaScript"
          article_url="https://www.youtube.com/watch?v=JxoeMvms4I4&t=2s"

          colorMode={colorMode}
        />
      </Stack>
    </Stack>
  );
};

export default Articles;
