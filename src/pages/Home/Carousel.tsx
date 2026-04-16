import { Carousel, IconButton, Box, Image } from "@chakra-ui/react"
import { LuArrowLeft, LuArrowRight } from "react-icons/lu"

const items = Array.from({ length: 5 })

export default function CarouselComponent() {
  return (
    <Carousel.Root slideCount={items.length} maxW="xl" mx="auto" gap="4">
      <Carousel.Control justifyContent="center" gap="4" width="full">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="outline">
            <LuArrowLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="full">
          {items.map((_src, index) => (
            <Carousel.Item key={index} index={index}>
              <Box w="100%" h="300px" rounded="lg" fontSize="2.5rem">
                <Image
                  src={`https://source.unsplash.com/random/800x600?${index}`}
                  alt={`Slide ${index + 1}`}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="outline">
            <LuArrowRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>

      <Carousel.Indicators />
    </Carousel.Root>
  )
}
