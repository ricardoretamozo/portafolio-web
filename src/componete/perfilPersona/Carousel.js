import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Image,
  useColorModeValue,
  Heading,
  Stack,
} from '@chakra-ui/react';

export default function Carousel() {
  const slides = [
    {
      img: '/1.png',
    },
    {
      img: '/2.png',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = 'right';
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide(s => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide(s => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === 'left' ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);
  return (
    <>
      <Stack align={'center'}>
        <Heading spacing={4} marginBottom={6}>
          Tarjeta Presentacion
        </Heading>
      </Stack>

      <Flex
        w="full"
        h="100%"
        bg={useColorModeValue('gray.50', 'gray.800')}
        //p={10}
        px={{ base: '0%', xl: '20%' }}
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="full" overflow="hidden">
          <Flex h="full" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                  whiteSpace="nowrap"
                >
                  {sid + 1} / {slidesCount}
                </Text>
                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
